import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Code2, Network, Database, Cloud, Server, Shield, Terminal, Blocks, Braces, Binary 
} from 'lucide-react';
import { FaJava, FaAws } from 'react-icons/fa';
import { 
  SiJavascript, SiFlutter, SiAndroid, SiKotlin, SiKubernetes, SiDocker, SiGit, SiReact, SiAngular, SiDigitalocean, SiSpring, SiHtml5, SiCss, SiVite, SiWordpress
} from 'react-icons/si';

const ICON_COMPONENTS = [
  Cpu, Code2, Network, Database, Cloud, Server, Shield, Terminal, Blocks, Braces, Binary,
  FaJava, FaAws, SiJavascript, SiFlutter, SiAndroid, SiKotlin, SiKubernetes, SiDocker, SiGit, SiReact, SiAngular, SiDigitalocean, SiSpring, SiHtml5, SiCss, SiVite, SiWordpress
];

interface Particle {
  id: number;
  Icon: React.ElementType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

export default function AbstractBackground() {
  const [icons, setIcons] = useState<Particle[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const divsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Shuffle the icons array
    const shuffledIcons = [...ICON_COMPONENTS].sort(() => Math.random() - 0.5);
    
    const particles = shuffledIcons.map((Icon, index) => {
      const size = Math.floor(Math.random() * 24 + 20);
      return {
        id: index,
        Icon,
        size,
        x: Math.random() * (width - size * 2) + size, // Keep away from exact edge
        y: Math.random() * (height - size * 2) + size,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.75
      };
    });

    // Quick initial collision resolution
    for (let iter = 0; iter < 10; iter++) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (p1.size + p2.size) / 1.5;
          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const dirX = dx / dist;
            const dirY = dy / dist;
            p1.x -= dirX * overlap / 2;
            p1.y -= dirY * overlap / 2;
            p2.x += dirX * overlap / 2;
            p2.y += dirY * overlap / 2;
          }
        }
      }
    }

    particlesRef.current = particles;
    setIcons(particles);

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.666, 3); // Normalize to 60fps, cap jump size
      lastTime = time;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const parts = particlesRef.current;

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.rotationSpeed * dt;

        // Wall collisions
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > w - p.size) { p.x = w - p.size; p.vx *= -1; }

        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > h - p.size) { p.y = h - p.size; p.vy *= -1; }
      }

      // Particle collisions
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const p1 = parts[i];
          const p2 = parts[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (p1.size + p2.size) / 2;

          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const dirX = dx / dist;
            const dirY = dy / dist;

            // Separate particles
            p1.x -= dirX * overlap * 0.5;
            p1.y -= dirY * overlap * 0.5;
            p2.x += dirX * overlap * 0.5;
            p2.y += dirY * overlap * 0.5;

            // Simple elastic collision (exchange velocities)
            const tmpVx = p1.vx;
            const tmpVy = p1.vy;
            p1.vx = p2.vx;
            p1.vy = p2.vy;
            p2.vx = tmpVx;
            p2.vy = tmpVy;
          }
        }
      }

      // Update DOM nodes
      for (let i = 0; i < parts.length; i++) {
        const div = divsRef.current[i];
        if (div) {
          div.style.transform = `translate3d(${parts[i].x}px, ${parts[i].y}px, 0) rotate(${parts[i].rotation}deg)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(0.95); }
        }
        .animate-float-1 { animation: float-1 20s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 25s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 30s ease-in-out infinite; }
      `}</style>
      
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-indigo-300/30 dark:bg-indigo-900/30 blur-[120px] animate-float-1 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-cyan-300/20 dark:bg-sky-900/20 blur-[140px] animate-float-2 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-[100px] animate-float-3 mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Floating Technical Objects */}
      <div className="absolute inset-0 z-10">
        {icons.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (divsRef.current[i] = el)}
            className="absolute top-0 left-0 text-indigo-900/10 dark:text-indigo-200/10 will-change-transform"
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </div>
        ))}
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
