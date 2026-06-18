import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { TEAM } from '../data/portfolioData';
import { Card, CardContent } from './ui/Card';

// Real high-quality professional portrait assets from Unsplash
const AVATAR_URLS: { [key: string]: string } = {
  alex: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80',
  marcus: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80',
  elena: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80',
  ye: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80',
};

export default function Team() {
  return (
    <section id="team" className="relative py-20 bg-white dark:bg-transparent">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
            Meet the Crew
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Elite Engineers, Deep Partners
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            We are zero-overhead, highly coordinated builders. When you work with us, you partner directly with developers who possess deep technical leadership backgrounds and real world scale execution.
          </p>
        </div>

        {/* Profiles Grid - Optimized to 4 cols for a much sleeker display */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="team-grid">
          {TEAM.map((member) => {
            const avatarUrl = AVATAR_URLS[member.avatarSeed] || 'https://picsum.photos/seed/face/400/400';
            
            return (
              <Card 
                key={member.id} 
                id={`team-card-${member.id}`}
                className="group relative flex flex-col justify-between p-5"
              >
                <div>
                  {/* Card Header: Compact Avatar & Meta Details */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-indigo-500/20 dark:border-indigo-500/10 transition-all duration-300 group-hover:border-indigo-500">
                      <img
                        src={avatarUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="font-sans text-sm font-bold text-slate-900 dark:text-white truncate">
                          {member.name}
                        </h3>
                        <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded-full shrink-0">
                          Active
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4 min-h-[64px]">
                    {member.bio}
                  </p>
                </div>

                {/* Social Connect Handlers - Scaled down for sleek look */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 dark:border-white/5 pt-4">
                  <div className="flex items-center gap-2" id={`team-socials-${member.id}`}>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name}'s GitHub Profile`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200/80 text-slate-600 transition-all hover:bg-slate-900 hover:text-white dark:bg-[#0a0a0b] dark:border-white/10 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-950 hover:shadow-xs"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name}'s LinkedIn Profile`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200/80 text-slate-600 transition-all hover:bg-indigo-600 hover:text-white dark:bg-[#0a0a0b] dark:border-white/10 dark:text-slate-400 dark:hover:bg-indigo-600 dark:hover:text-white hover:shadow-xs"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Send email to ${member.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200/80 text-slate-600 transition-all hover:bg-indigo-600 hover:text-white dark:bg-[#0a0a0b] dark:border-white/10 dark:text-slate-400 dark:hover:bg-indigo-600 dark:hover:text-white hover:shadow-xs"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 dark:text-indigo-400 hover:underline transition-colors"
                  >
                    Ping
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
