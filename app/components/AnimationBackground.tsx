"use client";


export default function AnimationBackground() {
  return (
    <iframe
      src="/animation.html"
      title="Background animation"
      className="fixed inset-0 h-full w-full border-0"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden
    />
  );
}
