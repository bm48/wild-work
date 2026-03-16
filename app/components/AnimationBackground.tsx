"use client";

export default function AnimationBackground() {
  return (
    <iframe
      src="/animation.html"
      title="Background animation"
      className="absolute inset-x-0 top-0 h-screen w-full border-0"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden
    />
  );
}
