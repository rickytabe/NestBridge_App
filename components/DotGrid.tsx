"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import type { CSSProperties } from "react";
import { gsap } from "gsap";
import styles from "./DotGrid.module.css";

type Dot = {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  active: boolean;
};

type DotGridProps = {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: CSSProperties;
};

const hexToRgb = (hex: string) => {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  if (!match) {
    return { r: 255, g: 255, b: 255 };
  }

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
};

export default function DotGrid({
  dotSize = 4,
  gap = 28,
  baseColor = "#FFFFFF",
  activeColor = "#3FE0A5",
  proximity = 130,
  speedTrigger = 120,
  shockRadius = 220,
  shockStrength = 2.6,
  maxSpeed = 4200,
  resistance = 0.84,
  returnDuration = 1.1,
  className = "",
  style,
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const lastMoveRef = useRef({ time: 0, x: 0, y: 0 });
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const reducedMotionRef = useRef(false);

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const buildGrid = useCallback(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    sizeRef.current = { width, height, dpr };

    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const cell = dotSize + gap;
    const cols = Math.max(1, Math.floor((width + gap) / cell));
    const rows = Math.max(1, Math.floor((height + gap) / cell));
    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;
    const startX = (width - gridW) / 2 + dotSize / 2;
    const startY = (height - gridH) / 2 + dotSize / 2;

    const dots: Dot[] = [];

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          active: false,
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    buildGrid();

    const wrapper = wrapperRef.current;
    let observer: ResizeObserver | null = null;

    if (wrapper && "ResizeObserver" in window) {
      observer = new ResizeObserver(buildGrid);
      observer.observe(wrapper);
    } else {
      window.addEventListener("resize", buildGrid);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    let frame = 0;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) return;

      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      for (const dot of dotsRef.current) {
        const x = dot.cx + dot.xOffset;
        const y = dot.cy + dot.yOffset;
        const dx = dot.cx - pointerRef.current.x;
        const dy = dot.cy - pointerRef.current.y;
        const distSq = dx * dx + dy * dy;
        let color = baseColor;
        let radius = dotSize / 2;

        if (distSq <= proxSq) {
          const t = 1 - Math.sqrt(distSq) / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          color = `rgb(${r}, ${g}, ${b})`;
          radius += t * 1.4;
        }

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.22;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(frame);
  }, [activeRgb, baseColor, baseRgb, dotSize, proximity]);

  useEffect(() => {
    const applyPush = (dot: Dot, xOffset: number, yOffset: number) => {
      if (reducedMotionRef.current) return;

      dot.active = true;
      gsap.killTweensOf(dot);
      gsap
        .timeline({
          onComplete: () => {
            dot.active = false;
          },
        })
        .to(dot, {
          xOffset,
          yOffset,
          duration: 0.45,
          ease: "power3.out",
        })
        .to(dot, {
          xOffset: 0,
          yOffset: 0,
          duration: returnDuration,
          ease: `elastic.out(${resistance}, 0.72)`,
        });
    };

    const onMove = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const now = performance.now();
      const last = lastMoveRef.current;
      const dt = Math.max(16, now - last.time);
      const dx = event.clientX - last.x;
      const dy = event.clientY - last.y;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      lastMoveRef.current = {
        time: now,
        x: event.clientX,
        y: event.clientY,
      };

      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      if (speed < speedTrigger || now - last.time < 32) return;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(
          dot.cx - pointerRef.current.x,
          dot.cy - pointerRef.current.y
        );

        if (dist < proximity && !dot.active) {
          const falloff = 1 - dist / proximity;
          applyPush(
            dot,
            (dot.cx - pointerRef.current.x + vx * 0.004) * falloff,
            (dot.cy - pointerRef.current.y + vy * 0.004) * falloff
          );
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);

        if (dist < shockRadius && !dot.active) {
          const falloff = Math.max(0, 1 - dist / shockRadius);
          applyPush(
            dot,
            (dot.cx - cx) * shockStrength * falloff,
            (dot.cy - cy) * shockStrength * falloff
          );
        }
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      dotsRef.current.forEach((dot) => gsap.killTweensOf(dot));
    };
  }, [
    maxSpeed,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
    speedTrigger,
  ]);

  return (
    <section className={`${styles.dotGrid} ${className}`} style={style}>
      <div ref={wrapperRef} className={styles.wrap}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
    </section>
  );
}
