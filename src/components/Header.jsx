import React, { useState, useEffect } from 'react';

export default function Header({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'philosophy', 'experience', 'stack', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Principles', href: '#philosophy', id: 'philosophy' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 md:px-6 py-2.5 rounded-full transition-all duration-500 glass-nav ${
          scrolled ? 'scale-[0.98] shadow-2xl border-white/10' : ''
        }`}
      >
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-xs tracking-wider font-semibold uppercase text-white/90 hover:text-white transition-colors"
        >
          <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] text-white font-mono">
            AV
          </span>
          <span className="hidden sm:inline font-sans text-sm tracking-tight text-white/80">Alexander Vance</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white/10 text-white shadow-sm border border-white/15'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action & Command Palette Trigger */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-300">Available</span>
          </div>

          {/* ⌘K Trigger Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer group"
            title="Open Command Menu (⌘K)"
          >
            <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">⌘K</span>
            <span className="hidden lg:inline text-[11px] text-neutral-400">Menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
