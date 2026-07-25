"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "w-full" | "w-auto";
}

export default function Reveal({ children, delay = 0, width = "w-full" }: RevealProps) {
  return (
    <div className={`relative ${width}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1.0, delay: delay, ease: [0.25, 0.25, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
