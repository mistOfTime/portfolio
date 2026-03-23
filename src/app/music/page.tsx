"use client"

import React from 'react';
import { Music2, ArrowLeft } from 'lucide-react';
import { BinaryBackground } from '@/components/binary-background';
import Link from 'next/link';

const albums = [
  { artist: 'Jeff Buckley', album: 'Grace', cover: 'https://tse1.mm.bing.net/th/id/OIP.sxohFFJqPv44E9WUaxcHRgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { artist: 'Supercell', album: 'Today Is A Beautiful Day', cover: 'https://th.bing.com/th/id/R.81dc0e2ca3bb23fc1f74d1c88defe62c?rik=s2HD1QCrWdWtdw&riu=http%3a%2f%2fimages.genius.com%2f90a49f80e4ade72e247a8572b713b3da.1000x999x1.jpg&ehk=wSMmBRfKDhFXJa8tSB2bHVxBZn1iZV2ARAO40amI2fQ%3d&risl=&pid=ImgRaw&r=0' },
  { artist: 'Mitski', album: 'Bury Me at Makeout Creek', cover: 'https://f4.bcbits.com/img/a3943051749_10.jpg' },
  { artist: 'Panchiko', album: 'D>E>A>T>H>M>E>T>A>L', cover: 'https://preview.redd.it/rmdoz6lzwrn81.jpg?width=500&format=pjpg&auto=webp&s=0c85f936d5e7b4749aefac462bc3a9a0d6929448' },
  { artist: 'The Sundays', album: 'Reading, Writing and Arithmetic', cover: 'https://tse1.mm.bing.net/th/id/OIP.U4LVQy8RqojCo6DuIzssHAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { artist: 'Have A Nice Life', album: 'Deathconsciousness', cover: 'https://images.genius.com/1267aea8f8e715255a06f9b6bb4026b9.1000x1000x1.png' },
  { artist: 'Wintermute', album: 'Stray Light', cover: 'https://tse2.mm.bing.net/th/id/OIP.62PJOGy90S_YOep5RmAc5wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { artist: 'Tokenaimae', album: 'Before the Machine Breaks Down', cover: 'https://tse2.mm.bing.net/th/id/OIP.Roktf8oregongRFxuz9-xQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { artist: 'My Dead Girlfriend', album: "Shaman's Daughter", cover: 'https://tse1.mm.bing.net/th/id/OIP.z9_LDTjZhkOKT0eXkQ8DewHaHU?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { artist: 'Bladee', album: 'Cold Visions', cover: 'https://th.bing.com/th/id/OIP.-Y-42XLWsyzmgNxmycLFZQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
];

export default function MusicPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <BinaryBackground />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back
        </Link>

        <div className="space-y-2">
          <div className="flex items-center gap-3 text-primary">
            <Music2 className="h-3 w-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Music.log</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold whitespace-nowrap">Music Rotation</h1>
          <p className="text-muted-foreground font-mono text-[10px] uppercase opacity-70">// albums currently in heavy rotation</p>
        </div>

        <div className="flex flex-col gap-2">
          {albums.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card border border-foreground/10 hover:border-primary/30 transition-all px-5 py-4 pixel-border-sm group">
              <div className="flex-shrink-0 w-14 h-14 bg-foreground/10 border border-foreground/15 flex items-center justify-center text-[9px] font-bold overflow-hidden">
                {item.cover
                  ? <img src={item.cover} alt={item.album} className="w-full h-full object-cover" />
                  : <span className="opacity-50">{String(i + 1).padStart(2, '0')}</span>
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold group-hover:text-primary transition-colors">{item.artist}</p>
                <p className="text-[11px] font-mono opacity-50">{item.album}</p>
              </div>
              <Music2 className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
