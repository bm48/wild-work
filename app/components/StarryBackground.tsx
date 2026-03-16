"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STAR_COUNT = 480;
const MIN_DURATION = 100;
const MAX_DURATION = 200;
const MOVE_DISTANCE = 2200;
const ANGLE_DEG = 60;

const ANGLE_RAD = (ANGLE_DEG * Math.PI) / 180;
const MOVE_X = MOVE_DISTANCE * Math.cos(ANGLE_RAD);
const MOVE_Y = -MOVE_DISTANCE * Math.sin(ANGLE_RAD);

const TWINKLE_CHANCE = 0.28;
const TWINKLE_DURATION_MIN = 2;
const TWINKLE_DURATION_MAX = 5;

function getRandom(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => {
    const opacity = getRandom(0.35, 0.85);
    const twinkle = Math.random() < TWINKLE_CHANCE;
    return {
      id: i,
      left: getRandom(0, 100),
      top: getRandom(0, 100),
      size: getRandom(1, 2.5),
      opacity,
      duration: getRandom(MIN_DURATION, MAX_DURATION),
      phase: getRandom(0, 1),
      twinkle,
      twinkleDuration: twinkle ? getRandom(TWINKLE_DURATION_MIN, TWINKLE_DURATION_MAX) : 0,
      twinkleDelay: twinkle ? getRandom(0, 4) : 0,
    };
  });
}

type Star = ReturnType<typeof createStars>[number];

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  const [stars, setStars] = useState<Star[] | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setStars(createStars());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useGSAP(
    () => {
      if (!stars) return;
      starsRef.current.forEach((el, i) => {
        if (!el) return;
        const config = stars[i];
        const startX = config.phase * MOVE_X;
        const startY = config.phase * MOVE_Y;
        const firstSegmentDuration = (1 - config.phase) * config.duration;
        gsap.set(el, { x: startX, y: startY });
        gsap.to(el, {
          x: MOVE_X,
          y: MOVE_Y,
          duration: firstSegmentDuration,
          ease: "none",
          onComplete: () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tl.set(el, { x: 0, y: 0 }, 0).to(el, {
              x: MOVE_X,
              y: MOVE_Y,
              duration: config.duration,
              ease: "none",
            });
          },
        });

        if (config.twinkle && config.twinkleDuration > 0) {
          gsap.fromTo(
            el,
            { opacity: config.opacity },
            {
              opacity: 1,
              duration: config.twinkleDuration / 2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              delay: config.twinkleDelay,
            }
          );
        }
      });
    },
    { scope: containerRef, dependencies: [stars] }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1] bg-black/30"
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      {stars?.map((star, i) => (
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
