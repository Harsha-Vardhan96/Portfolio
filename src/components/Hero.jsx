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

  // Background floating cards for Layer 1
  const floatingCards = [
    { text: '10M+ RPS Edge Cluster', icon: Cpu, x: '6%', y: '10%', duration: 28, delay: 0 },
    { text: 'Rust Tokio Async Engine', icon: Terminal, x: '78%', y: '12%', duration: 32, delay: 2 },
    { text: '99.999% SLA Uptime', icon: ShieldCheck, x: '84%', y: '72%', duration: 24, delay: 1 },
    { text: '< 15ms p99 Latency', icon: Sparkles, x: '8%', y: '78%', duration: 30, delay: 3 },
    { text: 'Zero-Copy Ring Buffer', icon: Code2, x: '88%', y: '42%', duration: 27, delay: 4 },
    { text: 'Distributed Raft Consensus', icon: Database, x: '4%', y: '44%', duration: 25, delay: 2 },
    { text: 'AVX-512 SIMD Assembly', icon: Cpu, x: '20%', y: '22%', duration: 31, delay: 5 },
    { text: 'Apache Arrow Columnar Engine', icon: Layers, x: '72%', y: '84%', duration: 29, delay: 1 },
    { text: 'OpenTelemetry Trace Pipeline', icon: Terminal, x: '32%', y: '8%', duration: 33, delay: 3 },
    { text: 'gRPC Low-Latency Proxy', icon: Database, x: '64%', y: '25%', duration: 26, delay: 0 },
    { text: 'eBPF Kernel Packet Filter', icon: ShieldCheck, x: '26%', y: '88%', duration: 34, delay: 4 },
    { text: 'React 19 & Tailwind v4', icon: Sparkles, x: '50%', y: '90%', duration: 28, delay: 2 },
    { text: 'San Francisco, CA', icon: Terminal, x: '46%', y: '6%', duration: 30, delay: 1 },
    { text: 'PostgreSQL Spanner Engine', icon: Database, x: '12%', y: '62%', duration: 27, delay: 5 },
    { text: 'Wasm Edge Sandbox', icon: Code2, x: '80%', y: '58%', duration: 26, delay: 3 },
  ];

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[720px] overflow-hidden bg-[#070709] flex items-center justify-center select-none"
    >
      {/* ==========================================
          LAYER 1: Infinite Moving Canvas (Background)
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep Ambient Center Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-white/[0.025] blur-[160px]" />

        {/* Floating Cards Canvas */}
        {floatingCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, (idx % 2 === 0 ? 25 : -25), 0],
                y: [0, (idx % 3 === 0 ? -35 : 35), 0],
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
              className="absolute hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-[2px] shadow-lg shadow-black/40 text-neutral-400 text-xs font-mono opacity-30 hover:opacity-75 transition-opacity"
            >
              <Icon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[26px] bg-[#0a0a0e]/80 backdrop-blur-2xl md:backdrop-blur-3xl border border-white/[0.08] p-8 sm:p-10 text-center space-y-7 shadow-[0_35px_120px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)] subtle-glow overflow-hidden"
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
