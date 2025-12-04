"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cloud, Code, Building2 } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  "Cloud & DevOps": <Cloud className="w-6 h-6" />,
  "Development": <Code className="w-6 h-6" />,
  "Architecture": <Building2 className="w-6 h-6" />,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Removed floating overlay particles for smoother performance */}

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
            className="text-indigo-400 font-mono text-sm mb-4 block"
          >
            03. My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {resumeData.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="glass-strong rounded-2xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all group relative overflow-hidden"
            >
              {/* Soft background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-purple-500/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg text-white relative overflow-hidden shadow-md shadow-indigo-500/40">
                    <div className="relative z-10">
                      {iconMap[category.name] || <Code className="w-6 h-6" />}
                    </div>
                  </div>
                  <motion.h3
                    className="text-xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: categoryIndex * 0.15 + skillIndex * 0.03,
                        ease: "easeOut",
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        zIndex: 10,
                      }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="px-4 py-2 glass rounded-lg text-slate-300 text-sm font-medium border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all cursor-default relative overflow-hidden group/skill"
                    >
                      {hoveredSkill === skill && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
