import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** X’s CDN returns 403 to browsers that don’t send an allowed Referer. Proxy with server-side fetch. */
const ALLOWED_HOSTS = new Set(["video.twimg.com"]);

const UPSTREAM_HEADERS: Record<string, string> = {
  Referer: "https://twitter.com/",
  Origin: "https://twitter.com",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.9,audio/*;q=0.9,*/*;q=0.8",
};

/**
 * X sometimes responds 416 Range Not Satisfiable to certain Range shapes (e.g. open-ended
 * `bytes=0-`). Retrying without Range is only safe for “start of file” probes — not for seeks.
 */
function shouldRetryWithoutRangeOn416(range: string | null): boolean {
  if (!range) return false;
  const r = range.trim();
  const m = /^bytes=(\d+)-(\d*)$/.exec(r);
  if (!m) return false;
  const start = parseInt(m[1], 10);
  const endPart = m[2];
  if (start !== 0) return false;
  // `bytes=0-` = from start of file; `bytes=N-` with N>0 = seek — do not retry full GET.
  if (endPart === "") return true;
  const end = parseInt(endPart, 10);
  return !Number.isNaN(end) && end <= 512 * 1024;
}

function buildResponse(upstream: Response): NextResponse {
  const out = new Headers();
  for (const name of [
    "content-type",
    "content-length",
    "content-range",
    "accept-ranges",
  ] as const) {
    const v = upstream.headers.get(name);
    if (v) out.set(name, v);
  }
  out.set("Cache-Control", "private, max-age=120");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: out,
  });
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("u");
  if (!raw?.trim()) {
    return NextResponse.json({ error: "Missing u" }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (target.protocol !== "https:" || !ALLOWED_HOSTS.has(target.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  const targetStr = target.toString();
  const range = request.headers.get("range");

  const fetchUpstream = (withRange: boolean) => {
    const headers = new Headers(UPSTREAM_HEADERS);
    if (withRange && range) headers.set("Range", range);
    return fetch(targetStr, {
      headers,
      redirect: "follow",
      cache: "no-store",
    });
  };

  let upstream = await fetchUpstream(true);

  if (
    upstream.status === 416 &&
    range &&
    shouldRetryWithoutRangeOn416(range)
  ) {
    upstream = await fetchUpstream(false);
  }

  if (!upstream.ok && upstream.status !== 206) {
    const text = await upstream.text().catch(() => "");
    return NextResponse.json(
      {
        error: "Upstream failed",
        status: upstream.status,
        detail: text.slice(0, 200),
      },
      { status: upstream.status >= 400 ? upstream.status : 502 }
    );
  }

  return buildResponse(upstream);
}
