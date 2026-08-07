import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Server } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full Stack', 'Spring Boot & React', 'AI Integration'];

  const projects = [
    {
      id: 'smart-tourism',
      title: 'Smart Tourism & Homestay Recommendation Platform',
      tagline: 'Connects travelers with homestay hosts and nearby tourist attractions with AI support',
      category: 'Spring Boot & React',
      year: '2025 – 2026',
      description: 'Developing a comprehensive web platform for tourists, hosts, admins, and local guides. Incorporates intelligent AI-assisted travel recommendations, seamless booking workflows, and dynamic destination discovery.',
      highlights: [
        'Developing a tourism platform connecting travelers with homestay hosts and nearby tourist attractions.',
        'Implemented role-based modules for Admin, Host, Tourist, and Local Guide to manage listings, bookings, and recommendations.',
        'Integrated an AI chatbot to assist tourists with homestay suggestions, travel queries, and local attraction recommendations.',
        'Designed responsive UI for searching homestays, booking stays, and exploring nearby tourism places.'
      ],
      tags: ['Spring Boot', 'React.js', 'MySQL', 'AI Chatbot', 'REST API', 'Hibernate'],
      codeSnippet: `// Spring Boot Controller for Homestay Booking & AI Chatbot Routing
@RestController
@RequestMapping("/api/v1/homestays")
public class HomestayController {

    @Autowired
    private HomestayService homestayService;

    @GetMapping("/recommendations")
    public ResponseEntity<List<Homestay>> getAIRecommendations(@RequestParam String location, @RequestParam String preferences) {
        return ResponseEntity.ok(homestayService.findMatches(location, preferences));
    }
}`,
      repoName: 'Harsha-Vardhan96/smart-tourism-platform',
      status: 'LIVE DEMO',
      githubUrl: 'https://github.com/Harsha-Vardhan96',
      liveUrl: 'https://github.com/Harsha-Vardhan96',
      featured: true,
      colSpan: 'md:col-span-2'
    },
    {
      id: 'edu-resource-library',
      title: 'Educational Resource Library',
      tagline: 'Searchable academic library platform for textbooks, research papers & study guides',
      category: 'Full Stack',
      year: '2024 – 2025',
      description: 'Built a full-stack educational hub enabling students and educators to upload, organize, search, and download academic materials with admin role access controls.',
      highlights: [
        'Built a web platform to organize and access educational resources like textbooks, research papers, and study guides.',
        'Developed a searchable system enabling students and educators to easily find and download materials.',
        'Implemented admin functionality for uploading resources, organizing materials, and managing user access.',
        'Designed an intuitive UI to improve resource discovery and learning accessibility.'
      ],
      tags: ['Spring Boot', 'React.js', 'MySQL', 'Node.js', 'Material-UI'],
      codeSnippet: `// Resource Search & Filter Endpoint
@GetMapping("/resources/search")
public ResponseEntity<Page<Resource>> searchResources(
    @RequestParam String query,
    @RequestParam(required = false) String category,
    Pageable pageable
) {
    return ResponseEntity.ok(resourceService.search(query, category, pageable));
}`,
      repoName: 'Harsha-Vardhan96/educational-resource-library',
      status: 'PROTOTYPE IN PROGRESS',
      githubUrl: 'https://github.com/Harsha-Vardhan96',
      liveUrl: 'https://github.com/Harsha-Vardhan96',
      featured: true,
      colSpan: 'md:col-span-1'
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
