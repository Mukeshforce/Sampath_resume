"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
          <span className="text-indigo-400 font-mono text-sm mb-4 block">04. Education</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.18, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-strong rounded-2xl p-8 border-l-4 border-indigo-500 hover:border-pink-500 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-2xl -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.institution}
                      </h3>
                      <span className="text-indigo-400 font-mono text-sm font-semibold">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-pink-400 text-lg font-semibold mb-2">{edu.degree}</p>
                    {edu.description && (
                      <p className="text-slate-300">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
