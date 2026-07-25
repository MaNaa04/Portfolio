"use client";

import { motion } from "framer-motion";

interface Submission {
  id: string;
  title: string;
  status: string;
  time: string;
  color: string;
}

export default function RecentSubmissionsMarquee({ submissions }: { submissions: Submission[] }) {
  if (!submissions || submissions.length === 0) return null;

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
        {[...submissions, ...submissions, ...submissions].map((sub, i) => (
          <div key={`${sub.id}-${i}`} className="flex items-center justify-between py-1.5 text-sm shrink-0 group min-w-0 gap-4">
            <span className="font-mono text-sm text-[#A3A3A3] truncate group-hover:text-[#E5E5E5] transition-colors" title={sub.title}>
              {sub.title}
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-[10px]" style={{ color: sub.color }}>{sub.status}</span>
              <span className="font-mono text-[10px] text-[#525252] whitespace-nowrap">{sub.time}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
