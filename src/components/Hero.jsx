import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Check, ArrowUpRight, Cpu, Terminal, ShieldCheck, Sparkles, Code2, Database, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenCommandPalette }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = 'alexander.vance.dev@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // 32 Distinct, naturally scattered floating cards for Layer 1 (Endless Creative Canvas)
  const floatingCards = [
    { id: 1, type: 'badge', text: '10M+ RPS Edge Cluster', icon: Cpu, x: '4%', y: '8%', rotate: '-4deg', size: 'normal', opacity: 0.35, duration: 26, delay: 0 },
    { id: 2, type: 'code', text: 'fn lock_free_push(&self) -> Ok(())', x: '72%', y: '6%', rotate: '3deg', size: 'code', opacity: 0.4, duration: 30, delay: 1 },
    { id: 3, type: 'badge', text: '99.999% SLA Uptime', icon: ShieldCheck, x: '85%', y: '68%', rotate: '-2deg', size: 'pill', opacity: 0.3, duration: 22, delay: 2 },
    { id: 4, type: 'metric', text: 'p99 LATENCY < 12.4ms', x: '5%', y: '82%', rotate: '5deg', size: 'large', opacity: 0.35, duration: 28, delay: 3 },
    { id: 5, type: 'badge', text: 'Zero-Copy Ring Buffer', icon: Code2, x: '88%', y: '36%', rotate: '-5deg', size: 'normal', opacity: 0.4, duration: 25, delay: 0 },
    { id: 6, type: 'code', text: 'const SIMD_STRIDE = 64;', x: '3%', y: '48%', rotate: '4deg', size: 'code', opacity: 0.3, duration: 32, delay: 4 },
    { id: 7, type: 'badge', text: 'AVX-512 SIMD Assembly', icon: Cpu, x: '18%', y: '16%', rotate: '-3deg', size: 'normal', opacity: 0.35, duration: 27, delay: 1 },
    { id: 8, type: 'badge', text: 'Apache Arrow Flight', icon: Layers, x: '68%', y: '86%', rotate: '2deg', size: 'pill', opacity: 0.3, duration: 29, delay: 2 },
    { id: 9, type: 'badge', text: 'OpenTelemetry Pipeline', icon: Terminal, x: '28%', y: '6%', rotate: '-6deg', size: 'normal', opacity: 0.35, duration: 31, delay: 3 },
    { id: 10, type: 'metric', text: 'QUORUM: 5 / 5 NODES', x: '62%', y: '16%', rotate: '4deg', size: 'metric', opacity: 0.4, duration: 24, delay: 0 },
    { id: 11, type: 'badge', text: 'eBPF Kernel Probe', icon: ShieldCheck, x: '24%', y: '88%', rotate: '-4deg', size: 'pill', opacity: 0.3, duration: 33, delay: 5 },
    { id: 12, type: 'badge', text: 'React 19 & Tailwind v4', icon: Sparkles, x: '46%', y: '90%', rotate: '3deg', size: 'normal', opacity: 0.35, duration: 28, delay: 2 },
    { id: 13, type: 'code', text: 'SELECT * FROM telemetry_stream;', x: '48%', y: '4%', rotate: '-2deg', size: 'code', opacity: 0.35, duration: 29, delay: 1 },
    { id: 14, type: 'badge', text: 'PostgreSQL Spanner', icon: Database, x: '8%', y: '64%', rotate: '6deg', size: 'normal', opacity: 0.4, duration: 26, delay: 4 },
    { id: 15, type: 'badge', text: 'Wasm Edge Sandbox', icon: Code2, x: '82%', y: '52%', rotate: '-3deg', size: 'pill', opacity: 0.3, duration: 27, delay: 2 },
    { id: 16, type: 'metric', text: 'MEM: 14.2 MB / NODE', x: '86%', y: '20%', rotate: '5deg', size: 'metric', opacity: 0.35, duration: 23, delay: 0 },
    { id: 17, type: 'badge', text: 'Raft Consensus Protocol', icon: Database, x: '2%', y: '32%', rotate: '-5deg', size: 'large', opacity: 0.3, duration: 30, delay: 3 },
    { id: 18, type: 'code', text: 'cacheHitRate: 98.4%', x: '75%', y: '30%', rotate: '2deg', size: 'code', opacity: 0.4, duration: 25, delay: 1 },
    { id: 19, type: 'badge', text: 'San Francisco, CA', icon: Terminal, x: '14%', y: '38%', rotate: '-2deg', size: 'pill', opacity: 0.25, duration: 32, delay: 4 },
    { id: 20, type: 'metric', text: 'ZERO GC PAUSES', x: '84%', y: '84%', rotate: '6deg', size: 'metric', opacity: 0.35, duration: 28, delay: 2 },
    { id: 21, type: 'badge', text: 'Vector Search HNSW', icon: Sparkles, x: '38%', y: '86%', rotate: '-4deg', size: 'normal', opacity: 0.3, duration: 27, delay: 0 },
    { id: 22, type: 'code', text: 'mTLS 1.3 Strict Auth', x: '60%', y: '78%', rotate: '3deg', size: 'code', opacity: 0.35, duration: 31, delay: 3 },
    { id: 23, type: 'badge', text: 'Rust Async Tokio', icon: Terminal, x: '68%', y: '48%', rotate: '-3deg', size: 'pill', opacity: 0.3, duration: 24, delay: 1 },
    { id: 24, type: 'metric', text: 'SHARD COUNT: 128', x: '16%', y: '76%', rotate: '4deg', size: 'metric', opacity: 0.4, duration: 26, delay: 5 },
    { id: 25, type: 'badge', text: 'gRPC Micro-Proxy', icon: Database, x: '76%', y: '64%', rotate: '-5deg', size: 'normal', opacity: 0.35, duration: 29, delay: 2 },
    { id: 26, type: 'code', text: 'AST COMPILER: PASSING', x: '35%', y: '14%', rotate: '2deg', size: 'code', opacity: 0.3, duration: 33, delay: 4 },
    { id: 27, type: 'badge', text: 'Sub-5KB Core Bundle', icon: Sparkles, x: '8%', y: '24%', rotate: '-4deg', size: 'pill', opacity: 0.35, duration: 25, delay: 0 },
    { id: 28, type: 'metric', text: 'STATUS: OPERATIONAL', x: '78%', y: '92%', rotate: '5deg', size: 'metric', opacity: 0.4, duration: 22, delay: 3 },
    { id: 29, type: 'badge', text: 'Prometheus Exporters', icon: Terminal, x: '3%', y: '92%', rotate: '-2deg', size: 'normal', opacity: 0.3, duration: 30, delay: 1 },
    { id: 30, type: 'code', text: 'atomic::Ordering::SeqCst', x: '88%', y: '8%', rotate: '4deg', size: 'code', opacity: 0.35, duration: 27, delay: 2 },
    { id: 31, type: 'badge', text: 'Kafka Event Streams', icon: Database, x: '66%', y: '6%', rotate: '-3deg', size: 'normal', opacity: 0.3, duration: 28, delay: 4 },
    { id: 32, type: 'metric', text: 'WCAG 2.1 AAA', x: '58%', y: '92%', rotate: '2deg', size: 'pill', opacity: 0.35, duration: 31, delay: 5 },
  ];

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[720px] overflow-hidden bg-[#070709] flex items-center justify-center select-none"
    >
      {/* ==========================================
          LAYER 1: Infinite Creative Canvas (Background)
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Center Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.025] blur-[170px]" />

        {/* Scattered Floating Cards (32 items) */}
        {floatingCards.map((card) => {
          const Icon = card.icon;

          // Compute size variations
          let sizeClasses = 'px-4 py-2.5 rounded-xl border border-white/[0.04] bg-white/[0.015] backdrop-blur-[3px] text-xs font-mono text-neutral-400 shadow-lg shadow-black/40';
          if (card.size === 'pill') {
            sizeClasses = 'px-3 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-[2px] text-[11px] font-mono text-neutral-300 shadow-md shadow-black/30';
          } else if (card.size === 'code') {
            sizeClasses = 'px-3.5 py-2 rounded-lg border border-white/[0.06] bg-[#0d0d12]/60 backdrop-blur-[4px] text-[11px] font-mono text-emerald-400/90 shadow-xl shadow-black/50';
          } else if (card.size === 'metric') {
            sizeClasses = 'px-4 py-2 rounded-xl border border-white/[0.05] bg-white/[0.025] backdrop-blur-[3px] text-[11px] font-mono text-neutral-200 tracking-wider font-semibold shadow-lg shadow-black/40';
          } else if (card.size === 'large') {
            sizeClasses = 'px-5 py-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-[4px] text-xs font-mono text-neutral-200 font-medium shadow-2xl shadow-black/60';
          }

          return (
            <motion.div
              key={card.id}
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, (card.id % 2 === 0 ? 20 : -20), 0],
                y: [0, (card.id % 3 === 0 ? -28 : 28), 0],
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
                transform: `rotate(${card.rotate})`,
                opacity: card.opacity,
              }}
              className={`absolute hidden md:flex items-center gap-2.5 transition-opacity duration-500 hover:opacity-90 ${sizeClasses}`}
            >
              {Icon && <Icon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />}
              <span className="whitespace-nowrap tracking-tight">{card.text}</span>
            </motion.div>
          );
        })}

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* ==========================================
          LAYER 2: Visual Anchor — Single Center Dark Glass Card
          ========================================== */}
      <div className="relative z-10 w-full max-w-lg px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -6, 0],
            borderColor: [
              'rgba(255, 255, 255, 0.08)',
              'rgba(255, 255, 255, 0.16)',
              'rgba(255, 255, 255, 0.08)',
            ],
            boxShadow: [
              '0 35px 120px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 0 40px rgba(255, 255, 255, 0.02)',
              '0 40px 130px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.22), 0 0 65px rgba(255, 255, 255, 0.05)',
              '0 35px 120px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 0 40px rgba(255, 255, 255, 0.02)',
            ],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            borderColor: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            boxShadow: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          }}
          className="relative w-full rounded-[26px] bg-[#0a0a0e]/80 backdrop-blur-2xl md:backdrop-blur-3xl border p-8 sm:p-10 text-center space-y-7 overflow-hidden select-none"
        >
          {/* Delicate Top Highlight Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* 1. Name: Large Elegant Serif */}
          <div className="space-y-2 pt-1">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Alexander Vance
            </h1>

            {/* 2. Software Developer: Uppercase & Letter Spacing */}
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-neutral-400 font-medium pt-1">
              Software Developer
            </div>
          </div>

          {/* 3. Short Introduction: Simple Modern Sans-Serif */}
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-normal leading-relaxed max-w-sm mx-auto">
            Crafting resilient distributed systems, low-latency infrastructure, and high-precision digital products.
          </p>

          {/* 4. Action Buttons: Rounded, Premium Hover Animations */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {/* Resume Button */}
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Alexander Vance — Software Engineer Resume (PDF)...");
              }}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-black" />
              <span>Resume</span>
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* 5. Social & Direct Email Row */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-center gap-5 text-neutral-400">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Email Direct Copy */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-300 text-xs font-mono cursor-pointer"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Mail className="w-3.5 h-3.5" />
              )}
              <span className="text-[11px]">{copiedEmail ? 'Copied' : 'Email'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
