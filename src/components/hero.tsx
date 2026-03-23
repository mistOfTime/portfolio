
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Terminal, ChevronRight, Binary, Cpu } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hey, I'm Jasien";

  useEffect(() => {
    if (text.length >= fullText.length) return;
    const timer = setTimeout(() => {
      setText(fullText.substring(0, text.length + 1));
    }, 80);
    return () => clearTimeout(timer);
  }, [text]);

  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden scanline bg-background/30">
      <div className="absolute inset-0 grid-bg -z-20" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-full opacity-[0.03] pointer-events-none">
        <Binary className="absolute top-0 left-0 w-12 h-12" />
        <Cpu className="absolute bottom-0 right-0 w-12 h-12" />
      </div>

      <div className="relative mb-6 pixel-border-sm group">
        <div className="relative overflow-hidden w-24 h-24 md:w-28 md:h-28 bg-muted transition-all duration-700">
          {profileImg && (
            <Image
              src={profileImg.imageUrl}
              alt={profileImg.description}
              fill
              className="object-cover"
              data-ai-hint={profileImg.imageHint}
              priority
            />
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-2 py-0.5 text-[8px] font-bold pixel-border-sm">
          SYS_ROOT: V2.5
        </div>
      </div>

      <div className="text-center max-w-xl space-y-4 relative z-10">
        <div className="space-y-2">
          <p className="text-primary font-bold tracking-[0.3em] text-[8px] uppercase opacity-70"> [ACCESS_GRANTED] </p>
          <h1 className="text-xl md:text-3xl font-bold tracking-widest leading-tight text-foreground">
            <span>{text}</span>
            <span className="cursor-blink border-r-[4px] border-primary ml-0.5 inline-block h-[0.7em] align-middle" />
          </h1>
        </div>
        
        <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto font-mono opacity-80 uppercase tracking-wider">
          //Turning ideas into scalable web experiences. Meow:3//
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button variant="default" className="rounded-none h-8 px-4 text-[9px] font-bold pixel-border-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all uppercase tracking-[0.2em]" asChild>
            <a href="#projects" className="flex items-center gap-2">
              INIT_PROJECTS <ChevronRight className="h-3 w-3" />
            </a>
          </Button>
          <Button variant="outline" className="rounded-none h-8 px-4 text-[9px] font-bold border-foreground/20 hover:bg-foreground hover:text-background transition-all uppercase tracking-[0.2em]" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <Terminal className="h-3 w-3" /> PING.EXE
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
