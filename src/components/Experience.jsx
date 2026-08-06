import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Staff Software Engineer',
      company: 'CoreScale Systems',
      period: '2023 — Present',
      location: 'San Francisco, CA (Hybrid)',
      description: 'Lead architect for the global edge telemetry & consensus platform processing over 10B+ daily requests.',
      achievements: [
        'Architected Rust-based lock-free ring buffer reducing memory consumption by 35% across 4,000 edge nodes.',
        'Mentored 12+ senior engineers across distributed systems and cloud infrastructure disciplines.',
        'Reduced p99 API response latency from 68ms to 14ms through eBPF networking optimizations.'
      ],
      skills: ['Rust', 'Go', 'eBPF', 'Kubernetes', 'Raft', 'Prometheus']
    },
    {
      role: 'Senior Systems Engineer',
      company: 'Veloce Data Platforms',
      period: '2021 — 2023',
      location: 'New York, NY (Remote)',
      description: 'Designed low-latency analytical query engines and Apache Arrow-based vectorized data pipeline compilers.',
      achievements: [
        'Spearheaded the migration of legacy Python ETL engines to compiled SIMD-accelerated C++/Rust pipelines.',
        'Decreased cloud infrastructure expenditures by $1.2M annually while doubling data ingestion throughput.',
        'Authored open-source columnar parser libraries adopted by over 20,000 active developers.'
      ],
      skills: ['C++', 'Apache Arrow', 'ClickHouse', 'gRPC', 'AWS']
    },
    {
      role: 'Full Stack Infrastructure Lead',
      company: 'Aura Labs',
      period: '2018 — 2021',
      location: 'Austin, TX',
      description: 'Engineered high-performance React frontends, real-time WebSocket state synchronizers, and microservice APIs.',
      achievements: [
        'Built real-time collaborative workspace canvas engine handling 100+ concurrent user edits with zero lag.',
        'Pioneered zero-bundle-bloat CSS-in-JS framework across 15 internal enterprise applications.'
      ],
      skills: ['TypeScript', 'React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>03 / Career & Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            History of impact.
          </h2>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070709] border-2 border-neutral-400 group-hover:border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/[0.06] hover:border-white/15 transition-all space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-xs text-neutral-500 font-mono">{exp.location}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 w-fit">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-mono text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
