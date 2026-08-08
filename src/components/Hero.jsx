import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  Eye,
  Crown,
  Trophy,
  Film,
  Utensils,
  Compass,
  Coffee,
  Globe,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenCommandPalette }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [activeDiscoveryId, setActiveDiscoveryId] = useState(null);
  const emailAddress = 'harsha.menda21@gmail.com';
  const shouldReduceMotion = useReducedMotion();

  // Smooth Apple-style mouse parallax interpolation
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

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
  }, [shouldReduceMotion]);

  // Periodic natural discovery animation for Level 3 personality cards
  useEffect(() => {
    if (shouldReduceMotion) return;

    const discoveryIds = [9, 3, 6, 20, 27, 13, 21, 29];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveDiscoveryId(discoveryIds[currentIndex % discoveryIds.length]);
      currentIndex++;

      setTimeout(() => {
        setActiveDiscoveryId(null);
      }, 2500);
    }, 7000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // 26 Handcrafted Cards assigned across 8 Peripheral Zones & 3 Visual Importance Levels
  const canvasCards = [
    // --- LEVEL 1: PRIMARY SUPPORTING CARDS (Opacity 55-65%, Sharp, Moderate Parallax) ---
    {
      id: 1, level: 1, layout: 'tech', title: 'React.js & Tailwind', subtitle: 'Modern UI & Responsive State', extraDetail: 'Component Architecture & Custom Hooks', icon: Sparkles, tag: 'FRONTEND',
      x: '3%', y: '11%', rotate: '-2deg', duration: 32, delay: 0
    },
    {
      id: 7, level: 1, layout: 'tech', title: 'Spring Boot 3', subtitle: 'REST APIs & Dependency Injection', extraDetail: 'Spring MVC & Persistence Layer', icon: Server, tag: 'BACKEND',
      x: '74%', y: '15%', rotate: '-1deg', duration: 34, delay: 1
    },
    {
      id: 16, level: 1, layout: 'cert', title: 'Cisco Certified', subtitle: 'JavaScript & Linux Essentials', badge: 'VERIFIED CERT', extraDetail: 'Cisco Networking Academy Certification', icon: ShieldCheck,
      x: '2%', y: '28%', rotate: '-2deg', duration: 28, delay: 0
    },
    {
      id: 14, level: 1, layout: 'project', projectName: 'Smart Tourism Platform', tagline: 'AI Homestay & Local Attractions Hub', status: 'FEATURED PROJECT', extraDetail: 'Spring Boot + React.js + MySQL + AI Chatbot',
      x: '15%', y: '36%', rotate: '1deg', duration: 30, delay: 4
    },
    {
      id: 5, level: 1, layout: 'cert', title: 'AWS Hosting', subtitle: 'Cloud Infrastructure & S3 Buckets', badge: 'CLOUD HOSTING', extraDetail: 'EC2 & Static Storage Deployment', icon: Cloud,
      x: '73%', y: '36%', rotate: '-2deg', duration: 30, delay: 0
    },
    {
      id: 25, level: 1, layout: 'project', projectName: 'Multi-User Homestay Portal', tagline: 'Role-Based Modules for Admin & Host', status: 'IN DEVELOPMENT', extraDetail: 'Admin, Host, Tourist & Guide Workflows',
      x: '71%', y: '62%', rotate: '-1deg', duration: 32, delay: 2
    },
    {
      id: 24, level: 1, layout: 'timeline', period: '2024 — 2028', role: 'B.Tech Computer Science', company: 'KL University (CGPA: 9.5)', extraDetail: 'Top Academic Standing & Core CS Focus',
      x: '3%', y: '74%', rotate: '2deg', duration: 30, delay: 5
    },
    {
      id: 4, level: 1, layout: 'tech', title: 'AI Chatbot Integration', subtitle: 'Homestay & Travel Suggestions', extraDetail: 'Intelligent Query & Local Guidance', icon: Sparkles, tag: 'AI INTEGRATION',
      x: '50%', y: '90%', rotate: '1deg', duration: 33, delay: 3
    },
    {
      id: 30, level: 1, layout: 'project', projectName: 'Educational Resource Library', tagline: 'Searchable Academic Materials Hub', status: 'RECENT PROJECT', extraDetail: 'Textbooks, Research Papers & Study Guides',
      x: '70%', y: '84%', rotate: '1deg', duration: 35, delay: 5
    },

    // --- LEVEL 2: BACKGROUND CODE & ATMOSPHERE CARDS (Opacity 20-30%, Blurred, Atmospheric) ---
    {
      id: 10, level: 2, layout: 'code', filename: 'HomestayController.java', code: '@GetMapping("/recommendations")\npublic ResponseEntity<List<Homestay>> getMatches(\n  @RequestParam String location\n) { return ResponseEntity.ok(...); }', extraDetail: 'AI-Assisted Tourism Recommendations', tag: 'SPRING BOOT',
      x: '28%', y: '10%', rotate: '-1deg', duration: 36, delay: 0
    },
    {
      id: 18, level: 2, layout: 'code', filename: 'ResourceService.java', code: '@GetMapping("/resources/search")\npublic Page<Resource> searchResources(\n  @RequestParam String query,\n  Pageable pageable\n) { ... }', extraDetail: 'Academic Library Search Engine', tag: 'REST API',
      x: '70%', y: '10%', rotate: '2deg', duration: 38, delay: 1
    },
    {
      id: 2, level: 2, layout: 'code', filename: 'App.jsx', code: 'export default function App() {\n  return (\n    <Layout>\n      <Hero />\n      <Projects />\n    </Layout>\n  );\n}', extraDetail: 'Clean React Component Architecture', tag: 'REACT.JS',
      x: '86%', y: '9%', rotate: '1deg', duration: 36, delay: 1
    },
    {
      id: 22, level: 2, layout: 'code', filename: 'SecurityConfig.java', code: '@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) {\n  return http.authorizeHttpRequests(...).build();\n}', extraDetail: 'Role-Based Authentication (Admin/Host/User)', tag: 'SECURITY',
      x: '2%', y: '52%', rotate: '2deg', duration: 35, delay: 3
    },
    {
      id: 15, level: 2, layout: 'tech', title: 'Docker Containerization', subtitle: 'Spring Boot & React Services', extraDetail: 'Containerized Deployment Workflows', icon: Box, tag: 'DEVOPS',
      x: '86%', y: '50%', rotate: '-1deg', duration: 34, delay: 2
    },
    {
      id: 26, level: 2, layout: 'tech', title: 'Node.js & Express API', subtitle: 'Asynchronous Web Services', extraDetail: 'REST Endpoints & Event Loop', icon: Server, tag: 'BACKEND',
      x: '56%', y: '10%', rotate: '1deg', duration: 37, delay: 4
    },
    {
      id: 11, level: 2, layout: 'uispec', title: 'Glassmorphic Design Tokens', tokens: ['#070709', 'Playfair Display', 'Plus Jakarta'], extraDetail: 'Custom Dark Mode Tokens & Layouts', icon: Layout,
      x: '62%', y: '86%', rotate: '-2deg', duration: 40, delay: 5
    },
    {
      id: 17, level: 2, layout: 'tech', title: 'CS Fundamentals', subtitle: 'OS, DBMS, Networks & OOP', extraDetail: 'Core Engineering Curriculum', icon: Brain, tag: 'FUNDAMENTALS',
      x: '3%', y: '88%', rotate: '-1deg', duration: 38, delay: 3
    },
    {
      id: 28, level: 2, layout: 'cert', title: 'Coursera Certifications', subtitle: 'Algorithms, OS & Web Architecture', badge: 'SPECIALIZATION', extraDetail: 'Verified CS Coursework Certificates', icon: Award,
      x: '76%', y: '92%', rotate: '-1deg', duration: 32, delay: 3
    },

    // --- LEVEL 3: PERSONALITY & DISCOVERY CARDS (Subtle Idle, Discovery Pulse Animation) ---
    {
      id: 9, level: 3, layout: 'tech', title: 'Movies & Cinema', subtitle: 'Sci-Fi, Thrillers & Film Aesthetics', extraDetail: 'Storytelling & Cinema Aesthetics', icon: Film, tag: 'CINEMA',
      x: '17%', y: '16%', rotate: '2deg', duration: 32, delay: 3
    },
    {
      id: 3, level: 3, layout: 'tech', title: 'Chess & Strategy', subtitle: 'Tactical Thinking & Openings', extraDetail: 'Tactical Puzzles & Endgames', icon: Crown, tag: 'HOBBY',
      x: '85%', y: '28%', rotate: '-2deg', duration: 31, delay: 2
    },
    {
      id: 6, level: 3, layout: 'tech', title: 'Football Enthusiast', subtitle: 'Matches & Team Strategy', extraDetail: 'Weekend Matches & Competitive Spirit', icon: Trophy, tag: 'SPORTS',
      x: '15%', y: '64%', rotate: '-1deg', duration: 35, delay: 4
    },
    {
      id: 20, level: 3, layout: 'tech', title: 'Culinary Explorer', subtitle: 'Local Flavors & Street Food', extraDetail: 'Exploring Regional Cuisines & Coffee', icon: Utensils, tag: 'FOODIE',
      x: '85%', y: '76%', rotate: '2deg', duration: 33, delay: 2
    },
    {
      id: 27, level: 3, layout: 'tech', title: 'Travel & Exploring', subtitle: 'Scenic Places & Homestays', extraDetail: 'Discovering Culture, Food & Cities', icon: Compass, tag: 'WANDERLUST',
      x: '16%', y: '86%', rotate: '-2deg', duration: 34, delay: 0
    },
    {
      id: 13, level: 3, layout: 'tech', title: 'Coffee & Code', subtitle: 'Late Night Builds & Espresso', extraDetail: 'Fueled by Curiosity & Caffeine', icon: Coffee, tag: 'RITUAL',
      x: '40%', y: '9%', rotate: '-1deg', duration: 33, delay: 1
    },
    {
      id: 21, level: 3, layout: 'tech', title: 'Currently Learning', subtitle: 'Cloud Native & Microservices', extraDetail: 'Expanding Backend Infrastructure Skills', icon: Brain, tag: 'CURRENT FOCUS',
      x: '34%', y: '88%', rotate: '-1deg', duration: 31, delay: 0
    },
    {
      id: 29, level: 3, layout: 'tech', title: 'Engineering Principles', subtitle: 'Determinism & Modular Design', extraDetail: 'Clean Architecture & Type Safety', icon: ShieldCheck, tag: 'PRINCIPLES',
      x: '86%', y: '90%', rotate: '1deg', duration: 36, delay: 1
    }
  ];

  // Render helper for rendering each distinct visual layout
  const renderCardContent = (card, isHighlighted) => {
    return (
      <div className="relative">
        {/* Main layout render */}
        {(() => {
          switch (card.layout) {
            case 'tech': {
              const Icon = card.icon || Code2;
              return (
                <div className={`flex items-center gap-3 p-3 px-4 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-500 ${
                  isHighlighted ? 'bg-white/[0.09] border-white/30 shadow-white/10' : 'bg-white/[0.02] border-white/[0.06]'
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
                <div className={`p-3 px-3.5 rounded-xl border backdrop-blur-md text-left shadow-2xl space-y-1.5 min-w-[200px] transition-all duration-500 ${
                  isHighlighted ? 'bg-[#12121a] border-white/30 shadow-emerald-500/10' : 'bg-[#0a0a0f]/75 border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-emerald-400/90 font-semibold">
                      <Terminal className="w-3 h-3" />
                      <span>{card.filename}</span>
                    </span>
                    <span className="text-[9px] text-neutral-500 uppercase">{card.tag}</span>
                  </div>
                  <pre className="font-mono text-[10px] text-neutral-300 leading-tight overflow-hidden opacity-90">
                    <code>{card.code}</code>
                  </pre>
                </div>
              );

            case 'project':
              return (
                <div className={`p-3.5 px-4 rounded-xl border backdrop-blur-md text-left shadow-2xl space-y-1 min-w-[190px] transition-all duration-500 ${
                  isHighlighted ? 'bg-white/[0.09] border-white/35' : 'bg-white/[0.03] border-white/[0.08]'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">{card.status}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-colors ${isHighlighted ? 'text-white' : 'text-neutral-400'}`} />
                  </div>
                  <div className="text-xs font-bold text-white font-sans pt-0.5">{card.projectName}</div>
                  <p className="text-[10px] text-neutral-400 font-sans">{card.tagline}</p>
                </div>
              );

            case 'cert': {
              const Icon = card.icon || Cloud;
              return (
                <div className={`flex items-center gap-3 p-3 px-4 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-500 ${
                  isHighlighted ? 'bg-white/[0.09] border-white/30' : 'bg-white/[0.025] border-white/[0.07]'
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
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-0.5 transition-all duration-500 ${
                  isHighlighted ? 'bg-white/[0.09] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <span className="text-[9px] font-mono text-neutral-300 block">{card.period}</span>
                  <div className="text-xs font-bold text-white font-sans">{card.role}</div>
                  <p className="text-[10px] text-neutral-400 font-sans">{card.company}</p>
                </div>
              );

            case 'uispec':
              return (
                <div className={`p-3 px-4 rounded-xl border backdrop-blur-md text-left shadow-xl space-y-1.5 transition-all duration-500 ${
                  isHighlighted ? 'bg-white/[0.09] border-white/30' : 'bg-white/[0.02] border-white/[0.06]'
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

        {/* Revealed Extra Detail on Hover or Discovery */}
        {isHighlighted && card.extraDetail && (
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

  // Ultra-stable parallax offset for center card (max 1.5px)
  const centerParallaxX = mousePos.x * 1.5;
  const centerParallaxY = mousePos.y * 1.5;

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

        {/* 26 Floating Cards across 8 Peripheral Zones & 3 Depth Hierarchy Levels */}
        {canvasCards.map((card) => {
          const isHovered = hoveredCardId === card.id;
          const isDiscovered = activeDiscoveryId === card.id;

          let idleOpacity = 0.55;
          let idleScale = 1.0;
          let depthMult = 0.5;
          let baseFilter = 'blur(0px)';

          if (card.level === 1) {
            // Level 1: Primary Supporting Cards (Clear, Opacity 55-65%, Minimal Blur)
            idleOpacity = 0.58;
            idleScale = 1.0;
            depthMult = 0.6;
            baseFilter = 'blur(0px)';
          } else if (card.level === 2) {
            // Level 2: Background Code / Atmosphere Cards (Opacity 18-28%, Blurred, Lower Saturation)
            idleOpacity = 0.22;
            idleScale = 0.92;
            depthMult = 0.2;
            baseFilter = 'blur(4px) saturate(0.7)';
          } else if (card.level === 3) {
            // Level 3: Personality / Discovery Cards (Idle Opacity 40%, 2px Blur, Discovery Pulse)
            idleOpacity = 0.40;
            idleScale = 0.95;
            depthMult = 0.4;
            baseFilter = 'blur(2px)';
          }

          const parallaxX = shouldReduceMotion ? 0 : mousePos.x * depthMult * 10;
          const parallaxY = shouldReduceMotion ? 0 : mousePos.y * depthMult * 10;

          const baseFloatX = card.id % 2 === 0 ? 12 : -12;
          const baseFloatY = card.id % 3 === 0 ? -16 : 16;

          let animateState;
          let transitionState;

          if (isHovered) {
            animateState = {
              x: baseFloatX + parallaxX,
              y: baseFloatY + parallaxY,
              scale: idleScale * 1.06,
              opacity: 0.96,
              filter: 'blur(0px) saturate(1.1)',
              zIndex: 40,
            };
            transitionState = { duration: 0.3, ease: 'easeOut' };
          } else if (isDiscovered) {
            animateState = {
              x: baseFloatX + parallaxX,
              y: baseFloatY + parallaxY,
              scale: idleScale * 1.04,
              opacity: 0.82,
              filter: 'blur(0px) saturate(1.05)',
              zIndex: 30,
            };
            transitionState = { duration: 1.5, ease: 'easeInOut' };
          } else {
            animateState = {
              x: shouldReduceMotion ? baseFloatX : [baseFloatX + parallaxX, -baseFloatX + parallaxX],
              y: shouldReduceMotion ? baseFloatY : [baseFloatY + parallaxY, -baseFloatY + parallaxY],
              scale: idleScale,
              opacity: idleOpacity,
              filter: baseFilter,
              zIndex: card.level === 1 ? 20 : card.level === 3 ? 15 : 10,
            };
            transitionState = {
              x: { duration: card.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: card.delay },
              y: { duration: card.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: card.delay },
              scale: { duration: 1.2, ease: 'easeInOut' },
              opacity: { duration: 1.2, ease: 'easeInOut' },
              filter: { duration: 1.2, ease: 'easeInOut' },
            };
          }

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              initial={{ x: 0, y: 0 }}
              animate={animateState}
              transition={transitionState}
              style={{
                left: card.x,
                top: card.y,
                transform: `rotate(${isHovered ? '0deg' : card.rotate})`,
              }}
              className="absolute hidden md:block cursor-pointer pointer-events-auto gpu-accelerated"
            >
              {renderCardContent(card, isHovered || isDiscovered)}
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
          className="relative w-full rounded-[26px] bg-[#0a0a0e]/80 backdrop-blur-2xl md:backdrop-blur-3xl border p-8 sm:p-10 text-center space-y-7 overflow-hidden select-none transition-all duration-300 gpu-accelerated glass-reflection"
        >
          {/* Delicate Top Highlight Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* 1. Name: Large Elegant Serif */}
          <div className="space-y-2 pt-1">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight animated-name-gradient"
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
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-normal leading-relaxed max-w-md mx-auto">
            B.Tech Computer Science Student (CGPA: 9.5) building full-stack platforms with Spring Boot, React.js, MySQL, AI Chatbots & Cloud Infrastructure.
          </p>

          {/* 4. Action Buttons: Rounded, Premium Hover Animations */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {/* Resume Button */}
            <a
              href="/Harsha_Vardhan_Menda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Harsha_Vardhan_Menda_Resume.pdf"
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
