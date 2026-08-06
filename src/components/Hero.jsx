import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Sparkles, Code2, Cpu, ShieldCheck, Database, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Hero({ onOpenCommandPalette }) {
  // Dozens of cards scattered across the canvas for Layer 1
  const floatingCards = [
    { text: '10M+ RPS Edge Cluster', icon: Cpu, x: '8%', y: '12%', duration: 25, delay: 0 },
    { text: 'Rust Tokio Async Engine', icon: Terminal, x: '75%', y: '15%', duration: 30, delay: 2 },
    { text: '99.999% SLA Uptime', icon: ShieldCheck, x: '82%', y: '68%', duration: 22, delay: 1 },
    { text: '< 15ms p99 Latency', icon: Sparkles, x: '12%', y: '72%', duration: 28, delay: 3 },
    { text: 'Zero-Copy Ring Buffer', icon: Code2, x: '85%', y: '40%', duration: 26, delay: 4 },
    { text: 'Distributed Raft Consensus', icon: Database, x: '5%', y: '42%', duration: 24, delay: 2 },
    { text: 'AVX-512 SIMD Assembly', icon: Cpu, x: '22%', y: '25%', duration: 29, delay: 5 },
    { text: 'Apache Arrow Columnar Engine', icon: Layers, x: '68%', y: '82%', duration: 27, delay: 1 },
    { text: 'OpenTelemetry Trace Pipeline', icon: Terminal, x: '35%', y: '10%', duration: 31, delay: 3 },
    { text: 'gRPC Low-Latency Proxy', icon: Database, x: '62%', y: '28%', duration: 23, delay: 0 },
    { text: 'eBPF Kernel Packet Filter', icon: ShieldCheck, x: '28%', y: '85%', duration: 32, delay: 4 },
    { text: 'React 19 & Tailwind v4', icon: Sparkles, x: '48%', y: '88%', duration: 25, delay: 2 },
    { text: 'San Francisco, CA', icon: Terminal, x: '45%', y: '8%', duration: 28, delay: 1 },
    { text: 'PostgreSQL Spanner Engine', icon: Database, x: '15%', y: '58%', duration: 26, delay: 5 },
    { text: 'Wasm Edge Sandbox', icon: Code2, x: '78%', y: '55%', duration: 24, delay: 3 },
  ];

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#070709] flex items-center justify-center select-none"
    >
      {/* ==========================================
          LAYER 1: Infinite Moving Canvas of Floating Cards
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Ambient Backlight behind center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[150px]" />

        {/* Floating Cards Canvas */}
        {floatingCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, (idx % 2 === 0 ? 30 : -30), 0],
                y: [0, (idx % 3 === 0 ? -40 : 40), 0],
              }}
              transition={{
                duration: card.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: card.delay,
              }}
              style={{
                left: card.x,
                top: card.y,
              }}
              className="absolute hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.018] border border-white/[0.05] backdrop-blur-[3px] shadow-lg shadow-black/40 text-neutral-400 text-xs font-mono opacity-40 hover:opacity-80 transition-opacity"
            >
              <Icon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span className="whitespace-nowrap tracking-tight">{card.text}</span>
            </motion.div>
          );
        })}

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* ==========================================
          LAYER 2: Single Center Focused Card
          ========================================== */}
      <div className="relative z-10 w-full max-w-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/80 space-y-7 relative overflow-hidden backdrop-blur-2xl bg-black/60 text-center"
        >
          {/* Subtle top glare highlight line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for select opportunities</span>
          </div>

          {/* Personal Info Header */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Alexander Vance
            </h1>
            <p className="text-sm sm:text-base font-mono text-neutral-400">
              Staff Software Engineer & Systems Architect
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-md mx-auto">
            Engineering resilient low-latency distributed systems, high-throughput cloud infrastructure, and precision web experiences.
          </p>

          {/* Core Tech Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {['Rust', 'TypeScript', 'Go', 'Distributed Systems', 'React'].map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[11px] font-mono text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 shadow-md cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenCommandPalette}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              <span>Command Palette</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">⌘K</kbd>
            </button>
          </div>

          {/* Social Icons Footer */}
          <div className="flex items-center justify-center gap-4 pt-2 text-neutral-400">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
              title="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
