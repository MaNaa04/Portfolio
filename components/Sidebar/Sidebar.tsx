"use client";

import { FileText, Mail, Trophy, Star, Award, Zap, X, Search, Download, ExternalLink, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Sidebar() {
  const roles = ["Software Developer", "Backend Engineer", "AI Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const achievements = [
    {
      year: "2026",
      title: "1st Place at JOSH Hackathon",
      description: "Secured 1st Place at JOSH Softwares Hackathon’26.",
      icon: <Trophy size={14} />,
    },
    {
      year: "2025",
      title: "Top 100 — Google genAI Exchange",
      description: "Ranked Top 100 in Google’s genAI Exchange Program hackathon’25.",
      icon: <Star size={14} />,
    },
    {
      year: "2025",
      title: "Rank 44 — Bajaj HackRx’25",
      description: "Rank 44 by accuracy in Bajaj Finserv HackRx’25 hackathon, out of 10000+ teams.",
      icon: <Zap size={14} />,
    },
    {
      year: "2018",
      title: "NMMS Scholarship",
      description: "Awarded NMMS Scholarship for academic excellence at national level.",
      icon: <Award size={14} />,
    },
  ];

  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  useEffect(() => {
    if (selectedAchievement) {
      const timer = setTimeout(() => {
        setSelectedAchievement(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedAchievement]);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <GithubIcon />,
      href: "https://github.com/MaNaa04",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/manas-pawar04/",
      label: "LinkedIn",
    },
    {
      icon: <FileText size={16} />,
      href: "/ManasPawar_CV.pdf",
      label: "Resume",
    },
    {
      icon: <Mail size={16} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=pawarmanas8@gmail.com",
      label: "Email",
    },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#222222]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg?v=1" alt="Manas Pawar" className="w-full h-full object-cover" />
          </div>
          <span className="font-outfit font-medium text-[#E5E5E5]">Manas Pawar</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-1 text-[#A3A3A3] hover:text-[#E5E5E5] transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Fixed Sidebar Drawer */}
      <aside className={`fixed left-0 top-0 w-[280px] sm:w-[320px] h-screen bg-[#0A0A0A] lg:bg-black/40 lg:backdrop-blur-md flex flex-col overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col flex-1 px-8 pt-8">
        {/* Avatar + Identity */}
        <div className="mb-6">
          {/* Avatar */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border border-[#222222] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/profile.jpg?v=1" 
              alt="Manas Pawar"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-outfit font-semibold text-[26px] leading-8 text-[#E5E5E5] mb-2">
            Manas Pawar
          </h1>

          {/* Title */}
          <div className="flex items-center gap-2 mb-1 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm tracking-wide text-[#FF5C00] font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[#525252]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="5" r="2.5" stroke="#525252" strokeWidth="1"/>
                <path d="M6 1C3.79 1 2 2.79 2 5c0 2.76 4 7 4 7s4-4.24 4-7c0-2.21-1.79-4-4-4z" stroke="#525252" strokeWidth="1" fill="none"/>
              </svg>
            </span>
            <span className="font-outfit text-sm text-[#525252]">Pune, India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] ml-1" title="Available" />
          </div>
        </div>

        {/* Achievements Widget 3D */}
        <div 
          className="mb-8 h-[60px] relative w-full overflow-hidden"
          style={{ 
            perspective: "1000px",
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: [0, -360] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            {achievements.map((ach, idx) => {
              const angle = idx * 90;
              return (
                <div 
                  key={ach.title}
                  onClick={() => setSelectedAchievement(ach)}
                  className="absolute inset-0 flex items-center gap-3 px-2 py-1 bg-transparent w-[300px]"
                  style={{ 
                    transform: `rotateY(${angle}deg) translateZ(150px)`,
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="shrink-0 w-8 h-8 rounded border border-[#222222] bg-[#1a1a1a] flex items-center justify-center text-[#FF5C00]">
                    {ach.icon}
                  </div>
                  <div className="min-w-0 flex flex-col justify-center w-[150px]">
                    <p className="font-mono text-[9px] text-[#525252] tracking-widest uppercase mb-0.5">
                      {ach.year}
                    </p>
                    <h3 className="font-outfit font-medium text-xs text-[#E5E5E5] leading-snug truncate">
                      {ach.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mb-auto">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.label === "Resume" ? "#" : link.href}
              aria-label={link.label}
              onClick={(e) => {
                if (link.label === "Resume") {
                  e.preventDefault();
                  setShowResumeModal(true);
                }
              }}
              target={link.label !== "Resume" && (link.href.startsWith("http") || link.href.startsWith("/")) ? "_blank" : undefined}
              rel={link.label !== "Resume" && (link.href.startsWith("http") || link.href.startsWith("/")) ? "noopener noreferrer" : undefined}
              className="p-1 flex items-center justify-center text-[#525252] hover:text-[#E5E5E5] hover:-translate-y-0.5 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="px-8 pb-8 pt-6">
        <button
          onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
          className="mb-8 w-full flex items-center justify-between bg-[#111111] border border-[#222222] rounded-lg px-3 py-2 text-[#525252] hover:text-[#E5E5E5] hover:border-[#333333] transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Search size={14} />
            <span className="font-outfit text-xs">Command Menu</span>
          </div>
          <span className="font-mono text-[9px] bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#222222] group-hover:border-[#333333] transition-colors uppercase tracking-wider">
            Ctrl K
          </span>
        </button>

        <ul className="space-y-7">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-2 text-[#525252] hover:text-[#E5E5E5] transition-colors duration-200 font-outfit text-sm group"
              >
                <span className="font-mono text-[#FF5C00] text-sm group-hover:text-[#FF5C00]">{"//"}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </aside>

      {/* Achievement Toast */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none px-4 w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-[#111111]/95 backdrop-blur-md border border-[#222222] rounded-xl p-4 shadow-2xl flex items-start gap-4 pointer-events-auto"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg border border-[#222222] bg-[#1a1a1a] flex items-center justify-center text-[#FF5C00]">
                {selectedAchievement.icon}
              </div>
              
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-outfit font-medium text-sm text-[#E5E5E5] truncate">
                    {selectedAchievement.title}
                  </h3>
                  <p className="font-mono text-[9px] text-[#525252] tracking-widest uppercase shrink-0">
                    {selectedAchievement.year}
                  </p>
                </div>
                <p className="font-outfit text-xs text-[#A3A3A3] leading-relaxed line-clamp-2">
                  {selectedAchievement.description}
                </p>
              </div>

              <button 
                onClick={() => setSelectedAchievement(null)}
                className="shrink-0 text-[#525252] hover:text-[#E5E5E5] transition-colors p-1 -mt-1 -mr-1"
              >
                <X size={14} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowResumeModal(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl h-[90vh] bg-[#111111] border border-[#222222] rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#0A0A0A]">
                <div className="flex items-center gap-3">
                  <FileText className="text-[#FF5C00]" size={20} />
                  <h2 className="font-outfit font-medium text-lg text-[#E5E5E5]">
                    ManasPawar_CV.pdf
                  </h2>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href="/ManasPawar_CV.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-[#A3A3A3] hover:text-[#E5E5E5] hover:bg-[#1a1a1a] rounded-lg transition-colors font-outfit text-sm"
                  >
                    <ExternalLink size={16} />
                    Open
                  </a>

                  <a 
                    href="/ManasPawar_CV.pdf" 
                    download 
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF5C00]/10 hover:bg-[#FF5C00]/20 text-[#FF5C00] rounded-lg transition-colors font-outfit text-sm"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  
                  <button 
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 text-[#525252] hover:text-[#E5E5E5] hover:bg-[#1a1a1a] rounded-lg transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-[#1a1a1a]">
                <iframe 
                  src="/ManasPawar_CV.pdf#toolbar=0" 
                  className="w-full h-full border-none"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
