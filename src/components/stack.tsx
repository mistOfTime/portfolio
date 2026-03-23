import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Rust',
  'Python',
  'Go',
  'PostgreSQL',
  'Supabase',
  'MongoDB',
  'Django',
  'Firebase',
  'MySQL',
  'Node.js',
  'Docker',
  'Kubernetes',
  'C++',
  'Java',
  'GraphQL',
  'Redis',
  'Git',
  'Angular',
  'Lua',
  'JavaScript'
];

export function Stack() {
  return (
    <div className="space-y-10 vertical-line-guide pl-6 md:pl-12">
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-6 h-[1px] bg-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Stack.config</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-normal">Core Technologies</h2>
      </div>

      <div className="max-w-4xl bg-card border border-foreground/15 pixel-border-sm relative overflow-hidden group">
        <div className="bg-foreground/5 border-b border-foreground/15 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-foreground/10" />
            <div className="w-2 h-2 rounded-full bg-foreground/10" />
            <div className="w-2 h-2 rounded-full bg-foreground/10" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">System_Resources // v2.5</span>
          <Terminal className="h-3 w-3 opacity-20" />
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-foreground/10">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Environment_Variables</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map(item => (
                <span
                  key={item}
                  className="px-3 py-1 bg-foreground/[0.02] border border-foreground/10 text-[10px] font-mono hover:bg-primary hover:text-primary-foreground transition-all cursor-default select-none uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-foreground/5 flex flex-wrap gap-4 items-center text-[9px] font-bold uppercase tracking-widest opacity-40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> 
              Status: Optimized
            </span>
            <span>Latency: 12ms</span>
            <span>Uptime: 99.99%</span>
            <div className="ml-auto flex gap-2">
              <div className="w-12 h-1 bg-foreground/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-3/4 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}