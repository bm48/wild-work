"use client";

import Image from "next/image";
import { useState, useCallback, useRef } from "react";

const GALLERY_IMAGES = [
  { src: "/LewFrenchInspiration-2.png", alt: "Lew French inspiration" },
  { src: "/McNulty-Sketch-Cr.jpg", alt: "McNulty sketch" },
  { src: "/McNultyDesign-2.png", alt: "McNulty design" },
  { src: "/20260103_204542-2-high.png", alt: "McNulty design" },
  { src: "/20251222_082817-1-2-high.png", alt: "McNulty design" },

];

const FADE_DURATION_MS = 220;

export default function InspirationGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goPrev = useCallback(() => {
    if (isFading) return;
    setIsFading(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
      setIsFading(false);
      timeoutRef.current = null;
    }, FADE_DURATION_MS);
  }, [isFading]);

  const goNext = useCallback(() => {
    if (isFading) return;
    setIsFading(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));
      setIsFading(false);
      timeoutRef.current = null;
    }, FADE_DURATION_MS);
  }, [isFading]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index === currentIndex || isFading) return;
      setIsFading(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(index);
        setIsFading(false);
        timeoutRef.current = null;
      }, FADE_DURATION_MS);
    },
    [currentIndex, isFading]
  );

  const handleImageAreaClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("button")) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const mid = rect.width / 2;
      if (x < mid) goPrev();
      else goNext();
    },
    [goPrev, goNext]
  );

  const current = GALLERY_IMAGES[currentIndex];

  return (
    <section className="bg-black px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl cursor-pointer">
        {/* Main image viewer - arrows and expand show on hover */}
        <div
          className="group relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden bg-black"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleImageAreaClick}
        >
          <div
            className="relative h-full w-full transition-opacity duration-200 ease-out"
            style={{ opacity: isFading ? 0 : 1 }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Previous button - left, visible on hover */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className={`cursor-pointer absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity duration-200 hover:opacity-90 md:left-4 md:h-14 md:w-14 ${
              isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Next button - right, visible on hover */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className={`cursor-pointer absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity duration-200 hover:opacity-90 md:right-4 md:h-14 md:w-14 ${
              isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Expand button - top right, visible on hover */}
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label="Expand fullscreen"
            className={`cursor-pointer absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 ${
              isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 flex justify-center gap-1">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goToIndex(i)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded border-2 transition-colors sm:h-24 sm:w-32 ${
                i === currentIndex
                  ? "border-sky-400"
                  : "border-zinc-600 hover:border-zinc-500"
              }`}
              style={{ width: "4rem", height: "4rem" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen expand overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image fullscreen"
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close fullscreen"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded text-white hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="relative h-full w-full max-h-[90vh] max-w-6xl">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
              onClick={() => setIsExpanded(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
