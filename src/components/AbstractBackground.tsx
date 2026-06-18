import React, { useState, useEffect } from 'react';
import {
    Cpu, Code2, Network, Database, Cloud, Server, Shield, Terminal, Blocks, Braces, Binary
} from 'lucide-react';
import { FaJava, FaAws } from 'react-icons/fa';
import {
    SiJavascript, SiFlutter, SiAndroid, SiKotlin, SiKubernetes, SiDocker, SiGit, SiReact, SiAngular
} from 'react-icons/si';

const ICON_COMPONENTS = [
    Cpu, Code2, Network, Database, Cloud, Server, Shield, Terminal, Blocks, Braces, Binary,
    FaJava, FaAws, SiJavascript, SiFlutter, SiAndroid, SiKotlin, SiKubernetes, SiDocker, SiGit, SiReact, SiAngular
];

interface IconData {
    id: number;
    Icon: React.ElementType;
    top: string;
    left: string;
    size: number;
    duration: string;
    delay: string;
    rotation: string;
}

export default function AbstractBackground() {
    const [icons, setIcons] = useState<IconData[]>([]);

    useEffect(() => {
        // Shuffle the icons array so they don't always appear in the same order
        const shuffledIcons = [...ICON_COMPONENTS].sort(() => Math.random() - 0.5);

        const generatedIcons = shuffledIcons.map((Icon, index) => ({
            id: index,
            Icon,
            top: `${Math.floor(Math.random() * 90 + 5)}%`,
            left: `${Math.floor(Math.random() * 90 + 5)}%`,
            size: Math.floor(Math.random() * 24 + 20),
            duration: `${Math.floor(Math.random() * 30 + 10)}s`,
            delay: `-${Math.floor(Math.random() * 30)}s`,
            rotation: `${Math.floor(Math.random() * 60 - 30)}deg`,
        }));
        setIcons(generatedIcons);
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
        @keyframes space-drift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; }
          25% { opacity: 0.2; }
          50% { transform: translate(40px, -40px) rotate(15deg); opacity: 0.08; }
          75% { opacity: 0.2; }
          100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; }
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
                {icons.map((item) => (
                    <div
                        key={item.id}
                        className="absolute text-indigo-900/40 dark:text-indigo-200/30"
                        style={{
                            top: item.top,
                            left: item.left,
                            animation: `space-drift ${item.duration} ease-in-out infinite alternate`,
                            animationDelay: item.delay,
                            transform: `rotate(${item.rotation})`,
                        }}
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
