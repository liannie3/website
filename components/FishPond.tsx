"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const RATIO: Record<string, number> = {
  "/fish.svg": 1,
  "/fishs.svg": 136 / 142,
};

type Fishy = {
  src: string;
  w: number;
  hue?: number;
  opacity?: number;
};

const FISHIES: Fishy[] = [
  { src: "/fish.svg", w: 104 },
  { src: "/fishs.svg", w: 116 },
  { src: "/fish.svg", w: 88, hue: 150 },
  { src: "/fishs.svg", w: 66, hue: 25, opacity: 0.45 },
  { src: "/fish.svg", w: 56, hue: 205, opacity: 0.4 },
  { src: "/fishs.svg", w: 48, hue: 280, opacity: 0.35 },
];

const MIN_SPEED = 0.14;
const MAX_SPEED = 0.5;
const WANDER = 0.02;

type Motion = { x: number; y: number; vx: number; vy: number };

function bounce(pos: number, vel: number, max: number) {
  const next = pos + vel;
  if (next < 0) return { pos: 0, vel: Math.abs(vel) };
  if (next > max) return { pos: max, vel: -Math.abs(vel) };
  return { pos: next, vel };
}

function advance(m: Motion, maxX: number, maxY: number) {
  m.vx += (Math.random() - 0.5) * WANDER;
  m.vy += (Math.random() - 0.5) * WANDER;

  const speed = Math.hypot(m.vx, m.vy);
  if (speed > 0) {
    const target = Math.min(MAX_SPEED, Math.max(MIN_SPEED, speed));
    m.vx *= target / speed;
    m.vy *= target / speed;
  }

  const nextX = bounce(m.x, m.vx, maxX);
  m.x = nextX.pos;
  m.vx = nextX.vel;
  const nextY = bounce(m.y, m.vy, maxY);
  m.y = nextY.pos;
  m.vy = nextY.vel;
}

export default function FishPond() {
  const containerRef = useRef<HTMLDivElement>(null);
  const posNodes = useRef<(HTMLElement | null)[]>([]);

  const bounds = useRef({ w: 0, h: 0 });
  const sim = useRef<Motion[]>(
    FISHIES.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }))
  );
  const raf = useRef<number | null>(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(reduce.matches);
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      bounds.current = { w: rect.width, h: rect.height };
    };
    measure();

    const paint = (i: number, m: Motion) => {
      const node = posNodes.current[i];
      if (!node) return;
      const flip = m.vx < 0 ? 1 : -1;
      node.style.transform = `translate(${m.x}px, ${m.y}px) scaleX(${flip})`;
    };

    FISHIES.forEach((fish, i) => {
      const motion = sim.current[i];
      const maxX = Math.max(0, bounds.current.w - fish.w);
      const maxY = Math.max(0, bounds.current.h - fish.w);
      motion.x = Math.random() * maxX;
      motion.y = Math.random() * maxY;
      const angle = Math.random() * Math.PI * 2;
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      motion.vx = Math.cos(angle) * speed;
      motion.vy = Math.sin(angle) * speed;
      paint(i, motion);
    });

    const step = () => {
      const { w: bw, h: bh } = bounds.current;

      FISHIES.forEach((fish, i) => {
        const motion = sim.current[i];
        advance(motion, Math.max(0, bw - fish.w), Math.max(0, bh - fish.w));
        paint(i, motion);
      });

      raf.current = requestAnimationFrame(step);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    setReady(true);
    if (!reducedMotion) raf.current = requestAnimationFrame(step);

    return () => {
      observer.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="relative w-full grow min-h-[24rem]"
    >
      {FISHIES.map((fish, i) => {
        const height = Math.round(fish.w * RATIO[fish.src]);
        const filter = fish.hue ? `hue-rotate(${fish.hue}deg)` : undefined;
        const opacity = fish.opacity ?? 1;

        return (
          <div
            key={i}
            ref={(el) => {
              posNodes.current[i] = el;
            }}
            className="pointer-events-none absolute left-0 top-0 transition-opacity duration-700 will-change-transform"
            style={{
              opacity: ready ? opacity : 0,
              zIndex: Math.round(opacity * 100),
              filter,
            }}
          >
            <Image
              src={fish.src}
              alt=""
              width={fish.w}
              height={height}
              className="block select-none"
              draggable={false}
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
}
