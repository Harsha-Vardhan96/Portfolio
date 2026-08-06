import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Mail, 
  FolderGit2, 
  Terminal, 
  Code2, 
  Sparkles,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose(!isOpen) : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText('harshavardhan.menda@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commands = [
    {
      category: 'Navigation',
      items: [
        { title: 'Featured Works', icon: FolderGit2, action: () => { window.location.href = '#projects'; onClose(); } },
        { title: 'Engineering Principles', icon: Code2, action: () => { window.location.href = '#philosophy'; onClose(); } },
        { title: 'Experience & History', icon: Terminal, action: () => { window.location.href = '#experience'; onClose(); } },
        { title: 'Tech Stack Matrix', icon: Sparkles, action: () => { window.location.href = '#stack'; onClose(); } },
      ]
    },
    {
      category: 'Actions & Social',
      items: [
        { title: copied ? 'Email Copied!' : 'Copy Email Address', icon: Mail, action: copyEmail, badge: 'harshavardhan.menda@gmail.com' },
        { title: 'GitHub Profile', icon: GithubIcon, action: () => window.open('https://github.com/Harsha-Vardhan96', '_blank') },
        { title: 'LinkedIn Profile', icon: LinkedinIcon, action: () => window.open('https://linkedin.com', '_blank') },
      ]
    }
  ];

  const filteredCommands = commands.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      group.category.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-32 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Box */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-sans"
                autoFocus
              />
              <button 
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-300 p-1 rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-4">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1">
                    <div className="px-3 text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-semibold py-1">
                      {group.category}
                    </div>
                    {group.items.map((item, iIdx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={iIdx}
                          onClick={item.action}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-neutral-300 hover:text-white transition-all text-left text-sm group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-xs md:text-sm">{item.title}</span>
                          </div>

                          {item.badge && (
                            <span className="text-[10px] font-mono text-neutral-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-neutral-500 font-mono">
                  No matching commands found
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-neutral-300">ESC</kbd> to exit</span>
              <span className="flex items-center gap-1">
                Navigation palette
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
