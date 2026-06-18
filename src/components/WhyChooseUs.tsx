import { ShieldCheck, HardHat, GitMerge, Zap, Sparkles } from 'lucide-react';
import { TECH_STACK } from '@/src/data/portfolioData';
import { Card } from '@/src/components/ui/Card';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 bg-white dark:bg-transparent overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
            Our Standards
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Proven Full-Stack Architecture
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            We bring proven full-stack experience to every project. We operate with strict engineering discipline, ensuring every platform is scalable, secure, and easily maintained for the long term.
          </p>
        </div>

        {/* Corporate Pillars Info */}
        <div className="mt-16 grid gap-8 md:grid-cols-3" id="standards-pillars">
          <Card id="standard-secure" className="p-8 flex flex-col items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                Secure by Design
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We build compliance guidelines and robust security structures into our systems from day one. Data integrity is our highest priority.
              </p>
            </div>
          </Card>

          <Card id="standard-review" className="p-8 flex flex-col items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <GitMerge className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                Long-Term Post-Launch Support
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We don't just launch and leave. We provide continuous technical assistance, proactive maintenance, and seamless feature updates as your business grows.
              </p>
            </div>
          </Card>

          <Card id="standard-speed" className="p-8 flex flex-col items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                Conversion & Performance
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our architectures are clean, decoupled, and heavily optimized to drive lightning-fast page loads, ensuring maximum user retention and strategic CTA engagement.
              </p>
            </div>
          </Card>
        </div>

        {/* Technology Mastery Ticker Block */}
        <div className="mt-24 border-t border-slate-100 dark:border-white/5 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
              Technology Mastery Vector Ticker
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Continuous delivery systems and tools we orchestrate with extreme precision
            </p>
          </div>

          {/* Infinite Scroll Wrapper Container */}
          <div className="relative w-full overflow-hidden bg-slate-50/40 border-y border-slate-200/60 py-8 dark:bg-white/5 dark:border-white/5 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]" style={{ willChange: 'transform' }} id="ticker-belt">
              {/* Output iterations */}
              {[1, 2, 3, 4].map((iteration) => (
                <div key={`iteration-${iteration}`} className="flex w-max shrink-0 gap-6 md:gap-8 pr-6 md:pr-8">
                  {TECH_STACK.map((tech, i) => (
                    <div
                      key={`tech-${iteration}-${i}`}
                      className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-xs dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      <span className="text-sm font-bold text-slate-800 dark:text-white select-none whitespace-nowrap">
                        {tech.name}
                      </span>
                      <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded ml-1">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
