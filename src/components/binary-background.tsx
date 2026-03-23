"use client"

import { useEffect, useRef } from 'react';

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 13;
    const chars = '01';
    let drops: number[] = [];
    let isDark = document.documentElement.classList.contains('dark');

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(0).map(() => Math.floor(Math.random() * -(canvas.height / fontSize)));
    };

    setup();
    window.addEventListener('resize', setup);

    // Watch for theme changes and clear canvas immediately
    const observer = new MutationObserver(() => {
      const newIsDark = document.documentElement.classList.contains('dark');
      if (newIsDark !== isDark) {
        isDark = newIsDark;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const draw = () => {
      ctx.fillStyle = isDark ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      const cols = Math.floor(canvas.width / fontSize);

      for (let i = 0; i < cols; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = isDark ? 'rgba(20,184,166,0.55)' : 'rgba(13,148,136,0.3)';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setup);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
