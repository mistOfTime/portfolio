"use client"

import React, { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navItems = [
  { name: 'Root', href: '#' },
  { name: 'Bio', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Repo', href: '#projects' },
  { name: 'Ping', href: '#contact' },
  { name: 'Music', href: '/music' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let scrollLocked = false;

    const handleScroll = () => {
      if (scrollLocked) return;
      const ids = ['about', 'stack', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // expose lock for click handlers
    (window as any).__navScrollLock = (ms: number) => {
      scrollLocked = true;
      setTimeout(() => { scrollLocked = false; }, ms);
    };

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between bg-background/80 backdrop-blur-md border border-foreground/20 px-4 py-2 pixel-border-sm">
        <a href="#" className="flex items-center gap-2 font-headline text-sm font-bold hover:text-primary transition-colors">
          <Terminal className="h-3.5 w-3.5" />
          <span className="tracking-normal uppercase">JASIEN.SYS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1) || (item.href === '#' && activeSection === '');
            const className = cn(
              "text-[10px] font-bold uppercase tracking-widest transition-all px-2 py-1 border border-transparent",
              isActive ? "bg-foreground text-background" : "hover:border-foreground/20"
            );
            return item.href.startsWith('/') ? (
              <Link key={item.name} href={item.href} className={className}>
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => { (window as any).__navScrollLock?.(1000); setActiveSection(item.href === '#' ? '' : item.href.substring(1)); }}
                className={className}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8 rounded-none border border-transparent hover:border-foreground/20"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />)}
            {!mounted && <div className="h-3.5 w-3.5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 rounded-none border border-foreground/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-2 right-2 bg-background border border-foreground p-4 pixel-border animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1) || (item.href === '#' && activeSection === '');
              const className = cn(
                "text-[11px] font-bold p-2 border border-transparent uppercase tracking-wider",
                isActive ? "bg-foreground text-background" : "hover:border-foreground/20"
              );
              return item.href.startsWith('/') ? (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className={className}>
                  // {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => { setIsMenuOpen(false); (window as any).__navScrollLock?.(1000); setActiveSection(item.href === '#' ? '' : item.href.substring(1)); }}
                  className={className}
                >
                  // {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}