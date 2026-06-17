import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  id: string; // Ensure unique HTML ID attribute as per guidelines
  className?: string;
  hoverActive?: boolean;
  key?: string | number;
}

export function Card({ children, id, className = '', hoverActive = true }: CardProps) {
  return (
    <div
      id={id}
      className={`
        relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 
        shadow-sm backdrop-blur-md transition-all duration-300
        dark:border-white/10 dark:bg-white/5 dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]
        ${hoverActive ? 'hover:-translate-y-1 hover:border-slate-300 dark:hover:border-indigo-500/50 hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 border-t border-slate-100 dark:border-slate-900 ${className}`}>{children}</div>;
}
