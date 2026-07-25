"use client";

import SectionHeading from "@/components/Common/SectionHeading";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

interface Project {
  name: string;
  status: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    name: "TruthLens",
    status: "AI Hallucination Detection",
    description:
      "Real-time AI hallucination detection system to verify AI-generated content across platforms with a Chrome Extension.",
    detailedDescription:
      "Designed a 5-layer backend pipeline for claim extraction, evidence retrieval, and LLM-based accuracy evaluation. Integrated Wikipedia & SerpAPI and an analytics dashboard for verification metrics, pipeline insights, and latency tracking.",
    tags: ["FastAPI", "LLMs", "Wikipedia", "SerpAPI"],
    githubUrl: "https://github.com/MaNaa04/AI-Hallucination-Risk-Assessment",
  },
  {
    name: "Codeon",
    status: "Repository Intelligence",
    description:
      "Real-time repository intelligence platform using Kafka to stream AI insights via SSE with a natural language query engine.",
    detailedDescription:
      "Architected a high-performance ingestion pipeline using JGit and GitHub APIs to analyze repositories at scale. Implemented Tree-sitter based function tracking and Redis caching to accelerate repository analysis and reduce LLM overhead.",
    tags: ["Spring Boot", "PostgreSQL", "Redis", "JGit", "Kafka"],
    githubUrl: "https://github.com/ssrade/Code_Archaeology_System",
  },
  {
    name: "Developer Portfolio",
    status: "Live",
    description:
      "A minimalist, high-performance developer portfolio featuring a space-themed dark UI and dynamic GitHub/LeetCode data integration.",
    detailedDescription:
      "Engineered with Next.js and Tailwind CSS for optimal performance. Implemented smooth Framer Motion animations, a fully mobile-responsive architecture, and a dynamic GitHub and LeetCode statistical heatmap integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/MaNaa04/Portfolio",
    liveUrl: "https://manas04.vercel.app",
  },
];

function StatusBadge({ status }: { status: string }) {
  const isProduction = status.includes("Production") || status.includes("Live");
  const isWIP = status.includes("WIP");
  const isOpen = status.includes("Open");

  return (
    <span
      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
        isProduction
          ? "text-[#22c55e] border-[#22c55e]/30 bg-[#22c55e]/10"
          : isWIP
          ? "text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/10"
          : isOpen
          ? "text-[#3b82f6] border-[#3b82f6]/30 bg-[#3b82f6]/10"
          : "text-[#525252] border-[#333333] bg-[#1a1a1a]"
      }`}
    >
      {status}
    </span>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#111111] border border-[#222222] rounded-xl p-6 flex flex-col gap-4 hover:border-[#333333] hover:bg-[#151515] transition-all duration-200 group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <h3 className="font-outfit font-semibold text-base text-[#E5E5E5] group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 flex items-center justify-center rounded border border-[#333333] text-[#525252] hover:text-[#E5E5E5] hover:border-[#555555] transition-all"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-outfit text-sm text-[#A3A3A3] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] text-[#A3A3A3] bg-[#1a1a1a] border border-[#333333] rounded px-2 py-0.5 hover:text-[#FF5C00] hover:border-[#FF5C00]/30 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading number="04" title="Selected Builds" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.name} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-[#111111] border border-[#222222] rounded-xl p-8 shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-[#525252] hover:text-[#E5E5E5] transition-colors"
              >
                <X size={16} />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#FF5C00]"><GithubIcon size={18} /></span>
                <h3 className="font-outfit font-medium text-2xl text-[#E5E5E5]">
                  {selectedProject.name}
                </h3>
              </div>
              
              <div className="mb-6">
                <StatusBadge status={selectedProject.status} />
              </div>
              
              <div className="my-6">
                <p className="font-outfit text-sm text-[#A3A3A3] leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#A3A3A3] bg-[#1a1a1a] border border-[#333333] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-[#222222]">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} className="flex items-center gap-2 font-mono text-[11px] text-[#FF5C00] hover:text-[#E5E5E5] transition-colors uppercase tracking-widest">
                    <GithubIcon size={14} /> Source
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} className="flex items-center gap-2 font-mono text-[11px] text-[#FF5C00] hover:text-[#E5E5E5] transition-colors uppercase tracking-widest">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
