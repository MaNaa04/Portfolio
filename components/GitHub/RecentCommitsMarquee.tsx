"use client";

import { motion } from "framer-motion";

interface Commit {
  repo: string;
  message: string;
  time: string;
}

export default function RecentCommitsMarquee({ commits }: { commits: Commit[] }) {
  if (!commits || commits.length === 0) return null;

  return (
    <div className="h-[90px] overflow-hidden relative w-full pt-4 mt-2">
      {/* Fade masks */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-2"
      >
        {[...commits, ...commits, ...commits].map((commit, i) => (
          <div key={`${commit.repo}-${i}`} className="flex items-center justify-between py-1.5 text-sm shrink-0 group">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[11px] text-[#FF5C00] shrink-0">{commit.repo}</span>
              <span className="font-mono text-sm text-[#A3A3A3] truncate group-hover:text-[#E5E5E5] transition-colors" title={commit.message}>
                {commit.message}
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#525252] shrink-0 ml-4 whitespace-nowrap">{commit.time}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
