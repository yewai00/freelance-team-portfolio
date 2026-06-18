import React from 'react';
import { Github, FileCode, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      id="main-app-footer"
      className="border-t border-slate-200 bg-white py-12 dark:border-white/5 dark:bg-[#0a0a0b] text-slate-600 dark:text-slate-400"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-600 text-white text-xs dark:bg-indigo-600 dark:text-white font-mono uppercase">
                A
              </span>
              <span>Apex Studio</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Active engineering partners designing reliable backends, highly responsive front-ends, and robust multi-cloud container grids.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Sitemap Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-450 transition-colors"
                >
                  Hero Section
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-450 transition-colors"
                >
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleNavClick(e, '#team')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-455 transition-colors"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  onClick={(e) => handleNavClick(e, '#showcase')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-450 transition-colors"
                >
                  Showcase & Benchmarks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Operation Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Operations Meta
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <strong>Global Intake:</strong> intake@apex-studios.io
              </li>
              <li>
                <strong>Office coordinates:</strong> UTC, EST, CET channels
              </li>
              <li>
                <strong>Availability:</strong> Monday &ndash; Friday, 2hr reply SLA
              </li>
            </ul>
          </div>

          {/* Column 4: Standards and github links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Source & Standards
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Code produced is highly annotated, structured modularly, and ready for deployment to any scalable Next.js or cloud system.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded bg-slate-50 border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-xs"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-4 w-4" />
                </a>
                <span className="text-[10px] items-center gap-1 text-slate-400 dark:text-slate-500 flex font-mono bg-slate-50 dark:bg-white/5 px-2 py-1 rounded border dark:border-white/5">
                  <Shield className="h-3 w-3 text-emerald-500" />
                  HIPAA SAFE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 dark:border-white/5 text-[10px] text-slate-400 dark:text-slate-500">
          <p>
            &copy; {currentYear} Apex Studio Engineering Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
