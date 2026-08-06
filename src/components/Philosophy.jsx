import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, ShieldAlert, Zap, Copy, Check } from 'lucide-react';

export default function Philosophy() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippets = [
    {
      title: 'Distributed Lease Lock (Rust)',
      fileName: 'consensus/lease.rs',
      code: `// Atomically acquire lease with monotonic clock verification
pub async fn acquire_lease(&self, ttl: Duration) -> Result<LeaseToken, LeaseError> {
    let now = Instant::now();
    let token = LeaseToken::generate();
    
    let res = self.kv_store
        .compare_and_swap("leases/primary", None, Some(&token), ttl)
        .await?;
        
    if res.is_ok() && now.elapsed() < ttl {
        Ok(token)
    } else {
        Err(LeaseError::Preempted)
    }
}`
    },
    {
      title: 'Vectorized SIMD Aggregator (C++)',
      fileName: 'simd/aggregator.cpp',
      code: `// AVX-512 aligned floating-point sum over 64-byte strides
void simd_sum_64(const float* __restrict src, float* __restrict dst, size_t count) {
    __m512 accum = _mm512_setzero_ps();
    for (size_t i = 0; i < count; i += 16) {
        __m512 v = _mm512_loadu_ps(src + i);
        accum = _mm512_add_ps(accum, v);
    }
    *dst = _mm512_reduce_add_ps(accum);
}`
    },
    {
      title: 'Resilient Micro-Batch Processor (Go)',
      fileName: 'pipeline/batcher.go',
      code: `// Flush buffer on ticker duration or max batch size capacity threshold
func (b *Batcher[T]) Start(ctx context.Context) {
    ticker := time.NewTicker(b.flushInterval)
    defer ticker.Stop()

    for {
        select {
        case item := <-b.inputChan:
            b.buffer = append(b.buffer, item)
            if len(b.buffer) >= b.maxCapacity {
                b.flush(ctx)
            }
        case <-ticker.C:
            if len(b.buffer) > 0 {
                b.flush(ctx)
            }
        case <-ctx.Done():
            return
        }
    }
}`
    }
  ];

  const copySnippet = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const principles = [
    {
      icon: Zap,
      title: 'Determinism Over Speculation',
      description: 'Predictable execution beats clever hacks. Code should be easy to reason about, statically typed, and verifiably deterministic.'
    },
    {
      icon: Cpu,
      title: 'Zero-Cost Abstractions',
      description: 'High-level elegance must not degrade low-level performance. Pay only for the resources and complexity you explicitly use.'
    },
    {
      icon: ShieldAlert,
      title: 'Resilient Failure Domains',
      description: 'Design systems under the immutable assumption that network partitions, hardware degradation, and external outages will happen.'
    },
    {
      icon: Terminal,
      title: 'Observability by Default',
      description: 'Metrics, structured traces, and latency distribution profiles are first-class engineering requirements, not afterthoughts.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>02 / Architecture & Engineering Principles</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Built for longevity & scale.
          </h2>
        </div>

        {/* 2-Column Section: Principles + Interactive Code Snippet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Principles Grid */}
          <div className="lg:col-span-6 space-y-4">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-xl border border-white/[0.06] space-y-2 group hover:border-white/15 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">{p.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans pl-10">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Interactive Code Viewer */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl space-y-0">
            {/* Snippet Tabs */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {snippets.map((snip, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveTab(sIdx)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === sIdx
                        ? 'bg-white/10 text-white font-medium border border-white/10'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {snip.fileName.split('/')[1]}
                  </button>
                ))}
              </div>

              <button
                onClick={copySnippet}
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 transition-colors cursor-pointer"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="font-mono text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Display Area */}
            <div className="p-5 bg-[#0a0a0d] overflow-x-auto">
              <div className="text-[11px] font-mono text-neutral-500 mb-3 flex items-center justify-between">
                <span>{snippets[activeTab].fileName}</span>
                <span className="text-[10px] text-emerald-400/80 uppercase">VERIFIED SPEC</span>
              </div>
              <pre className="font-mono text-xs text-neutral-300 leading-relaxed">
                <code>{snippets[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
