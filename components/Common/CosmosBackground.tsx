"use client";

import { useEffect, useRef } from "react";

export default function CosmosBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Star properties
    const numStars = 350;
    const stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5, // Tiny dots, slightly larger max radius
        vx: (Math.random() - 0.5) * 0.2, // Very slow horizontal drift
        vy: (Math.random() - 0.5) * 0.2 - 0.1, // Very slow drift upwards mostly
        alpha: Math.random() * 0.7 + 0.3, // Brighter base opacity
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Twinkle effect (slight opacity change)
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.2) star.alpha = 0.2;
        if (star.alpha > 0.95) star.alpha = 0.95;

        // Wrap around screen
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
