import { NextResponse } from "next/server";
import { Agent, fetch as undiciFetch } from "undici";

/** Public handle (no @) */
const X_USERNAME = "OfficialSGDietz";

export const dynamic = "force-dynamic";

/** Node’s default fetch uses a ~10s connect timeout; slow or filtered networks need more time. */
const xApiAgent = new Agent({
  connectTimeout: 60_000,
  headersTimeout: 60_000,
  bodyTimeout: 120_000,
});

function xApiFetch(
  url: string,
  init?: { headers?: Record<string, string> }
) {
  return undiciFetch(url, {
    ...init,
    dispatcher: xApiAgent,
  });
}

function isLikelyNetworkFailure(e: unknown): boolean {
  const parts: string[] = [];
  if (e instanceof Error) {
    parts.push(e.message, e.name);
    if (e.cause instanceof Error) {
      parts.push(e.cause.message, e.cause.name);
    }
  }
  const s = parts.join(" ");
  return /fetch failed|ECONNRESET|ECONNREFUSED|ETIMEDOUT|ENOTFOUND|UND_ERR_CONNECT_TIMEOUT|Connect Timeout|socket hang up/i.test(
    s
  );
}

async function readJson<T>(res: { text: () => Promise<string> }): Promise<T | null> {
  const text = await res.text();
  if (!text?.trim()) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export type LatestTweetSuccess = {
  ok: true;
  text: string;
  createdAt: string;
  id: string;
  url: string;
  media: { type: string; url: string }[];
};

export type LatestTweetFailure = {
  ok: false;
  error: string;
  detail?: string;
};

function bearer(): string | undefined {
  return process.env.X_BEARER_TOKEN ?? process.env.TWITTER_BEARER_TOKEN;
}

export async function GET() {
  const token = bearer()?.trim();
  if (!token) {
    return NextResponse.json<LatestTweetFailure>(
      {
        ok: false,
        error:
          "Server is not configured with X API access. Add X_BEARER_TOKEN to .env.local (see .env.example).",
      },
      { status: 503 }
    );
  }

  try {
    const userRes = await xApiFetch(
      `https://api.twitter.com/2/users/by/username/${X_USERNAME}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!userRes.ok) {
      const body = await userRes.text();
      return NextResponse.json<LatestTweetFailure>(
        {
          ok: false,
          error: "Could not look up X profile.",
          detail: body.slice(0, 300),
        },
        { status: userRes.status === 404 ? 404 : 502 }
      );
    }

    const userJson = await readJson<{ data?: { id: string } }>(userRes);
    if (!userJson) {
      return NextResponse.json<LatestTweetFailure>(
        {
          ok: false,
          error: "Invalid response from X (user lookup).",
        },
        { status: 502 }
      );
    }
    const userId = userJson.data?.id;
    if (!userId) {
      return NextResponse.json<LatestTweetFailure>(
        { ok: false, error: "Unexpected user API response." },
        { status: 502 }
      );
    }

    const params = new URLSearchParams({
      max_results: "10",
      "tweet.fields": "created_at,attachments",
      exclude: "retweets,replies",
      expansions: "attachments.media_keys",
      "media.fields": "type,url,preview_image_url",
    });

    const tweetsRes = await xApiFetch(
      `https://api.twitter.com/2/users/${userId}/tweets?${params}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const tweetsJson = await readJson<{
      data?: Array<{
        id: string;
        text: string;
        created_at: string;
        attachments?: { media_keys?: string[] };
      }>;
      includes?: {
        media?: Array<{
          media_key: string;
          type: string;
          url?: string;
          preview_image_url?: string;
        }>;
      };
      errors?: unknown;
    }>(tweetsRes);

    if (!tweetsJson) {
      return NextResponse.json<LatestTweetFailure>(
        {
          ok: false,
          error: "Invalid response from X (timeline).",
          detail: "Empty or non-JSON response from X.",
        },
        { status: 502 }
      );
    }

    if (!tweetsRes.ok) {
      return NextResponse.json<LatestTweetFailure>(
        {
          ok: false,
          error: "Could not load posts from X.",
          detail: JSON.stringify(tweetsJson.errors ?? tweetsJson).slice(0, 300),
        },
        { status: 502 }
      );
    }

    const tweet = tweetsJson.data?.[0];
    if (!tweet) {
      return NextResponse.json<LatestTweetFailure>(
        { ok: false, error: "No posts returned for this account." },
        { status: 404 }
      );
    }

    const mediaList = tweetsJson.includes?.media ?? [];
    const keys = tweet.attachments?.media_keys ?? [];
    const media: { type: string; url: string }[] = [];

    for (const key of keys) {
      const m = mediaList.find((x) => x.media_key === key);
      if (!m) continue;
      const url =
        m.type === "photo"
          ? m.url
          : m.preview_image_url ?? m.url ?? "";
      if (url) media.push({ type: m.type, url });
    }

    const payload: LatestTweetSuccess = {
      ok: true,
      text: tweet.text ?? "",
      createdAt: tweet.created_at ?? "",
      id: tweet.id,
      url: `https://x.com/${X_USERNAME}/status/${tweet.id}`,
      media,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (e) {
    console.error("[api/x/latest] Unexpected error:", e);

    if (isLikelyNetworkFailure(e)) {
      return NextResponse.json<LatestTweetFailure>(
        {
          ok: false,
          error:
            "Cannot reach X’s API from this environment (connection timed out or blocked).",
          detail:
            "api.twitter.com must be reachable from the machine running Next.js. Try another network or VPN, check firewall/antivirus, or deploy (e.g. Vercel) where X’s API is allowed. Longer timeouts are already enabled (60s connect).",
        },
        { status: 503 }
      );
    }

    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json<LatestTweetFailure>(
      {
        ok: false,
        error: message,
        detail: "Check the terminal running next dev for a stack trace.",
      },
      { status: 500 }
    );
  }
}
