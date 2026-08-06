import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Server } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Systems & Infra', 'Full Stack', 'AI & DevTools'];

  const projects = [
    {
      id: 'hyperion',
      title: 'Hyperion Kernel',
      tagline: 'High-throughput real-time telemetry streaming engine',
      category: 'Systems & Infra',
      year: '2026',
      description: 'Distributed event processing engine designed for sub-10ms state replication across 12 global edge nodes. Features lock-free ring buffers and zero-copy memory allocation.',
      highlights: [
        'Sustained processing speed of 4.2 million events per second per cluster node',
        'Custom Rust memory allocators eliminating garbage collection pauses',
        'Built-in Raft consensus protocol optimized for geo-replicated topologies',
        'Integrated Prometheus metric exporters and real-time trace visualizers'
      ],
      tags: ['Rust', 'gRPC', 'Distributed Consensus', 'eBPF', 'Tokio'],
      codeSnippet: `// Ring buffer lock-free queue allocation
pub struct TelemetryBuffer<T, const N: usize> {
    head: AtomicUsize,
    tail: AtomicUsize,
    slots: [UnsafeCell<MaybeUninit<T>>; N],
}
impl<T, const N: usize> TelemetryBuffer<T, N> {
    pub fn push(&self, value: T) -> Result<(), OverflowError> { ... }
}`,
      repoName: 'hyperion-core/src/ring_buffer.rs',
      status: 'PRODUCTION v2.4.0',
      githubUrl: 'https://github.com',
      liveUrl: 'https://hyperion-telemetry.io',
      featured: true,
      colSpan: 'md:col-span-2'
    },
    {
      id: 'synapse-ui',
      title: 'Synapse Design System',
      tagline: 'Precision component toolkit & runtime engine for canvas UI',
      category: 'Full Stack',
      year: '2025',
      description: 'Zero-runtime CSS component framework with GPU-accelerated WebGL canvas primitives, accessible ARIA patterns, and seamless dark-mode tokens.',
      highlights: [
        'Sub-5KB core bundle size with zero external dependencies',
        'Tailwind v4 integration with automated token generation',
        'Full accessibility compliance (WCAG 2.1 AAA)',
        'Built-in keyboard layout navigation and focus rings'
      ],
      tags: ['TypeScript', 'React 19', 'WebGL', 'Tailwind CSS', 'Framer Motion'],
      codeSnippet: `export const GlassCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, blur = "md", ...props }, ref) => (
    <div ref={ref} className={cn("glass-card backdrop-blur-md border border-white/10", className)} />
  )
);`,
      repoName: 'synapse-ui/packages/core/src/Card.tsx',
      status: 'OPEN SOURCE',
      githubUrl: 'https://github.com',
      liveUrl: 'https://synapse-ui.dev',
      featured: false,
      colSpan: 'md:col-span-1'
    },
    {
      id: 'apex-ai',
      title: 'Apex Inference Proxy',
      tagline: 'Low-latency LLM routing & context cache layer',
      category: 'AI & DevTools',
      year: '2025',
      description: 'Intelligent AI gateway providing semantically cached prompt embeddings, automatic model fallback failover, and token consumption analytics.',
      highlights: [
        'Reduced LLM API overhead expenses by 48% via semantic caching',
        'Automatic failover routing between Claude 3.5 Sonnet and OpenAI o1',
        'Streaming SSE response parser with latency profiling',
        'Built-in rate limiting per tenant key with Redis sliding windows'
      ],
      tags: ['Go', 'Redis', 'Vector Search', 'OpenAI API', 'Docker'],
      codeSnippet: `func (p *Proxy) HandleInference(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    cachedResp, hit := p.semanticCache.Get(ctx, req.Embedding)
    if hit {
        w.Header().Set("X-Cache-Hit", "true")
        w.Write(cachedResp)
        return
    }
}`,
      repoName: 'apex-proxy/gateway/router.go',
      status: 'PRODUCTION',
      githubUrl: 'https://github.com',
      liveUrl: 'https://apex-infer.ai',
      featured: false,
      colSpan: 'md:col-span-1'
    },
    {
      id: 'nexus-db',
      title: 'Nexus Dataflow',
      tagline: 'Declarative SQL pipeline orchestrator for real-time analytics',
      category: 'Systems & Infra',
      year: '2024',
      description: 'Columnar memory pipeline execution framework. Compiles SQL AST transformations directly into optimized SIMD bytecode execution plans.',
      highlights: [
        'Vectorized query execution yielding 14x speedup over standard Python ETL',
        'Built-in Apache Arrow memory format interoperability',
        'Zero-downtime schema evolution and migration safety checks'
      ],
      tags: ['Rust', 'Apache Arrow', 'SQL Parser', 'BigQuery', 'DuckDB'],
      codeSnippet: `pub fn compile_ast_to_simd(ast: QueryAST) -> Result<ExecutionPlan, CompileError> {
    let vectorized_nodes = ast.optimize_vector_passes()?;
    Ok(ExecutionPlan::new(vectorized_nodes))
}`,
      repoName: 'nexus-flow/compiler/simd.rs',
      status: 'MAINTAINED',
      githubUrl: 'https://github.com',
      liveUrl: 'https://nexusdata.io',
      featured: true,
      colSpan: 'md:col-span-2'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>01 / Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Crafted with precision.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white/[0.03] p-1 rounded-xl border border-white/[0.06]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white/10 text-white shadow-sm border border-white/15'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className={`glass-card p-6 md:p-8 rounded-2xl border border-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group cursor-pointer ${project.colSpan}`}
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {project.year}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs font-mono text-neutral-400">{project.tagline}</p>
                  <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="pt-8 flex flex-wrap gap-2 items-center">
                {project.tags.slice(0, 4).map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-mono text-neutral-400 bg-white/[0.02] px-2.5 py-1 rounded-md border border-white/[0.05]">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[10px] font-mono text-neutral-500">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
