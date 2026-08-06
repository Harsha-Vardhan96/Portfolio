import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  FileText, 
  Check, 
  ArrowUpRight, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  Database, 
  Layers,
  Activity,
  Award,
  BarChart2,
  Brain,
  CheckCircle2,
  Cloud,
  GitBranch,
  Layout,
  Server,
  Zap,
  Box,
  Eye
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenCommandPalette }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const emailAddress = 'harsha21.menda@gmail.com';

  // Smooth Apple-style mouse parallax interpolation
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Ultra-smooth lerp (linear interpolation) factor = 0.04 for zero jitter/lag
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // 30 Handcrafted Cards assigned to 3 explicit Depth Layers
  const canvasCards = [
    // --- LAYER 1: CLOSEST FOREGROUND CARDS ---
    {
      id: 1, layer: 1, layout: 'tech', title: 'React 19 Engine', subtitle: 'Concurrent Runtimes & Server Actions', extraDetail: 'Fiber Reconciler • Server Components', icon: Sparkles, tag: 'FRONTEND',
      x: '3%', y: '6%', rotate: '-4deg', duration: 28, delay: 0
    },
    {
      id: 3, layer: 1, layout: 'stat', statNumber: '650+', statLabel: 'LeetCode Solved', subtext: 'Top 0.5% Contest Rating (2180+)', extraDetail: 'Global Rank: #1,420 • Hard: 180+', icon: Award,
      x: '86%', y: '68%', rotate: '-3deg', duration: 24, delay: 2
    },
    {
      id: 7, layer: 1, layout: 'tech', title: 'Node.js & Express', subtitle: 'Event Loop & Non-Blocking I/O', extraDetail: 'Libuv worker threads & V8 JIT', icon: Server, tag: 'BACKEND',
      x: '18%', y: '14%', rotate: '-2deg', duration: 27, delay: 1
    },
    {
      id: 10, layer: 1, layout: 'code', filename: 'clean_arch.ts', code: 'type Result<T, E> = \n  | { ok: true; value: T }\n  | { ok: false; error: E };', extraDetail: 'Monadic Error Handling Pattern', tag: 'CLEAN CODE',
      x: '60%', y: '15%', rotate: '4deg', duration: 25, delay: 0
    },
    {
      id: 14, layer: 1, layout: 'stat', statNumber: '99.999%', statLabel: 'Database Availability', subtext: 'Multi-region replication & WAL streaming', extraDetail: 'Zero Data Loss SLA • Failover <3s', icon: Database,
      x: '8%', y: '64%', rotate: '5deg', duration: 26, delay: 4
    },
    {
      id: 18, layer: 1, layout: 'code', filename: 'ring_buffer.rs', code: 'pub fn lock_free_push(&self, item: T) {\n  let tail = self.tail.fetch_add(1);\n  self.slots[tail % N].write(item);\n}', extraDetail: 'Atomic Usize Ring Buffer', tag: 'RUST ENGINE',
      x: '75%', y: '28%', rotate: '2deg', duration: 25, delay: 1
    },
    {
      id: 22, layer: 1, layout: 'code', filename: 'mtls_config.go', code: 'tlsConfig := &tls.Config{\n  ClientAuth: tls.RequireAndVerifyClientCert,\n  MinVersion: tls.VersionTLS13,\n}', extraDetail: 'Strict Mutual TLS 1.3 Handshake', tag: 'SECURITY',
      x: '60%', y: '78%', rotate: '3deg', duration: 31, delay: 3
    },
    {
      id: 24, layer: 1, layout: 'stat', statNumber: '99.4%', statLabel: 'Test Suite Coverage', subtext: 'Unit, Integration & E2E Verification', extraDetail: '1,200+ Automated Tests Passed', icon: CheckCircle2,
      x: '16%', y: '74%', rotate: '4deg', duration: 26, delay: 5
    },
    {
      id: 27, layer: 1, layout: 'stat', statNumber: '100 / 100', statLabel: 'Lighthouse Performance', subtext: 'Zero Layout Shift & Fast Paint', extraDetail: 'FCP: 0.4s • LCP: 0.8s • CLS: 0.00', icon: Zap,
      x: '8%', y: '22%', rotate: '-4deg', duration: 25, delay: 0
    },
    {
      id: 30, layer: 1, layout: 'project', projectName: 'Synapse UI System', tagline: 'Zero-runtime Component Toolkit', status: 'v2.4 READY', extraDetail: 'GPU-Accelerated WebGL Primitives',
      x: '58%', y: '92%', rotate: '2deg', duration: 31, delay: 5
    },

    // --- LAYER 2: MIDGROUND CARDS ---
    {
      id: 2, layer: 2, layout: 'code', filename: 'UserController.java', code: '@RestController\n@RequestMapping("/api/v1")\npublic class UserEngine { ... }', extraDetail: 'Spring Boot 3.2 & Hibernate ORM', tag: 'SPRING BOOT',
      x: '72%', y: '5%', rotate: '3deg', duration: 32, delay: 1
    },
    {
      id: 4, layer: 2, layout: 'dashboard', title: 'AI LLM Router', metric: '98.6%', metricLabel: 'Semantic Cache Hit', graphData: [40, 65, 55, 80, 95, 98], extraDetail: 'Cosine Embedding Match <15ms',
      x: '5%', y: '80%', rotate: '4deg', duration: 29, delay: 3
    },
    {
      id: 6, layer: 2, layout: 'code', filename: 'db.aggregation.js', code: 'db.events.aggregate([\n  { $match: { status: "ACTIVE" } },\n  { $group: { _id: "$region", count: { $sum: 1 } } }\n])', extraDetail: 'Indexed Compound Query Pipeline', tag: 'MONGODB',
      x: '2%', y: '46%', rotate: '4deg', duration: 33, delay: 4
    },
    {
      id: 9, layer: 2, layout: 'graph', title: 'GitHub Contributions', value: '1,420 Commits', subtitle: 'Active Streak: 148 Days', graphBars: [6, 12, 18, 14, 22, 28, 24, 30, 26, 32], extraDetail: 'Top 1% Global Commit Velocity',
      x: '28%', y: '5%', rotate: '-5deg', duration: 31, delay: 3
    },
    {
      id: 12, layer: 2, layout: 'tech', title: 'Java 21 Virtual Threads', subtitle: 'Project Loom & High Concurrency', extraDetail: 'Millions of lightweight fibers', icon: Code2, tag: 'CORE JAVA',
      x: '46%', y: '90%', rotate: '3deg', duration: 28, delay: 2
    },
    {
      id: 16, layer: 2, layout: 'dashboard', title: 'Global Edge Latency', metric: '11.8ms', metricLabel: 'p99 SLA Target', graphData: [25, 22, 18, 15, 12, 11], extraDetail: '12 Geo-Distributed Edge Regions',
      x: '86%', y: '18%', rotate: '4deg', duration: 23, delay: 0
    },
    {
      id: 20, layer: 2, layout: 'stat', statNumber: '128', statLabel: 'Microservice Shards', subtext: 'Zero downtime rolling deployments', extraDetail: 'Kubernetes HPA Auto-scaler', icon: Layers,
      x: '84%', y: '84%', rotate: '6deg', duration: 28, delay: 2
    },
    {
      id: 21, layer: 2, layout: 'tech', title: 'PyTorch & Vector DB', subtitle: 'Embeddings & HNSW Vector Index', extraDetail: 'pgvector & Pinecone similarity', icon: Brain, tag: 'MACHINE LEARNING',
      x: '38%', y: '86%', rotate: '-4deg', duration: 27, delay: 0
    },
    {
      id: 25, layer: 2, layout: 'project', projectName: 'Apex AI Proxy', tagline: 'Semantic Prompt Cache Gateway', status: 'OPEN SOURCE', extraDetail: '48% API Cost Reduction',
      x: '76%', y: '62%', rotate: '-5deg', duration: 29, delay: 2
    },
    {
      id: 28, layer: 2, layout: 'cert', title: 'CKA Certified', subtitle: 'Kubernetes Administrator', badge: 'CERTIFICATION', extraDetail: 'Certified Admin ID: CKA-2025-992', icon: ShieldCheck,
      x: '78%', y: '92%', rotate: '5deg', duration: 22, delay: 3
    },

    // --- LAYER 3: DEEPEST BACKGROUND CARDS ---
    {
      id: 5, layer: 3, layout: 'cert', title: 'AWS Certified', subtitle: 'Solutions Architect Professional', badge: 'CLOUD ARCHITECT', extraDetail: 'Credential Verification Valid', icon: Cloud,
      x: '88%', y: '36%', rotate: '-5deg', duration: 26, delay: 0
    },
    {
      id: 8, layer: 3, layout: 'project', projectName: 'Hyperion Engine', tagline: '10M+ RPS Real-time Telemetry Stream', status: 'PRODUCTION LIVE', extraDetail: 'Sub-10ms Global State Sync',
      x: '68%', y: '85%', rotate: '2deg', duration: 30, delay: 2
    },
    {
      id: 11, layer: 3, layout: 'uispec', title: 'Glassmorphic Design Tokens', tokens: ['#070709', 'blur(24px)', 'border-1px'], extraDetail: 'Tailwind CSS v4 Engine', icon: Layout,
      x: '24%', y: '88%', rotate: '-4deg', duration: 34, delay: 5
    },
    {
      id: 13, layer: 3, layout: 'timeline', period: '2023 — PRESENT', role: 'Staff Software Engineer', company: 'CoreScale Systems', extraDetail: 'Leading 12+ Senior Engineers',
      x: '48%', y: '3%', rotate: '-2deg', duration: 29, delay: 1
    },
    {
      id: 15, layer: 3, layout: 'tech', title: 'Docker & Kubernetes', subtitle: 'Helm Charts & Microservices', extraDetail: 'Zero-Downtime Blue/Green Deployments', icon: Box, tag: 'DEVOPS',
      x: '82%', y: '50%', rotate: '-3deg', duration: 27, delay: 2
    },
    {
      id: 17, layer: 3, layout: 'tech', title: 'Data Structures & Alg.', subtitle: 'Dynamic Programming & Graph Theory', extraDetail: 'Optimized Time & Space Complexity', icon: Brain, tag: 'PROBLEM SOLVING',
      x: '2%', y: '30%', rotate: '-5deg', duration: 30, delay: 3
    },
    {
      id: 19, layer: 3, layout: 'timeline', period: 'LOCATION', role: 'San Francisco, CA', company: 'Open for Remote / Hybrid', extraDetail: 'PST / UTC Timezones',
      x: '14%', y: '36%', rotate: '-2deg', duration: 32, delay: 4
    },
    {
      id: 23, layer: 3, layout: 'timeline', period: '2021 — 2023', role: 'Senior Systems Engineer', company: 'Veloce Data Platforms', extraDetail: 'Saved $1.2M Annual Infrastructure',
      x: '68%', y: '48%', rotate: '-3deg', duration: 24, delay: 1
    },
    {
      id: 26, layer: 3, layout: 'tech', title: 'gRPC & REST APIs', subtitle: 'Protobuf Schemas & OpenAPI 3.0', extraDetail: 'Low-overhead Binary Protocols', icon: Server, tag: 'API DESIGN',
      x: '35%', y: '12%', rotate: '2deg', duration: 33, delay: 4
    },
    {
      id: 29, layer: 3, layout: 'tech', title: 'Trunk-Based Dev', subtitle: 'Automated CI/CD & Feature Flags', extraDetail: 'Continuous Integration Pipelines', icon: GitBranch, tag: 'DEVOPS',
      x: '3%', y: '92%', rotate: '-2deg', duration: 30, delay: 1
    }
  ];

  // Render helper for rendering each distinct visual layout
  const renderCardContent = (card, isHovered) => {
    return (
      <div className="relative">
        {/* Main layout render */}
        {(() => {
          switch (card.layout) {
            case 'tech': {
              const Icon = card.icon || Code2;
              return (
                <div className={`flex items-center gap-3 p-3 px-4 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/25 shadow-white/10' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white font-sans">{card.title}</span>
                      <span className="text-[9px] font-mono text-neutral-300 bg-white/[0.06] px-1.5 py-0.2 rounded border border-white/10 uppercase">{card.tag}</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 font-sans">{card.subtitle}</p>
                  </div>
                </div>
              );
            }

            case 'code':
              return (
                <div className={`p-3 px-3.5 rounded-xl border backdrop-blur-md text-left shadow-2xl space-y-1.5 min-w-[200px] transition-all duration-300 ${
                  isHovered ? 'bg-[#12121a] border-white/30 shadow-emerald-500/10' : 'bg-[#0c0c12]/80 border-white/[0.08]'
                }`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Terminal className="w-3 h-3" />
                      <span>{card.filename}</span>
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase">{card.tag}</span>
                  </div>
                  <pre className="font-mono text-[10px] text-neutral-200 leading-tight overflow-hidden">
                    <code>{card.code}</code>
                  </pre>
                </div>
              );

            case 'stat': {
              const Icon = card.icon || Award;
              return (
                <div className={`p-3.5 px-4 rounded-2xl border backdrop-blur-md text-left shadow-xl space-y-1 min-w-[170px] transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.025] border-white/[0.07]'
                }`}>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider">{card.statLabel}</span>
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white tracking-tight font-sans">{card.statNumber}</div>
                  <p className="text-[10px] text-neutral-400 font-sans">{card.subtext}</p>
                </div>
              );
            }

            case 'dashboard':
              return (
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-2 min-w-[180px] transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-300">
                    <span>{card.title}</span>
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-white font-sans">{card.metric}</span>
                    <span className="text-[10px] font-mono text-neutral-300">{card.metricLabel}</span>
                  </div>
                  <div className="flex items-end gap-1 h-5 pt-1">
                    {card.graphData.map((val, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-1 rounded-sm transition-colors ${isHovered ? 'bg-emerald-400' : 'bg-white/20'}`}
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              );

            case 'project':
              return (
                <div className={`p-3.5 px-4 rounded-xl border backdrop-blur-md text-left shadow-2xl space-y-1 min-w-[190px] transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.03] border-white/[0.08]'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">{card.status}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-colors ${isHovered ? 'text-white' : 'text-neutral-400'}`} />
                  </div>
                  <div className="text-xs font-bold text-white font-sans pt-0.5">{card.projectName}</div>
                  <p className="text-[10px] text-neutral-400 font-sans">{card.tagline}</p>
                </div>
              );

            case 'graph':
              return (
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-2 min-w-[180px] transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-300">
                    <span>{card.title}</span>
                    <BarChart2 className="w-3.5 h-3.5 text-neutral-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-sans">{card.value}</div>
                    <div className="text-[9px] text-neutral-400 font-mono">{card.subtitle}</div>
                  </div>
                  <div className="flex items-end gap-1 h-4">
                    {card.graphBars.map((b, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-1 rounded-sm transition-colors ${isHovered ? 'bg-emerald-300' : 'bg-emerald-400/50'}`}
                        style={{ height: `${(b / 32) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              );

            case 'cert': {
              const Icon = card.icon || Cloud;
              return (
                <div className={`flex items-center gap-3 p-3 px-4 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.025] border-white/[0.07]'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest block">{card.badge}</span>
                    <div className="text-xs font-bold text-white font-sans leading-none">{card.title}</div>
                    <p className="text-[10px] text-neutral-400 font-sans">{card.subtitle}</p>
                  </div>
                </div>
              );
            }

            case 'timeline':
              return (
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-0.5 transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <span className="text-[9px] font-mono text-neutral-300 block">{card.period}</span>
                  <div className="text-xs font-bold text-white font-sans">{card.role}</div>
                  <p className="text-[10px] text-neutral-400 font-sans">{card.company}</p>
                </div>
              );

            case 'uispec':
              return (
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-1.5 transition-all duration-300 ${
                  isHovered ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Layout className="w-3.5 h-3.5 text-neutral-300" />
                    <span>{card.title}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {card.tokens.map((tok, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-neutral-300 bg-white/[0.06] px-1.5 py-0.5 rounded border border-white/10">
                        {tok}
                      </span>
                    ))}
                  </div>
                </div>
              );

            default:
              return null;
          }
        })()}

        {/* Revealed Extra Detail on Hover */}
        {isHovered && card.extraDetail && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 p-1.5 px-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 text-left flex items-center justify-between gap-2 shadow-lg"
          >
            <span>{card.extraDetail}</span>
            <Eye className="w-3 h-3 text-emerald-400 shrink-0" />
          </motion.div>
        )}
      </div>
    );
  };

  // Parallax offsets for center card (max 2.2px)
  const centerParallaxX = mousePos.x * 2.2;
  const centerParallaxY = mousePos.y * 2.2;

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[720px] overflow-hidden bg-[#070709] flex items-center justify-center select-none"
    >
      {/* ==========================================
          LAYER 1: Infinite Creative Canvas (Background)
          ========================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Center Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.025] blur-[170px] pointer-events-none" />

        {/* 30 Floating Cards with Hover Interactivity & 3 Depth Layers */}
        {canvasCards.map((card) => {
          const isHovered = hoveredCardId === card.id;

          let layerOpacity = 0.70;
          let layerBlur = 'blur(0px)';
          let layerScale = 1.0;
          let depthMult = 1.1;

          if (card.layer === 1) {
            layerOpacity = 0.70;
            layerBlur = 'blur(0px)';
            layerScale = 1.0;
            depthMult = 1.1;
          } else if (card.layer === 2) {
            layerOpacity = 0.50;
            layerBlur = 'blur(2px)';
            layerScale = 0.95;
            depthMult = 0.7;
          } else if (card.layer === 3) {
            layerOpacity = 0.25;
            layerBlur = 'blur(5px)';
            layerScale = 0.88;
            depthMult = 0.35;
          }

          const parallaxX = mousePos.x * depthMult * 14;
          const parallaxY = mousePos.y * depthMult * 14;

          const baseFloatX = card.id % 2 === 0 ? 16 : -16;
          const baseFloatY = card.id % 3 === 0 ? -22 : 22;

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              initial={{ x: 0, y: 0 }}
              animate={
                isHovered
                  ? {
                      x: baseFloatX + parallaxX,
                      y: baseFloatY + parallaxY,
                      scale: layerScale * 1.08,
                      opacity: 0.98,
                      filter: 'blur(0px)',
                      zIndex: 40,
                    }
                  : {
                      x: [baseFloatX + parallaxX, -baseFloatX + parallaxX, baseFloatX + parallaxX],
                      y: [baseFloatY + parallaxY, -baseFloatY + parallaxY, baseFloatY + parallaxY],
                      scale: layerScale,
                      opacity: layerOpacity,
                      filter: layerBlur,
                      zIndex: 10,
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.3, ease: 'easeOut' }
                  : {
                      x: { duration: card.duration, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                      y: { duration: card.duration, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                      scale: { duration: 0.4 },
                      opacity: { duration: 0.4 },
                      filter: { duration: 0.4 },
                    }
              }
              style={{
                left: card.x,
                top: card.y,
                transform: `rotate(${isHovered ? '0deg' : card.rotate})`,
              }}
              className="absolute hidden md:block cursor-pointer pointer-events-auto"
            >
              {renderCardContent(card, isHovered)}
            </motion.div>
          );
        })}

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      {/* ==========================================
          LAYER 2: Visual Anchor — Single Center Dark Glass Card
          ========================================== */}
      <div className="relative z-10 w-full max-w-lg px-5 md:px-0 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(255, 255, 255, 0.28)',
            boxShadow: '0 50px 150px rgba(0, 0, 0, 0.95), inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.08)',
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: centerParallaxX,
            y: [centerParallaxY, centerParallaxY - 6, centerParallaxY],
            borderColor: [
              'rgba(255, 255, 255, 0.08)',
              'rgba(255, 255, 255, 0.16)',
              'rgba(255, 255, 255, 0.08)',
            ],
            boxShadow: [
              '0 35px 120px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 0 40px rgba(255, 255, 255, 0.02)',
              '0 40px 130px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.22), 0 0 65px rgba(255, 255, 255, 0.05)',
              '0 35px 120px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 0 40px rgba(255, 255, 255, 0.02)',
            ],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            borderColor: {
              duration: 0.4,
              ease: 'easeInOut',
            },
            boxShadow: {
              duration: 0.4,
              ease: 'easeInOut',
            },
            scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          }}
          className="relative w-full rounded-[26px] bg-[#0a0a0e]/80 backdrop-blur-2xl md:backdrop-blur-3xl border p-8 sm:p-10 text-center space-y-7 overflow-hidden select-none transition-all duration-300"
        >
          {/* Delicate Top Highlight Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* 1. Name: Large Elegant Serif */}
          <div className="space-y-2 pt-1">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Harsha Vardhan Menda
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
                alert("Downloading Harsha Vardhan Menda — Software Developer Resume (PDF)...");
              }}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.05] active:scale-[0.98] shadow-lg hover:shadow-white/20 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-black group-hover:rotate-6 transition-transform" />
              <span>Resume</span>
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 hover:border-white/25 text-white font-medium text-xs tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* 5. Social & Direct Email Row */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-center gap-5 text-neutral-400">
            {/* GitHub */}
            <a
              href="https://github.com/Harsha-Vardhan96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-white/[0.08] hover:scale-110 transition-all duration-300 cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harsha-vardhan-menda-60bb37345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-white/[0.08] hover:scale-110 transition-all duration-300 cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Email Direct Copy */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] hover:scale-105 transition-all duration-300 text-xs font-mono cursor-pointer"
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
