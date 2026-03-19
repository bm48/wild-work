"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Heart,
  Info,
  Link2,
  MessageCircle,
  Pencil,
  Play,
} from "lucide-react";
import { useCallback, useState } from "react";

export type LatestXPostPayload = {
  ok: true;
  text: string;
  createdAt: string;
  id: string;
  url: string;
  media: { type: string; url: string }[];
  author: {
    name: string;
    username: string;
    profileImageUrl: string;
    verified: boolean;
  };
  likeCount: number;
  edited: boolean;
};

const X_BLUE = "#1d9bf0";
const X_GRAY = "#536471";
const X_PINK = "#f91880";

/** Lucide has no X/Twitter mark; use an external-link style cue for “open on X”. */
function OpenOnXIcon({ className }: { className?: string }) {
  return <ArrowUpRight className={className} strokeWidth={2.25} aria-hidden />;
}

function formatPostWhen(iso: string, edited: boolean) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const time = d.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const date = d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return edited ? `Last edited ${time} · ${date}` : `${time} · ${date}`;
}

export function LatestXPostCard({ data }: { data: LatestXPostPayload }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const avatarSrc = data.author.profileImageUrl
    ? data.author.profileImageUrl.replace("_normal", "_400x400")
    : "";

  const longText = data.text.length > 220;
  const displayText =
    longText && !expanded ? `${data.text.slice(0, 220).trim()}…` : data.text;

  const paragraphs = displayText.split(/\n\n+/).filter((p) => p.trim());

  const onCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, [data.url]);

  const followUrl = `https://x.com/intent/follow?screen_name=${encodeURIComponent(data.author.username)}`;
  const replyUrl = `https://x.com/intent/tweet?in_reply_to=${data.id}`;

  const primaryMedia = data.media[0];
  const hasVideo =
    primaryMedia &&
    (primaryMedia.type === "video" || primaryMedia.type === "animated_gif");

  return (
    <article
      className="mx-auto w-full max-w-[550px] overflow-hidden rounded-2xl border border-[#cfd9de] bg-white text-left shadow-[0_0_0_1px_rgba(15,20,25,0.08)]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-4 pb-1 pt-3 sm:px-4 sm:pt-4">
        <div className="flex min-w-0 flex-1 gap-3">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eff3f4]"
          >
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
                unoptimized
              />
            ) : null}
          </a>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="flex flex-wrap items-center gap-1">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate font-bold text-[15px] text-[#0f1419] hover:underline"
              >
                {data.author.name}
              </a>
              {data.author.verified ? (
                <BadgeCheck
                  className="h-[18px] w-[18px] shrink-0 text-[#1d9bf0]"
                  strokeWidth={2.5}
                  aria-label="Verified account"
                />
              ) : null}
            </div>
            <p className="mt-0.5 text-[15px]" style={{ color: X_GRAY }}>
              <span className="text-[#0f1419]">@{data.author.username}</span>
              <span className="mx-1">·</span>
              <a
                href={followUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: X_BLUE }}
              >
                Follow
              </a>
            </p>
          </div>
        </div>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[#0f1419] opacity-90 hover:opacity-100"
          aria-label="Open on X"
        >
          <OpenOnXIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Text */}
      <div className="space-y-3 px-4 pb-3 pt-1">
        {paragraphs.length > 0 ? (
          paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[15px] leading-5 text-[#0f1419]"
              style={{ wordBreak: "break-word" }}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-[15px] leading-5 text-[#0f1419]">{displayText}</p>
        )}
        {longText ? (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-left text-[15px] font-medium hover:underline"
            style={{ color: X_BLUE }}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        ) : null}
      </div>

      {/* Media */}
      {primaryMedia ? (
        <div className="px-3 pb-3 sm:px-4">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-2xl bg-black"
          >
            <Image
              src={primaryMedia.url}
              alt=""
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, 550px"
              unoptimized
            />
            {hasVideo ? (
              <>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1d9bf0] shadow-lg"
                    aria-hidden
                  >
                    <Play
                      className="ml-1 shrink-0 text-white"
                      size={28}
                      fill="white"
                      stroke="white"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-white">
                  Watch on X
                </span>
              </>
            ) : null}
          </a>
          {data.media.length > 1 ? (
            <p className="mt-2 text-center text-xs" style={{ color: X_GRAY }}>
              +{data.media.length - 1} more on X
            </p>
          ) : null}
        </div>
      ) : null}

      {/* Meta row */}
      <div
        className="flex items-center justify-between border-t border-[#eff3f4] px-4 py-2 text-[13px]"
        style={{ color: X_GRAY }}
      >
        <span className="flex items-center gap-1">
          <Pencil className="h-4 w-4 shrink-0 opacity-70" strokeWidth={2} aria-hidden />
          {formatPostWhen(data.createdAt, data.edited)}
        </span>
        <Info className="h-4 w-4 shrink-0 opacity-50" strokeWidth={2} aria-hidden />
      </div>

      {/* Actions */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eff3f4] px-4 py-3 text-[13px] font-medium"
        style={{ color: X_GRAY }}
      >
        <span className="inline-flex items-center gap-1.5">
          <Heart
            className="h-[18px] w-[18px] shrink-0"
            fill={X_PINK}
            stroke={X_PINK}
            strokeWidth={2}
            aria-hidden
          />
          <span style={{ color: X_GRAY }}>{data.likeCount}</span>
        </span>
        <a
          href={replyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: X_BLUE }}
        >
          <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          Reply
        </a>
        <button
          type="button"
          onClick={onCopyLink}
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          <Link2 className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-full border-2 border-[#1d9bf0] bg-white py-2.5 text-[15px] font-bold text-[#1d9bf0] transition-colors hover:bg-[#1d9bf0]/5"
        >
          Read more on X
        </a>
      </div>
    </article>
  );
}

export function LatestXPostCardSkeleton() {
  return (
    <div
      className="mx-auto h-[320px] w-full max-w-[550px] animate-pulse rounded-2xl border border-[#cfd9de] bg-white"
      aria-hidden
    >
      <div className="p-4">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-[#eff3f4]" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-4 w-32 rounded bg-[#eff3f4]" />
            <div className="h-3 w-48 rounded bg-[#eff3f4]" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-[#eff3f4]" />
          <div className="h-3 w-full rounded bg-[#eff3f4]" />
          <div className="h-3 w-2/3 rounded bg-[#eff3f4]" />
        </div>
      </div>
    </div>
  );
}
