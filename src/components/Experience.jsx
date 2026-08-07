import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Code2 } from 'lucide-react';

export default function Experience() {
  const educationTimeline = [
    {
      role: 'Bachelor of Technology in Computer Science',
      institution: 'KL University',
      score: 'CGPA: 9.5',
      period: '2024 — 2028',
      location: 'Vijayawada, India',
      description: 'Pursuing undergraduate degree in Computer Science with a top academic standing of 9.5 CGPA. Focused on core software engineering, data structures, algorithms, full-stack web architectures, and AI systems.',
      achievements: [
        'Maintained exceptional 9.5 CGPA performance across all academic semesters.',
        'Developed end-to-end full stack platforms utilizing Spring Boot, React.js, and MySQL.',
        'Active coursework in OOP, Operating Systems, DSA, DBMS, and Computer Networks.'
      ],
      skills: ['Java', 'C', 'JavaScript', 'Spring Boot', 'React.js', 'MySQL', 'Data Structures']
    },
    {
      role: 'Intermediate Education (MPC)',
      institution: 'Narayana Junior College',
      score: 'Marks: 957 / 1000',
      period: '2022 — 2024',
      location: 'Visakhapatnam, India',
      description: 'Completed higher secondary education specializing in Mathematics, Physics, and Chemistry with outstanding distinction (95.7%).',
      achievements: [
        'Scored 957 out of 1000 total marks in state board examination.',
        'Consistently topped competitive mock tests in mathematical problem solving and logic.'
      ],
      skills: ['Mathematics', 'Physics', 'Problem Solving', 'Analytical Logic']
    },
    {
      role: 'Secondary School (CBSE Class X)',
      institution: 'Narayana High School',
      score: 'Marks: 414 / 500',
      period: '2021 — 2022',
      location: 'Visakhapatnam, India',
      description: 'Completed secondary education with CBSE board accreditation, building strong fundamentals in science and mathematics.',
      achievements: [
        'Secured 414 out of 500 total marks in CBSE Board examinations.',
        'Represented school in regional science & technology exhibitions.'
      ],
      skills: ['CBSE Curriculum', 'Science Fundamentals', 'Mathematics']
    }
  ];

  const certifications = [
    {
      issuer: 'Coursera',
      badge: 'Professional Specializations',
      topics: ['Design and Analysis of Algorithms', 'Operating Systems', 'FullStack Development', 'FrontEnd Web Development', 'Computer Networks', 'AIML (AI & Machine Learning)']
    },
    {
      issuer: 'Cisco',
      badge: 'Verified Certificates',
      topics: ['JavaScript Essentials', 'Linux Essentials', 'Artificial Intelligence and Machine Learning']
    }
  ];

  const codingPlatforms = [
    { name: 'CodeChef', link: 'https://www.codechef.com' },
    { name: 'LeetCode', link: 'https://leetcode.com' },
    { name: 'HackerRank', link: 'https://www.hackerrank.com' }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>03 / Academic Background & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Education & Certifications.
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Academic Background</span>
          </h3>

          <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
            {educationTimeline.map((item, idx) => (
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
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-white tracking-tight">{item.role}</h4>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                          {item.score}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 mt-1">
                        <span className="text-white">{item.institution}</span>
                        <span>•</span>
                        <span className="text-xs text-neutral-500 font-mono">{item.location}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 w-fit">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2.5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
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

        {/* Certifications & Coding Platforms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Certifications Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/[0.07] space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Certifications</h3>
                <span className="text-xs text-neutral-400">Industry & Academic Certifications</span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="glass-card p-4 rounded-xl border border-white/[0.04] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{cert.issuer}</span>
                    <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10">
                      {cert.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.topics.map((topic, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-sans text-neutral-300 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Platforms Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/[0.07] space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Coding Platforms</h3>
                  <span className="text-xs text-neutral-400">Competitive Programming & Problem Solving</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6">
                {codingPlatforms.map((platform, pIdx) => (
                  <a
                    key={pIdx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 rounded-xl border border-white/[0.06] hover:border-white/20 transition-all text-center space-y-2 group cursor-pointer"
                  >
                    <div className="w-10 h-10 mx-auto rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Code2 className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                    </div>
                    <div className="text-xs font-bold text-white font-mono tracking-wide">{platform.name}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-neutral-400 font-sans leading-relaxed">
              Actively solving algorithmic challenges on LeetCode, CodeChef, and HackerRank to master Data Structures, Algorithms, and System Optimization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
