"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STAR_COUNT = 120;
const MIN_DURATION = 30;
const MAX_DURATION = 65;
const MOVE_Y_PX = 1800;
const MOVE_X_PX = 20;

function getRandom(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: getRandom(1, 2.5),
      opacity: getRandom(0.35, 0.85),
      duration: getRandom(MIN_DURATION, MAX_DURATION),
      moveX: getRandom(-MOVE_X_PX, MOVE_X_PX),
    }));
  }, []);

  useGSAP(
    () => {
      starsRef.current.forEach((el, i) => {
        if (!el) return;
        const config = stars[i];
        gsap.set(el, { y: 0, x: 0 });
        gsap.to(el, {
          y: -MOVE_Y_PX,
          x: config.moveX,
          duration: config.duration,
          repeat: -1,
          ease: "none",
          onRepeat: () => {
            gsap.set(el, { y: 0, x: 0 });
          },
        });
      });
    },
    { scope: containerRef, dependencies: [stars] }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[7] bg-black"
      aria-hidden
      style={{ pointerEvents: "none", mixBlendMode: "screen" } as React.CSSProperties}
    >
      {stars.map((star, i) => (
        <div
          key={star.id}
          ref={(el) => {
            if (el) starsRef.current[i] = el;
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255,255,255,${star.opacity * 0.5})`,
          }}
        />
      ))}
    </div>
  );
}
