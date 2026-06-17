import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // duration in ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 1500, 
  decimals = 0, 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: Cubic Out for a smooth deceleration at the end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = startValue + easeProgress * (endValue - startValue);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleReset = () => {
      // Re-trigger animate on the next ticks
      cancelAnimationFrame(animationFrameId);
      startTime = null;
      setCount(0);
      
      // Introduce a slight delay so the user starts moving back before counting starts
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, 250);
    };

    window.addEventListener('reset-hero-counters', handleReset);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('reset-hero-counters', handleReset);
    };
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
