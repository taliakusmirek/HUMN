"use client";
import React, { useEffect, useRef, useState } from "react";

export default function NeonCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Pulsate effect
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      frame++;
      setScale(1 + 0.12 * Math.sin(frame * 0.08));
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        marginLeft: -30,
        marginTop: -30,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow:
          "0 0 32px 16px #FBFB23, 0 0 64px 32px #FBFB23, 0 0 0 2px #FBFB23 inset",
        background: "rgba(251,251,35,0.15)",
        mixBlendMode: "screen",
        transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
        transform: `scale(${scale})`,
        opacity: 1,
      }}
    />
  );
} 