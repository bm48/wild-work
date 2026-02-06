"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGES_PER_PAGE = 12;
const GALLERY_IMAGES = Array.from(
  { length: 26 },
  (_, i) => `/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function ImageGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);
  const start = (currentPage - 1) * IMAGES_PER_PAGE;
  const images = GALLERY_IMAGES.slice(start, start + IMAGES_PER_PAGE);

  return (
    <section className="bg-black px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* 3 rows x 4 columns grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
          {images.map((src, i) => (
            <div
              key={`${currentPage}-${i}`}
              className="relative aspect-square overflow-hidden border border-black bg-zinc-900"
            >
              <Image
                src={src}
                alt={`Wildfire project ${start + i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center border border-white bg-black text-white transition-colors hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-black"
          >
            <span className="text-lg font-medium">&lt;</span>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-10 w-10 items-center justify-center text-sm font-medium text-white transition-colors ${
                    currentPage === page
                      ? "border border-white bg-black"
                      : "hover:text-white/80"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center border border-white bg-black text-white transition-colors hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-black"
          >
            <span className="text-lg font-medium">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
