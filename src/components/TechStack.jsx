import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layers, Database, Shield, Server, Sparkles, Wrench } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      name: 'Programming Languages',
      icon: Terminal,
      skills: [
        { name: 'Java', level: 'Advanced', detail: 'Object-oriented programming, Spring framework core, multi-threading' },
        { name: 'JavaScript', level: 'Advanced', detail: 'ES6+, async/await, DOM manipulation, React component state' },
        { name: 'C', level: 'Proficient', detail: 'Low-level memory management, pointers, structures & algorithms' },
        { name: 'HTML & CSS', level: 'Advanced', detail: 'Responsive design, semantic structure, CSS flexbox/grid layout' }
      ]
    },
    {
      name: 'Web Development & Frameworks',
      icon: Layers,
      skills: [
        { name: 'Spring & Spring Boot', level: 'Advanced', detail: 'RESTful API architecture, dependency injection, security, MVC' },
        { name: 'React.js', level: 'Advanced', detail: 'Hooks, state management, component lifecycles, Material-UI' },
        { name: 'Node.js', level: 'Proficient', detail: 'Backend JavaScript runtime, Express server API creation' },
        { name: 'Hibernate ORM', level: 'Proficient', detail: 'Entity mapping, JPA repository management, database persistence' }
      ]
    },
    {
      name: 'Databases, Cloud & DevOps',
      icon: Database,
      skills: [
        { name: 'MySQL & PostgreSQL', level: 'Advanced', detail: 'Relational database design, complex queries, indexing, joins' },
        { name: 'MongoDB', level: 'Proficient', detail: 'Document-based NoSQL database design & aggregation pipelines' },
        { name: 'Amazon Web Services (AWS)', level: 'Certified', detail: 'Cloud deployment, EC2, S3 bucket storage & server hosting' },
        { name: 'Docker', level: 'Proficient', detail: 'Containerization of Spring Boot & React services for deployment' }
      ]
    },
    {
      name: 'Developer Tools & Coursework',
      icon: Wrench,
      skills: [
        { name: 'VS Code, Eclipse & GitHub', level: 'Expert', detail: 'Git version control, code editing, debugging & team collaboration' },
        { name: 'Vercel', level: 'Advanced', detail: 'Frontend cloud hosting, continuous deployment & domain configuration' },
        { name: 'Data Structures & Algorithms', level: 'Core', detail: 'Arrays, Trees, Graphs, Sorting, Dynamic Programming & Analysis' },
        { name: 'CS Fundamentals', level: 'Core', detail: 'Operating Systems (OS), Database Systems (DBMS), Computer Networks (CN)' }
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
