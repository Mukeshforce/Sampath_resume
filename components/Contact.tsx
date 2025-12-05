"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[#14b8a6] font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] mx-auto mb-8"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I am currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, I&apos;ll try my best to
          get back to you!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 18px 45px rgba(20, 184, 166, 0.55)",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.96 }}
          href={`mailto:${resumeData.personal.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#14b8a6]/50 hover:shadow-xl hover:shadow-[#14b8a6]/60 transition-all mb-16 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2dd4bf] to-[#14b8a6]"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="relative z-10"
          >
            <Mail className="w-5 h-5" />
          </motion.div>
          <span className="relative z-10">Say Hello</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center gap-6"
        >
          {resumeData.personal.github && (
            <motion.a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-[#14b8a6]/20 hover:to-[#2dd4bf]/20 transition-all border border-white/10 hover:border-[#14b8a6]/50"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
          )}
          {resumeData.personal.linkedin && (
            <motion.a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-[#14b8a6]/20 hover:to-[#2dd4bf]/20 transition-all border border-white/10 hover:border-[#14b8a6]/50"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
