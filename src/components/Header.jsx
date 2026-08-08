import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

function NavItem({ item, isActive }) {
  const buttonRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions for text layers
      gsap.set(text1Ref.current, { yPercent: 0 });
      gsap.set(text2Ref.current, { yPercent: 100 });

      timelineRef.current = gsap.timeline({ paused: true });

      timelineRef.current
        .to(buttonRef.current, {
          backgroundColor: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.95)',
          duration: 0.18,
          ease: 'power2.out',
        }, 0)
        .to(text1Ref.current, {
          yPercent: -100,
          duration: 0.18,
          ease: 'power2.out',
        }, 0)
        .to(text2Ref.current, {
          yPercent: 0,
          duration: 0.18,
          ease: 'power2.out',
        }, 0);
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      timelineRef.current.timeScale(1).play();
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.timeScale(1.35).reverse();
    }
  };

  return (
    <a
      ref={buttonRef}
      href={item.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium overflow-hidden select-none gpu-accelerated transition-colors duration-200 ${
        isActive
          ? 'bg-white/10 text-white shadow-sm border border-white/15'
          : 'bg-transparent text-neutral-400 border border-transparent'
      }`}
    >
      {/* Strictly Clipped Text Container */}
      <span className="relative inline-block overflow-hidden h-4 leading-none pointer-events-none gpu-accelerated">
        {/* Layer 1: Normal Text (Light Text) */}
        <span
          ref={text1Ref}
          className={`block text-xs font-medium leading-none ${
            isActive ? 'text-white' : 'text-neutral-400'
          }`}
        >
          {item.label}
        </span>

        {/* Layer 2: Duplicate Hover Text (Black Text, Strictly Clipped) */}
        <span
          ref={text2Ref}
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-black leading-none whitespace-nowrap"
        >
          {item.label}
        </span>
      </span>
    </a>
  );
}

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
            HV
          </span>
          <span className="hidden sm:inline font-sans text-sm tracking-tight text-white/80">Harsha Vardhan Menda</span>
        </a>

        {/* Desktop Navigation Links with GSAP PillNav Hover Animation */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
            />
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
