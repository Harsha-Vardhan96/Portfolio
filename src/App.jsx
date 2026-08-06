import React, { useState } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-[#E5E7EB] relative font-sans selection:bg-white/10 selection:text-white antialiased">
      {/* Background Lighting & Spotlight */}
      <AmbientBackground />

      {/* Navigation Bar */}
      <Header onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <Projects />
        <Philosophy />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive ⌘K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}
