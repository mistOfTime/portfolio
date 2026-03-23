"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github, Database, Layers } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Wildchats',
    description: 'A realtime web application chat app for CIT-U Students.',
    tags: ['Next.js', 'React', 'Supabase', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/mistOfTime/wildchats',
    live: 'https://wildchats-s4to.vercel.app',
  },
  {
    id: 'project-2',
    title: 'Teknoy SafeSpace',
    description: 'A realtime website application for students well-being community platform. for fellow technologians!',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Firebase', 'Gemini AI'],
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <div className="space-y-12 vertical-line-guide pl-6 md:pl-12">
      <div className="space-y-3 text-left max-w-xl">
        <div className="flex items-center gap-3 text-primary">
          <Layers className="h-3 w-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Repositories.sh</span>
        </div>
        <h2 className="text-base md:text-4xl font-bold">Production Assets</h2>
        <p className="text-muted-foreground font-mono text-[10px] uppercase opacity-70">// showing active deployments</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => {
          const img = PlaceHolderImages.find(i => i.id === project.id);
          return (
            <div key={project.id} className="group flex flex-col border border-foreground/15 bg-card hover:bg-foreground/[0.01] transition-all pixel-border-sm overflow-hidden">
              <div className="relative h-24 sm:h-52 overflow-hidden border-b border-foreground/10 transition-all duration-500">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute top-2 right-2 flex gap-1.5 translate-y-[-8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.github} className="p-1.5 bg-background border border-foreground/15 hover:bg-primary hover:text-primary-foreground transition-none">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-foreground text-background border border-foreground/15 hover:bg-primary transition-none">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="p-2 sm:p-5 flex-1 flex flex-col gap-1.5 sm:gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[7px] sm:text-[8px] font-bold uppercase px-1 py-0.5 border border-foreground/10 bg-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[11px] sm:text-sm font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-[9px] sm:text-[11px] text-muted-foreground leading-relaxed font-mono flex-1">{project.description}</p>
                <div className="pt-2 border-t border-foreground/5 flex justify-between items-center text-[7px] sm:text-[8px] font-bold uppercase tracking-wider opacity-50">
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-green-500 rounded-full" /> STATUS: STABLE</span>
                  <span>#SYS_{project.id.split('-')[1]}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}