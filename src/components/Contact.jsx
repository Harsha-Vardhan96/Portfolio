import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'harsha21.menda@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: 'GitHub', url: 'https://github.com/Harsha-Vardhan96', icon: GithubIcon, handle: '@Harsha-Vardhan96' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harsha-vardhan-menda-60bb37345', icon: LinkedinIcon, handle: 'in/harsha-vardhan-menda' },
    { name: 'X / Twitter', url: 'https://x.com', icon: TwitterIcon, handle: '@harsha_menda' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>05 / Initiate Contact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let’s build something extraordinary.
          </h2>
        </div>

        {/* Main Contact Glass Card */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden space-y-10">
          {/* Ambient Lighting background inside card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Open for select staff engineering roles & advisory engagements.
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-sans">
              Whether you are architecting high-throughput distributed systems, building modern web platforms, or scaling technical engineering teams — feel free to reach out.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">DIRECT EMAIL</span>
                <span className="text-sm sm:text-base font-mono text-white font-medium truncate block">{email}</span>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socials.map((social, sIdx) => {
              const Icon = social.icon;
              return (
                <a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl border border-white/[0.05] hover:border-white/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{social.name}</div>
                      <div className="text-[11px] font-mono text-neutral-400">{social.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
