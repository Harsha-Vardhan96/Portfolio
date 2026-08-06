import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';

// Lazy loaded non-critical components for optimal 60 FPS initial page load
const Projects = lazy(() => import('./components/Projects'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Experience = lazy(() => import('./components/Experience'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Section loading fallback skeleton
const LoadingFallback = () => (
  <div className="py-20 flex items-center justify-center font-mono text-xs text-neutral-500">
    <span className="w-2 h-2 rounded-full bg-white/40 animate-ping mr-2" />
    Loading section...
  </div>
);

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#070709] text-[#E5E7EB] relative font-sans selection:bg-white/10 selection:text-white antialiased overflow-x-hidden gpu-accelerated"
    >
      {/* Background Lighting, Spotlight & Film Grain */}
      <AmbientBackground />

      {/* Navigation Bar */}
      <Header onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

        <Suspense fallback={<LoadingFallback />}>
          <Projects />
          <Philosophy />
          <Experience />
          <TechStack />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Interactive ⌘K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </motion.div>
  );
}
