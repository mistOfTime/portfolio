
"use client"

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ScrollSection } from '@/components/scroll-section';
import { About } from '@/components/about';
import { Stack } from '@/components/stack';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { BinaryBackground } from '@/components/binary-background';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <BinaryBackground />
      <Navbar />
      
      <main className="pt-20 md:pt-4 relative z-10">
        <Hero />
        
        <ScrollSection id="about" className="border-t border-foreground/5 bg-background/30">
          <About />
        </ScrollSection>

        <ScrollSection id="stack" className="border-t border-foreground/5 bg-background/30">
          <Stack />
        </ScrollSection>

        <ScrollSection id="projects" className="border-t border-foreground/5 bg-background/30">
          <Projects />
        </ScrollSection>

        <ScrollSection id="contact" className="border-t border-foreground/5 mb-8 bg-background/30">
          <Contact />
        </ScrollSection>
      </main>

      <footer className="relative z-10 mt-8 md:mt-0 py-12 px-4 border-t border-foreground/20 bg-background/30 text-foreground font-mono">
        <div className="max-w-4xl mx-auto flex flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-left">
            <p className="text-sm font-bold tracking-tighter">JASIEN.SYS</p>
            <p className="text-[8px] opacity-40 uppercase tracking-[0.2em]">Junior Developer</p>

          </div>
          
          <div className="flex items-center gap-4 text-xl">
            <a href="https://github.com/mistOfTime" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sien-jandave-saldaña-198257320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/0101010101_777/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
