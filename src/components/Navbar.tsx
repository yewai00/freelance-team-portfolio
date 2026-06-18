import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { useTheme } from '@/src/components/ThemeProvider';
import Button from '@/src/components/ui/Button';

// Navigation links matching our section IDs
const NAV_ITEMS = [
  { label: 'Hero', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy to detect active section and scrolled state
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background glassmorphism transition
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].href.slice(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].href.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    

    // Close the mobile menu immediately to prevent visual clutter and layout delay during scroll
    setIsOpen(false);

    // Short timeout to decouple scroll triggering from the active touch/render-cycle 
    // This prevents mobile browsers (especially Safari/Chrome on iOS) from canceling/halting 
    // the smooth scroll transition due to drawer height/layout shift.
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // scrollIntoView natively respects our `scroll-padding-top: 80px` in CSS,
        // offering native-level buttery smooth scrolling on mobile viewports.
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 50);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0b]/80 shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          id="nav-logo"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md dark:bg-indigo-600 dark:text-white">
            V
          </span>
          <span>Veloce <span className="text-indigo-600 dark:text-indigo-400">Dev</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" id="nav-desktop">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 z-[-1] rounded-full bg-indigo-50 dark:bg-white/5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Switcher + Start Project Button) */}
        <div className="hidden md:flex items-center gap-4" id="nav-actions">
          {/* Working, Elegant Light/Dark Mode Switcher */}
          <button
            id="theme-toggler-desktop"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 shadow-sm transition-all hover:bg-slate-100/90 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-slate-50 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="dark"
                  initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 40 }}
                  transition={{ duration: 0.15 }}
                >
                  <Sun className="h-5 w-5 text-indigo-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  initial={{ opacity: 0, scale: 0.8, rotate: 40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  transition={{ duration: 0.15 }}
                >
                  <Moon className="h-5 w-5 text-slate-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Button
            id="nav-cta-desktop"
            variant="primary"
            size="sm"
            onClick={(e: any) => handleNavClick(e, '#contact')}
          >
            Start a Project
          </Button>
        </div>

        {/* Tablet & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden" id="nav-mobile-controls">
          <button
            id="theme-toggler-mobile"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 shadow-sm transition-all hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 scroll-py-1"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-indigo-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-800" />
            )}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#0a0a0b] md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6 pb-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-white/5 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 px-4">
                <Button
                  id="nav-cta-mobile"
                  variant="primary"
                  className="w-full"
                  onClick={(e: any) => handleNavClick(e, '#contact')}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
