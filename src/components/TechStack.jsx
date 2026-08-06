import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layers, Database, Shield, Server, Sparkles, Wrench } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      name: 'Languages & Core Systems',
      icon: Terminal,
      skills: [
        { name: 'Rust', level: 'Expert', detail: 'Systems programming, async Tokio, eBPF, memory safety' },
        { name: 'TypeScript', level: 'Expert', detail: 'Advanced type gymnastics, monorepos, strict AST transforms' },
        { name: 'Go (Golang)', level: 'Advanced', detail: 'Microservices, concurrent routines, gRPC proxies' },
        { name: 'C++20', level: 'Proficient', detail: 'SIMD vectorization, memory-aligned data structures' }
      ]
    },
    {
      name: 'Frontend & User Experience',
      icon: Layers,
      skills: [
        { name: 'React 19 & Next.js', level: 'Expert', detail: 'Server components, concurrent mode, custom hooks' },
        { name: 'Tailwind CSS v4', level: 'Expert', detail: 'Design tokens, zero-runtime CSS, dark theme engines' },
        { name: 'Framer Motion', level: 'Advanced', detail: 'Layout animations, gesture physics, micro-interactions' },
        { name: 'WebGL & Canvas', level: 'Proficient', detail: 'Shader programming, high-FPS canvas charts & graphs' }
      ]
    },
    {
      name: 'Distributed Data & Infrastructure',
      icon: Database,
      skills: [
        { name: 'PostgreSQL & Spanner', level: 'Expert', detail: 'Query optimization, connection pooling, sharding' },
        { name: 'Redis & Memory Stores', level: 'Expert', detail: 'Sliding window rate limiters, pub/sub, spatial indexes' },
        { name: 'Kafka & RabbitMQ', level: 'Advanced', detail: 'Event-driven streaming, log compaction, partition keys' },
        { name: 'Kubernetes & Docker', level: 'Advanced', detail: 'Helm charts, custom CRDs, autoscaling, isolation' }
      ]
    },
    {
      name: 'Tooling & Methodology',
      icon: Wrench,
      skills: [
        { name: 'Git & CI/CD', level: 'Expert', detail: 'GitHub Actions, automated release tags, trunk-based dev' },
        { name: 'Prometheus & Grafana', level: 'Expert', detail: 'SLO tracking, alertmanager rules, distributed tracing' },
        { name: 'OpenTelemetry', level: 'Advanced', detail: 'Span propagation, trace context injection, metrics' },
        { name: 'Security & Auth', level: 'Advanced', detail: 'OAuth2, OIDC, mTLS, zero-trust network boundaries' }
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>04 / Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Engineered stack.
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, cIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/[0.07] space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{cat.name}</h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="glass-card p-3.5 rounded-xl border border-white/[0.04] hover:border-white/10 transition-colors space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white font-sans">{skill.name}</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
