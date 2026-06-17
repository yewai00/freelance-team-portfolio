import React from 'react';
import { motion } from 'motion/react';

export default function SpaceBackground() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let animationFrameId: number;
    
    // Smooth mouse coordinates with linear interpolation (lerp) for a silky liquid delay
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate offsets (-1 to 1) centering the viewport
      const targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      setMouse(prev => ({
        ...prev,
        targetX,
        targetY
      }));
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Smooth lerping loop for high-performance liquid response
    const updatePhysics = () => {
      setMouse(prev => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        
        // Liquid behavior has a slow, highly viscous damping rate (lerp factor 0.04)
        return {
          ...prev,
          x: prev.x + dx * 0.04,
          y: prev.y + dy * 0.04
        };
      });
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll setup
    setScrollY(window.scrollY);
    
    // Start physics loops
    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Soft background twinkling stardust to keep organic outer-space theme
  const starsArray = [
    { id: 'star-sb-1', top: '12%', left: '15%', size: 2, delay: 0.5 },
    { id: 'star-sb-2', top: '22%', left: '82%', size: 3, delay: 1.8 },
    { id: 'star-sb-3', top: '50%', left: '8%', size: 2, delay: 1.1 },
    { id: 'star-sb-4', top: '68%', left: '76%', size: 2.5, delay: 2.5 },
    { id: 'star-sb-5', top: '85%', left: '18%', size: 3, delay: 0.2 },
    { id: 'star-sb-6', top: '38%', left: '64%', size: 1.5, delay: 1.4 },
  ];

  // Dynamic values altered by scrolling to shift liquid volumes deep in the layout
  const scrollIntensity = Math.min(scrollY / 1000, 1.5);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="liquid-space-container">
      {/* Dynamic Star Dust Layer with parallax drift */}
      {starsArray.map((star) => (
        <motion.div
          key={star.id}
          id={star.id}
          className="absolute rounded-full bg-indigo-500/30 dark:bg-indigo-400/25 blur-[0.5px]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.85, 0.15],
            y: scrollY * -0.15, // Light vertical drift
          }}
          transition={{
            opacity: {
              duration: 5,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            },
            y: {
              type: 'spring',
              stiffness: 25,
              damping: 15
            }
          }}
        />
      ))}

      {/* SVG Liquid Gooey Filter */}
      {/* Works on modern chromium instances inside the preview iframe */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 32 -11" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Liquid Abstract Blob Container */}
      {/* Increased the container opacities and center-gradient saturations to make it beautifully visible */}
      <div 
        className="absolute inset-0 filter select-none pointer-events-none opacity-[0.45] dark:opacity-[0.30] mix-blend-multiply dark:mix-blend-screen"
        style={{ filter: 'url(#liquid-goo)' }}
      >
        {/* Blob 1: Violet/Pink - Centered on top right, tracks mouse reverse and expands during scroll */}
        <motion.div
          id="liquid-blob-1"
          className="absolute rounded-full"
          style={{
            // Sharper liquid color gradient with increased central opacity
            background: 'radial-gradient(circle, rgba(168,85,247,0.55) 0%, rgba(99,102,241,0.18) 70%)',
            top: '5%',
            right: '10%',
            width: '45vw',
            height: '45vw',
            maxWidth: '550px',
            maxHeight: '550px',
          }}
          animate={{
            // Viscous fluid translation relative to mouse positioning and scroll displacement
            x: mouse.x * -70,
            y: mouse.y * -50 + (scrollY * -0.1),
            scale: 1 + scrollIntensity * 0.1,
            // Continuous biological morphing border-radius to imitate organic liquid
            borderRadius: [
              "42% 58% 70% 30% / 45% 45% 55% 55%",
              "70% 30% 52% 48% / 60% 40% 60% 40%",
              "30% 70% 45% 55% / 40% 60% 40% 60%",
              "42% 58% 70% 30% / 45% 45% 55% 55%"
            ]
          }}
          transition={{
            borderRadius: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: 'tween', ease: 'linear' },
            y: { type: 'tween', ease: 'linear' },
            scale: { type: 'spring', stiffness: 35, damping: 15 }
          }}
        />

        {/* Blob 2: Cyan/Teal - Tracking mouse with momentum, drifting under scrolls */}
        <motion.div
          id="liquid-blob-2"
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.48) 0%, rgba(13,148,136,0.15) 75%)',
            left: '25%',
            top: '30%',
            width: '40vw',
            height: '40vw',
            maxWidth: '480px',
            maxHeight: '480px',
          }}
          animate={{
            x: mouse.x * 60,
            y: mouse.y * 70 + (scrollY * -0.15),
            scale: 1.1 + scrollIntensity * 0.08,
            borderRadius: [
              "50% 50% 30% 70% / 50% 60% 40% 60%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "60% 40% 30% 72% / 50% 30% 70% 50%",
              "50% 50% 30% 70% / 50% 60% 40% 60%"
            ]
          }}
          transition={{
            borderRadius: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: 'tween', ease: 'linear' },
            y: { type: 'tween', ease: 'linear' },
            scale: { type: 'spring', stiffness: 35, damping: 15 }
          }}
        />

        {/* Blob 3: Indigo - Heavy core liquid stationed dynamically top left */}
        <motion.div
          id="liquid-blob-3"
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0.15) 80%)',
            left: '5%',
            top: '8%',
            width: '35vw',
            height: '35vw',
            maxWidth: '420px',
            maxHeight: '420px',
          }}
          animate={{
            x: mouse.x * -35,
            y: mouse.y * -45 + (scrollY * -0.05),
            scale: 0.95 + scrollIntensity * 0.12,
            borderRadius: [
              "65% 35% 50% 50% / 40% 60% 40% 60%",
              "45% 55% 35% 65% / 55% 45% 55% 45%",
              "35% 65% 65% 35% / 35% 35% 65% 65%",
              "65% 35% 50% 50% / 40% 60% 40% 60%"
            ]
          }}
          transition={{
            borderRadius: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: 'tween', ease: 'linear' },
            y: { type: 'tween', ease: 'linear' },
            scale: { type: 'spring', stiffness: 35, damping: 15 }
          }}
        />

        {/* Blob 4: Soft Magenta Accent Blob - Fluidly connects Blob 1 and 2 to form liquid streams */}
        <motion.div
          id="liquid-blob-4"
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0) 70%)',
            left: '42%',
            top: '15%',
            width: '28vw',
            height: '28vw',
            maxWidth: '320px',
            maxHeight: '320px',
          }}
          animate={{
            x: mouse.x * 90,
            y: mouse.y * 80 + (scrollY * -0.22),
            scale: 1.05 + scrollIntensity * 0.2,
            borderRadius: [
              "35% 65% 50% 50% / 50% 50% 50% 50%",
              "65% 35% 30% 70% / 40% 60% 40% 60%",
              "50% 50% 65% 35% / 60% 40% 60% 40%",
              "35% 65% 50% 50% / 50% 50% 50% 50%"
            ]
          }}
          transition={{
            borderRadius: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: 'tween', ease: 'linear' },
            y: { type: 'tween', ease: 'linear' }
          }}
        />
      </div>
    </div>
  );
}
