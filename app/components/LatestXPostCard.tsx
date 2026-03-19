"use client";

import Image from "next/image";
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

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function VerifiedBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-label="Verified account"
      role="img"
    >
      <path
        fill={X_BLUE}
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.89.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.2-1.91 2.2-3.34zm-10.77 4.92-3.77-3.77 1.42-1.42 2.35 2.35 4.56-4.56 1.41 1.41-5.97 5.99z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1d9bf0] shadow-lg"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
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
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
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
                <VerifiedBadge className="h-[18px] w-[18px] shrink-0" />
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
          <XLogo className="h-5 w-5" />
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
                  <PlayIcon />
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
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 opacity-70"
            fill="currentColor"
            aria-hidden
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
          {formatPostWhen(data.createdAt, data.edited)}
        </span>
        <span className="opacity-50" aria-hidden>
          ⓘ
        </span>
      </div>

      {/* Actions */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eff3f4] px-4 py-3 text-[13px] font-medium"
        style={{ color: X_GRAY }}
      >
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill={X_PINK} aria-hidden>
            <path d="M12 21.638h-.014C9.403 21.59 1 12.856 1 7.478 1 3.964 3.952 1 7.438 1c1.652 0 3.185.793 4.14 2.12C12.147 1.793 13.68 1 15.33 1c3.486 0 6.438 2.964 6.438 6.478 0 5.378-8.403 14.112-10.974 14.16z" />
          </svg>
          <span style={{ color: X_GRAY }}>{data.likeCount}</span>
        </span>
        <a
          href={replyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: X_BLUE }}
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
            <path d="M1.751 10c0-6.638 5.372-12 12-12s12 5.362 12 12c0 6.63-5.373 12-12 12h-12.449c-.509 0-.757-.645-.383-1.002l2.751-2.65a.75.75 0 00-.53-1.281h-2.25c-4.556 0-8.25-3.694-8.25-8.25v-.5z" />
          </svg>
          Reply
        </a>
        <button
          type="button"
          onClick={onCopyLink}
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-2.83-2.83 7.07-7.07 2.83 2.83zm-1.41 1.41l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zM4.93 19.07c2.73 2.73 7.17 2.73 9.9 0l1.41-1.41-1.41-1.41-1.42 1.42c-1.96 1.96-5.12 1.96-7.07 0-1.96-1.96-1.96-5.12 0-7.07l1.42-1.42-1.41-1.41-1.42 1.42c-2.73 2.74-2.73 7.17 0 9.9z" />
          </svg>
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
