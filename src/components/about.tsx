import React from 'react';
import { Terminal, History, BookOpen } from 'lucide-react';

const experience = [
  {
    role: 'Student Intern',
    company: 'Monstar Lab',
    period: '2023',
    description: 'Engineering resilient infrastructure and standardized design systems for global scale.'
  }
];

export function About() {
  return (
    <div className="space-y-16 vertical-line-guide pl-6 md:pl-12">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-primary/5 text-primary border border-primary/20 text-[9px] font-bold uppercase">
            <Terminal className="h-3 w-3" /> Bio.data
          </div>
          <h2 className="text-xl md:text-3xl font-bold leading-tight">System Architecture</h2>
          <div className="space-y-4 font-mono text-muted-foreground text-[11px] leading-relaxed max-w-lg">
            <p><span className="text-primary font-bold">&gt;</span> I am a passionate student Fullstack Developer dedicated to engineering scalable and efficient digital experiences. With a foundation built through hands-on industry experience as an intern and rigorous advanced software study, I bridge the gap between complex backend logic and intuitive frontend design <span className="text-primary font-bold">&lt;</span></p>
          </div>
        </div>
        
        <div className="lg:col-span-5 bg-card border border-foreground/15 p-5 pixel-border-sm">
          <h3 className="text-[11px] font-bold mb-4 flex items-center gap-3 opacity-70">
            <BookOpen className="h-3 w-3 text-primary" /> EDUCATION_HISTORY
          </h3>
          <div className="space-y-5">
            <div className="border-l border-primary/30 pl-4 space-y-1">
              <p className="font-bold text-[11px] uppercase tracking-wide">
                <a href="https://www.facebook.com/luzenianscienceclass" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-2">BLNHS Special Science Education</a>
              </p>
              <p className="text-[9px] font-mono opacity-50 uppercase tracking-widest">2019-2023</p>
            </div>
            <div className="border-l border-primary/30 pl-4 space-y-1">
              <p className="font-bold text-[10px] uppercase tracking-wide whitespace-nowrap">
                <a href="https://www.facebook.com/CITUniversity" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-2">Cebu Institute of Technology University</a>
              </p>
              <p className="text-[9px] font-mono opacity-50 uppercase tracking-widest">2026 - 2029</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-sm md:text-base font-bold whitespace-nowrap flex items-center gap-3">
            <History className="h-3.5 w-3.5 text-primary" /> LOG_EXPERIENCE
          </h2>
          <div className="h-[1px] w-full bg-foreground/10" />
        </div>
        <div className="grid gap-4 max-w-2xl">
          {experience.map((exp) => (
            <div key={exp.company} className="bg-card p-5 border border-foreground/10 hover:border-primary/30 transition-all pixel-border-sm group flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/40 overflow-hidden">
                <img src="/monstarlab.webp" alt="logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-bold text-foreground">
                  <a href="https://monstar-lab.com/ph" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-2">
                    {exp.company}
                  </a>
                </h4>
                <p className="font-mono text-[10px] opacity-50 uppercase tracking-wider">{exp.role}</p>
              </div>
              <div className="flex-shrink-0 px-3 py-1 border border-foreground/20 text-[10px] font-bold opacity-60 rounded-md">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
