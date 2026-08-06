import React, { useEffect, useState } from 'react';
import { ArrowUp, Clock } from 'lucide-react';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-white/[0.08] max-w-6xl mx-auto z-10 relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span>© {new Date().getFullYear()} Alexander Vance</span>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-400">Handcrafted with React & Tailwind</span>
        </div>

        {/* Middle Live Time Clock */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-neutral-400" />
          <span>San Francisco, CA:</span>
          <span className="text-white font-medium">{timeStr || '12:00 PM PST'}</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
