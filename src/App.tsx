import { ThemeProvider } from '@/src/components/ThemeProvider';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Team from '@/src/components/Team';
import ProjectShowcase from '@/src/components/ProjectShowcase';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import AbstractBackground from '@/src/components/AbstractBackground';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-100 dark:bg-[#0a0a0b] dark:text-slate-200 selection:bg-indigo-600 selection:text-white dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
        
        {/* Dynamic global ambient lighting gradients & space patterns */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Light Mode Blobs */}
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-indigo-50/70 opacity-70 blur-[120px] dark:opacity-0 transition-opacity duration-100" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-slate-100 opacity-80 blur-[130px] dark:opacity-0 transition-opacity duration-100" />
          
          {/* Dark Mode Blobs (Indigo and Cyan of Clean Minimalism) */}
          <div className="absolute top-10 right-10 h-[600px] w-[600px] rounded-full bg-indigo-500/[0.04] opacity-0 blur-[140px] dark:opacity-100 transition-opacity duration-100" />
          <div className="absolute bottom-20 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] opacity-0 blur-[120px] dark:opacity-100 transition-opacity duration-100" />

          {/* Clean minimal animated background */}
          <AbstractBackground />
        </div>

        {/* Modular Layout Core */}
        <div className="relative z-10 font-sans flex flex-col">
          {/* Working, responsive glassmorphic Navbar & mode toggle */}
          <Navbar />

          <main id="main-content-flow" className="flex-grow">
            {/* 1. Hero Module */}
            <Hero />

            {/* 2. Services & Skills Module */}
            <Services />

            {/* 3. Meet the Team Module */}
            <Team />

            {/* 4. Past Projects & Case Study Showcase Module */}
            <ProjectShowcase />

            {/* 5. Why Choose Us (Engineering Standards) & Infinite Tech Ticker Module */}
            <WhyChooseUs />

            {/* 6. Dynamic Contact Handshake Module */}
            <Contact />
          </main>

          {/* Persistent global Footer */}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
