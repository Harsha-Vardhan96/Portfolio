import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', senderEmail: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const email = 'harsha.menda21@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Harsha,\n\n${formData.message}\n\nBest regards,\n${formData.name || 'Visitor'} (${formData.senderEmail || 'No email provided'})`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', senderEmail: '', message: '' });
    }, 4000);
  };

  const socials = [
    { name: 'GitHub', url: 'https://github.com/Harsha-Vardhan96/', icon: GithubIcon, handle: '@Harsha-Vardhan96' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harsha-vardhan-menda-60bb37345/', icon: LinkedinIcon, handle: 'in/harsha-vardhan-menda' },
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
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
          {/* Ambient Lighting background inside card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Open for full-stack software development roles, projects & collaborations.
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-sans">
              Whether you are looking to build full-stack web applications with Spring Boot & React, integrate AI capabilities, or collaborate on software projects — feel free to send a message directly.
            </p>
          </div>

          {/* Email & Message Action Banner */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">DIRECT EMAIL</span>
                <span className="text-sm sm:text-base font-mono text-white font-medium truncate block">{email}</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Direct Mailto Message Me Button */}
              <a
                href={`mailto:${email}?subject=Inquiry%20from%20Portfolio`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shrink-0 shadow-lg shadow-white/10"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Message Me</span>
              </a>

              {/* Toggle Inline Quick Form */}
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.07] hover:bg-white/15 border border-white/10 text-white font-medium text-xs transition-all cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-neutral-300" />
                <span>{showForm ? 'Close Form' : 'Quick Message'}</span>
              </button>

              {/* Copy Address Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-all cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Message Form (60fps GPU Hardware Accelerated) */}
          <div
            className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform ${
              showForm ? 'grid-rows-[1fr] opacity-100 pointer-events-auto' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 transform-gpu transition-all duration-300"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send a Direct Message</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">Opens your default email client</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-sans transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Your Email</label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-sans transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Hi Harsha, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 font-sans resize-none transition-colors"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-neutral-400 font-sans">
                    {submitted ? 'Opening email client...' : 'Ready to send message'}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 active:scale-95 cursor-pointer shadow-lg"
                  >
                    {submitted ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-black" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
