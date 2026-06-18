import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Cpu, Code } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import AnimatedCounter from '@/src/components/AnimatedCounter';
import { TEAM } from '@/src/data/portfolioData';

function TypingHeading() {
  const part1 = "We engineer scalable full-stack ";
  const part2 = "software solutions.";
  const totalLength = part1.length + part2.length;
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentCount = 0;

    const startTyping = () => {
      timer = setInterval(() => {
        if (currentCount < totalLength) {
          currentCount++;
          setTypedCount(currentCount);
        } else {
          clearInterval(timer);
        }
      }, 25); // Faster, highly snappy professional typing speed
    };

    // Stagger slightly after badge and initial hero load animations start
    const startDelay = setTimeout(startTyping, 400);

    return () => {
      clearTimeout(startDelay);
      clearInterval(timer);
    };
  }, [totalLength]);

  // Compute text segments
  const part1TypedLimit = Math.min(typedCount, part1.length);
  const part1Typed = part1.substring(0, part1TypedLimit);
  const part1Untyped = part1.substring(part1TypedLimit);

  const part2TypedLimit = Math.max(0, typedCount - part1.length);
  const part2Typed = part2.substring(0, part2TypedLimit);
  const part2Untyped = part2.substring(part2TypedLimit);

  return (
    <>
      <span>{part1Typed}</span>
      <span className="opacity-0 select-none" aria-hidden="true">{part1Untyped}</span>
      <span className="relative inline-block bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-cyan-400 dark:via-indigo-300">
        <span>{part2Typed}</span>
        <span className="opacity-0 select-none" aria-hidden="true">{part2Untyped}</span>
      </span>
    </>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80; // Navbar offset
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
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 sm:pb-24"
    >
      {/* Premium Back-lighting and Grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-200/20 blur-[100px] dark:bg-indigo-500/5 sm:h-[450px] sm:w-[450px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-cyan-300/10 blur-[90px] dark:bg-cyan-500/5 sm:h-[400px] sm:w-[400px]" />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200 shadow-sm"
        >
          <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span>BUILT FAST • SECURE BY DESIGN</span>
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl min-h-[4rem]"
        >
          <TypingHeading />
        </motion.h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl md:leading-relaxed"
        >
          We are an elite freelance software development team based in Myanmar. We build modern web and mobile applications, scalable backend systems, and robust cloud infrastructure designed for long-term business success.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          id="hero-ctas"
        >
          <Button
            id="hero-cta-primary"
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('#contact')}
            className="group"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <Button
            id="hero-cta-secondary"
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('#showcase')}
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Subtle Floating High-Contrast Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 rounded-3xl border border-slate-200/80 bg-white/40 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:grid-cols-4 sm:gap-2"
          id="hero-metrics"
        >
          {/* Metric 1: Team Member Count (Dynamic with counting up motion) */}
          <div className="flex flex-col items-center p-2 text-center">
            <span className="font-mono text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              <AnimatedCounter value={TEAM.length} decimals={0} suffix="+" />
            </span>
            <span className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              Active Tech Partners
            </span>
          </div>

          {/* Metric 2: Customer Satisfaction */}
          <div className="flex flex-col items-center border-t border-slate-200/80 pt-6 dark:border-white/5 sm:border-t-0 sm:border-l sm:pt-2 sm:pl-2 text-center">
            <span className="font-mono text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              <AnimatedCounter value={100} decimals={0} suffix="%" />
            </span>
            <span className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              Customer Satisfaction Rate
            </span>
          </div>

          {/* Metric 3: Uptime */}
          <div className="flex flex-col items-center border-t border-slate-200/80 pt-6 dark:border-white/5 sm:border-t-0 sm:border-l sm:pt-2 sm:pl-2 text-center">
            <span className="font-mono text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              <AnimatedCounter value={99.99} decimals={2} suffix="%" />
            </span>
            <span className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              Uptime Architecture Standard
            </span>
          </div>

          {/* Metric 4: Compliance / Passing rate */}
          <div className="flex flex-col items-center border-t border-slate-200/80 pt-6 dark:border-white/5 sm:border-t-0 sm:border-l sm:pt-2 sm:pl-2 text-center">
            <span className="font-mono text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              <AnimatedCounter value={100} decimals={0} suffix="%" />
            </span>
            <span className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              HIPAA & Cyber Security Standards
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
