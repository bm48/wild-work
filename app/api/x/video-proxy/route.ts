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

  const range = request.headers.get("range");
  const headers = new Headers(UPSTREAM_HEADERS);
  if (range) headers.set("Range", range);

  const upstream = await fetch(target.toString(), {
    headers,
    redirect: "follow",
    cache: "no-store",
  });

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

  if (!upstream.ok && upstream.status !== 206) {
    const text = await upstream.text().catch(() => "");
    return NextResponse.json(
      { error: "Upstream failed", status: upstream.status, detail: text.slice(0, 200) },
      { status: upstream.status >= 400 ? upstream.status : 502 }
    );
  }

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: out,
  });
}
