"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full text-left relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 relative"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sm text-[#14b8a6] font-medium inline-block"
          >
            Hello, my name is
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight relative text-left"
        >
          <span className="text-white block">
            {resumeData.personal.name}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mb-8 text-left"
        >
          <span className="inline-block">
            {resumeData.personal.subtitle}
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white text-lg sm:text-xl max-w-3xl mb-12 leading-relaxed text-left"
        >
          {resumeData.personal.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-start items-start"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 40px rgba(20, 184, 166, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border-2 border-[#14b8a6] text-white rounded-full font-semibold text-lg hover:bg-[#14b8a6]/10 transition-all"
          >
            Get In Touch
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="/Sampath_Resume.pdf"
            download
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Centered down arrow at bottom of hero section */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="text-slate-400 hover:text-white transition-colors relative group"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
          <motion.div
            className="absolute inset-0 border-2 border-[#14b8a6]/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
