"use client";
import React, { useRef, useEffect } from "react";

interface NeonMiniOrbProps {
  size?: number;
  style?: React.CSSProperties;
  color?: 'green' | 'purple';
}

const DOTS = 8;
const GREEN_COLORS = ["#FBFB23", "rgba(251,251,35,0.7)"];
const PURPLE_COLORS = ["#433CE3", "rgba(67,60,227,0.6)"];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function NeonMiniOrb({ size = 120, style, color = 'green' }: NeonMiniOrbProps) {
  const COLORS = color === 'purple' ? PURPLE_COLORS : GREEN_COLORS;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef(
    Array.from({ length: DOTS }, () => ({
      angle: randomBetween(0, Math.PI * 2),
      radius: randomBetween(size * 0.25, size * 0.45),
      speed: randomBetween(0.01, 0.03),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const orbX = size / 2;
    const orbY = size / 2;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);
      // Glow
      const grad = ctx.createRadialGradient(
        orbX,
        orbY,
        size * 0.15,
        orbX,
        orbY,
        size * 0.5
      );
      if (color === 'purple') {
        grad.addColorStop(0, "rgba(67,60,227,0.5)");
        grad.addColorStop(1, "rgba(67,60,227,0.08)");
      } else {
        grad.addColorStop(0, "rgba(251,251,35,0.5)");
        grad.addColorStop(1, "rgba(251,251,35,0.08)");
      }
      ctx.beginPath();
      ctx.arc(orbX, orbY, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      // Dots
      dots.current.forEach((d) => {
        d.angle += d.speed;
        const x = orbX + Math.cos(d.angle) * d.radius;
        const y = orbY + Math.sin(d.angle) * d.radius;
        if (!ctx) return;
        ctx.save();
        ctx.shadowColor = d.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [size, color]);

  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        pointerEvents: "none",
        userSelect: "none",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{ width: size, height: size, display: "block" }}
      />
    </div>
  );
} 