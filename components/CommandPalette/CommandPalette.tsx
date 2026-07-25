"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Briefcase, Code, User, GraduationCap, Mail } from "lucide-react";

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

type Action = {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  onSelect: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const actions: Action[] = [
    {
      id: "nav-about",
      title: "Go to About",
      icon: <User size={16} />,
      category: "Navigation",
      onSelect: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      icon: <Code size={16} />,
      category: "Navigation",
      onSelect: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      icon: <Briefcase size={16} />,
      category: "Navigation",
      onSelect: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-education",
      title: "Go to Education",
      icon: <GraduationCap size={16} />,
      category: "Navigation",
      onSelect: () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      icon: <Mail size={16} />,
      category: "Navigation",
      onSelect: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "link-github",
      title: "Open GitHub Profile",
      icon: <GithubIcon />,
      category: "External Links",
      onSelect: () => {
        window.open("https://github.com/MaNaa04", "_blank");
      },
    },
    {
      id: "link-linkedin",
      title: "Open LinkedIn Profile",
      icon: <LinkedInIcon />,
      category: "External Links",
      onSelect: () => {
        window.open("https://www.linkedin.com/in/manas-pawar04/", "_blank");
      },
    },
    {
      id: "action-email",
      title: "Copy Email Address",
      icon: <Mail size={16} />,
      category: "Actions",
      onSelect: () => {
        navigator.clipboard.writeText("pawarmanas8@gmail.com");
        alert("Email copied to clipboard!");
      },
    },
  ];

  const filteredActions = query
    ? actions.filter((action) =>
        action.title.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].onSelect();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-xl bg-[#0F0F0F] border border-[#222222] rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-[#222222]">
              <Search size={18} className="text-[#525252] mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="w-full bg-transparent outline-none font-outfit text-[#E5E5E5] placeholder-[#525252]"
              />
              <span className="font-mono text-[10px] text-[#525252] bg-[#1a1a1a] px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="px-4 py-8 text-center text-[#525252] font-outfit text-sm">
                  No commands found.
                </div>
              ) : (
                filteredActions.map((action, index) => (
                  <div
                    key={action.id}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => {
                      action.onSelect();
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                      index === selectedIndex
                        ? "bg-[#FF5C00]/10 text-[#FF5C00]"
                        : "text-[#A3A3A3] hover:bg-[#1a1a1a]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={index === selectedIndex ? "text-[#FF5C00]" : "text-[#525252]"}>
                        {action.icon}
                      </span>
                      <span className="font-outfit text-sm font-medium">{action.title}</span>
                    </div>
                    {index === selectedIndex && <ArrowRight size={14} />}
                  </div>
                ))
              )}
            </div>
            
            <div className="border-t border-[#222222] bg-[#141414] px-4 py-2 flex items-center gap-4">
              <div className="flex items-center gap-1 font-mono text-[10px] text-[#525252]">
                <span className="bg-[#1a1a1a] border border-[#222222] px-1 rounded shadow-sm leading-tight">↑</span>
                <span className="bg-[#1a1a1a] border border-[#222222] px-1 rounded shadow-sm leading-tight">↓</span>
                <span className="ml-1">to navigate</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] text-[#525252]">
                <span className="bg-[#1a1a1a] border border-[#222222] px-1.5 rounded shadow-sm leading-tight">↵</span>
                <span className="ml-1">to select</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
