"use client"

import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 12;
    const chars = '01';

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setup();

    const observer = new ResizeObserver(setup);
    observer.observe(canvas);

    let drops: number[] = [];
    const initDrops = () => {
      const cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(0).map(() => Math.floor(Math.random() * -50));
    };
    initDrops();

    const draw = () => {
      // detect dark mode
      const isDark = document.documentElement.classList.contains('dark');
      const bg = isDark ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / fontSize);
      if (drops.length !== cols) initDrops();

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < cols; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        // brighter head, dimmer trail handled by fade
        ctx.fillStyle = isDark ? 'rgba(20,184,166,0.6)' : 'rgba(13,148,136,0.35)';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      className="pointer-events-none"
    />
  );
}

export function Contact() {
  return (
    <div className="flex flex-col items-center text-center py-10 space-y-3">
      <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest">
        <Mail className="h-3.5 w-3.5" />
        <span>Let&apos;s Connect</span>
      </div>
      <h2 className="text-lg md:text-3xl font-bold">Have a project in mind?</h2>
      <p className="text-muted-foreground text-sm max-w-xs">
        I&apos;m open to opportunities and collaborations. Drop me a message at{' '}
        <a
          href="mailto:bloodycape881@gmail.com"
          className="text-primary hover:underline font-medium"
        >
          bloodycape881@gmail.com
        </a>
      </p>
    </div>
  );
}
