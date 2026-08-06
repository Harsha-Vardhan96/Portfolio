import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{project.category}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-emerald-400">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            {/* Title & Tagline */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-base text-neutral-300 leading-relaxed font-sans">{project.description}</p>
            </div>

            {/* Visual Image / Code Mockup Placeholder Banner */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-neutral-900/80 p-6 relative group">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-4 border-b border-white/5">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{project.repoName || 'architecture.spec.ts'}</span>
                </span>
                <span>{project.status || 'PRODUCTION'}</span>
              </div>
              <pre className="mt-4 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>

            {/* Architecture Overview */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-white/80" />
                <span>Architecture & Engineering Highlights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="glass-card p-3.5 rounded-xl border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-white/80" />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 px-6 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs transition-colors hover:bg-neutral-200"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-xs text-neutral-400 hover:text-white transition-colors font-mono cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
