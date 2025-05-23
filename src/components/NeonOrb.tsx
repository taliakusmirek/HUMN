"use client";
import React, { useRef, useEffect, useState } from "react";

const NUM_DOTS = 350;
const NUM_SPARKLES = 80;
const COLORS = ["#FBFB23", "rgba(251,251,35,0.7)"];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function NeonOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 900 });

  // Responsive: update canvas size on resize
  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Orb radius is 45% of the smaller dimension
  const ORB_RADIUS = Math.min(dimensions.width, dimensions.height) * 0.45;

  // Dots and sparkles are regenerated on each render for simplicity
  const dots = useRef(
    Array.from({ length: NUM_DOTS }, () => ({
      angle: randomBetween(0, Math.PI * 2),
      radius: randomBetween(ORB_RADIUS * 0.68, ORB_RADIUS * 0.99),
      speed: randomBetween(0.001, 0.005),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(4, 10),
      alpha: randomBetween(0.7, 1),
    }))
  );
  const sparkles = useRef(
    Array.from({ length: NUM_SPARKLES }, () => ({
      x: 0,
      y: 0,
      alpha: 0,
      life: 0,
      size: 0,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const width = dimensions.width;
    const height = dimensions.height;
    canvas.width = width;
    canvas.height = height;
    const orbX = width / 2;
    const orbY = height / 2;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Multi-layered orb glow (all green)
      for (let i = 0; i < 3; i++) {
        const grad = ctx.createRadialGradient(
          orbX,
          orbY,
          ORB_RADIUS * (0.15 + i * 0.08),
          orbX,
          orbY,
          ORB_RADIUS * (1.05 + i * 0.13)
        );
        grad.addColorStop(0, "rgba(251,251,35,0.45)");
        grad.addColorStop(0.7, `rgba(251,251,35,${0.18 - i * 0.04})`);
        grad.addColorStop(1, `rgba(251,251,35,${0.10 - i * 0.03})`);
        ctx.beginPath();
        ctx.arc(orbX, orbY, ORB_RADIUS * (1.05 + i * 0.13), 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.globalAlpha = 1;
        ctx.fill();
      }
      // Dots
      dots.current.forEach((d) => {
        d.angle += d.speed;
        const x = orbX + Math.cos(d.angle) * d.radius;
        const y = orbY + Math.sin(d.angle) * d.radius;
        if (!ctx) return;
        ctx.save();
        ctx.shadowColor = "#FBFB23";
        ctx.shadowBlur = 24;
        ctx.globalAlpha = d.alpha;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(x, y, d.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      // Sparkles
      for (const s of sparkles.current) {
          if (s.life <= 0) {
          // respawn
          const theta = randomBetween(0, Math.PI * 2);
          const r = randomBetween(ORB_RADIUS * 0.7, ORB_RADIUS * 1.08);
          s.x = orbX + Math.cos(theta) * r;
          s.y = orbY + Math.sin(theta) * r;
          s.alpha = randomBetween(0.5, 1);
          s.life = randomBetween(18, 60);
          s.size = randomBetween(1.5, 4.5);
        }
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = s.alpha * (s.life / 60);
        ctx.shadowColor = "#FBFB23";
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#FBFB23";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        s.alpha -= 0.012;
        s.life--;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [dimensions, ORB_RADIUS]);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
      />
    </div>
  );
} 