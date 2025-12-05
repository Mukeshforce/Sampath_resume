"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Particle component for floating particles (client-only visual effect)
const Particle = ({ delay = 0 }: { delay?: number }) => {
  const [position] = useState(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#14b8a6]/30 rounded-full"
      initial={{
        x: `${position.x}vw`,
        y: `${position.y}vh`,
        opacity: 0,
      }}
      animate={{
        y: [`${position.y}vh`, `${position.y - 20}vh`, `${position.y}vh`],
        opacity: [0, 0.5, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function BackgroundAnimation() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Render random-based particles only on the client to avoid SSR hydration mismatches
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs with parallax effect */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ opacity }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#2dd4bf]/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, -50, 0],
          y: [0, -50, -100, 0],
          scale: [1, 1.3, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional floating orbs */}
      <motion.div
        style={{ opacity }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated grid pattern with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating particles (client-only to avoid hydration mismatches) */}
      {isClient &&
        Array.from({ length: 8 }).map((_, i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <motion.path
          d="M 0 100 Q 250 200 500 100 T 1000 100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 0 300 Q 250 400 500 300 T 1000 300"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="1" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
