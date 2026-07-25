"use client";

import { motion } from "framer-motion";

export default function ShakingHand() {
  return (
    <motion.span
      className="inline-block origin-bottom-right text-3xl ml-3"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
    >
      🤝
    </motion.span>
  );
}
