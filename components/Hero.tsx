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
        className="max-w-5xl w-full text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 relative"
        >
          <motion.span
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            className="px-4 py-2 glass rounded-full text-sm text-indigo-400 font-medium inline-flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              👋
            </motion.span>
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight relative"
        >
          <span className="gradient-text block">
            {resumeData.personal.name}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mb-8"
        >
          <span className="inline-block text-slate-200">
            {resumeData.personal.subtitle}
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {resumeData.personal.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 40px rgba(236, 72, 153, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/60 transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.95 }}
            href="/Sampath_Resume.pdf"
            download
            className="px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-all font-semibold text-lg border border-white/20 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
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
              className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
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
      </motion.div>
    </section>
  );
}
