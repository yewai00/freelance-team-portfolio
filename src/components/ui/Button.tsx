import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  id: string; // Ensure unique HTML ID attribute as per guidelines
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: any) => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  id,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-all duration-250 cursor-pointer disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] outline-none';
  
  const variants = {
    primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/10 hover:bg-indigo-500 hover:shadow-indigo-500/20 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 dark:shadow-indigo-500/30 font-semibold border border-transparent',
    secondary: 'bg-slate-100 text-slate-900 border border-slate-200/60 hover:bg-slate-200/60 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10',
    outline: 'border border-slate-200 bg-white/50 text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-slate-100',
    glass: 'bg-indigo-500/10 text-indigo-700 border border-indigo-500/20 backdrop-blur-md hover:bg-indigo-500/15 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 dark:hover:bg-indigo-500/20 transition-all'
  };

  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
  };

  return (
    <button
      id={id}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
