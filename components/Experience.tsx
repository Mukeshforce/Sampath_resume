"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#14b8a6] font-mono text-sm mb-4 block"
          >
            02. Where I&apos;ve Worked
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] mx-auto"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab List with Timeline */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-l border-white/10 pb-4 lg:pb-0 relative">
            {/* Timeline line for desktop */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14b8a6] via-[#2dd4bf] to-[#14b8a6] origin-top"
            />
            {resumeData.experience.map((exp, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.03, x: 4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-4 text-left whitespace-nowrap border-b-2 lg:border-b-0 lg:border-l-2 transition-all rounded-lg lg:rounded-l-lg lg:rounded-r-none relative group ${
                  activeTab === index
                    ? "border-[#14b8a6] text-white bg-gradient-to-r from-[#14b8a6]/20 to-[#2dd4bf]/20"
                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <motion.div
                  className="hidden lg:block absolute -left-2 top-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#2dd4bf] border-2 border-background"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                />
                <span className="relative z-10">{exp.company}</span>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#14b8a6]/10 to-[#2dd4bf]/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {resumeData.experience.map(
                (exp, index) =>
                  activeTab === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="glass-strong rounded-2xl p-8 border border-white/20 relative overflow-hidden group"
                    >
                      {/* Soft static background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/5 via-[#2dd4bf]/5 to-[#5eead4]/5" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-3 bg-gradient-to-br from-[#14b8a6] to-[#2dd4bf] rounded-lg shadow-lg shadow-[#14b8a6]/50"
                          >
                            <Briefcase className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                              className="text-2xl font-bold text-white mb-1"
                            >
                              {exp.title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
                              className="text-[#14b8a6] font-semibold mb-2 flex items-center gap-2"
                            >
                              <MapPin className="w-4 h-4" />
                              @ {exp.company}
                            </motion.p>
                            <motion.p
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.26, ease: "easeOut" }}
                              className="text-slate-400 text-sm font-mono flex items-center gap-2"
                            >
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </motion.p>
                          </div>
                        </div>
                        <ul className="space-y-4">
                          {exp.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.35 + itemIndex * 0.08,
                                ease: "easeOut",
                              }}
                              whileHover={{ x: 3 }}
                              className="text-slate-300 flex items-start gap-3 text-lg group/item"
                            >
                              <span className="text-[#14b8a6] mt-2 flex-shrink-0">▹</span>
                              <span className="group-hover/item:text-white transition-colors">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
