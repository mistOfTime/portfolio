import React from 'react';
import { Music2 } from 'lucide-react';

const albums = [
  { artist: 'Jeff Buckley', album: 'Grace' },
  { artist: 'Supercell', album: 'Today Is A Beautiful Day' },
  { artist: 'Mitski', album: 'Bury Me at Makeout Creek' },
  { artist: 'Panchiko', album: 'D>E>A>T>H>M>E>T>A>L' },
  { artist: 'The Sundays', album: 'Reading, Writing and Arithmetic' },
  { artist: 'Have A Nice Life', album: 'Deathconsciousness' },
  { artist: 'Wintermute', album: 'Stray Light' },
  { artist: 'Tokenaimae', album: 'Before the Machine Breaks Down' },
  { artist: 'My Dead Girlfriend', album: "Shaman's Daughter" },
  { artist: 'Bladee', album: 'Cold Visions' },
];

export function Music() {
  return (
    <div className="space-y-8 vertical-line-guide pl-6 md:pl-12">
      <div className="space-y-3 max-w-xl">
        <div className="flex items-center gap-3 text-primary">
          <Music2 className="h-3 w-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Music.log</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold">Music Rotation</h2>
        <p className="text-muted-foreground font-mono text-[10px] uppercase opacity-70">// albums currently in heavy rotation</p>
      </div>

      <div className="flex flex-col gap-2 max-w-2xl">
        {albums.map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-card border border-foreground/10 hover:border-primary/30 transition-all px-4 py-3 pixel-border-sm group">
            <div className="flex-shrink-0 w-8 h-8 bg-foreground/10 border border-foreground/15 flex items-center justify-center text-[9px] font-bold opacity-50">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold group-hover:text-primary transition-colors truncate">{item.artist}</p>
              <p className="text-[10px] font-mono opacity-50 truncate">{item.album}</p>
            </div>
            <div className="flex-shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <Music2 className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
