"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-indigo-400 font-mono text-xs sm:text-sm mb-3 tracking-[0.25em] uppercase">
            01 · About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            {resumeData.personal.subtitle}
          </p>
        </motion.div>

        {/* Modern two-column card layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="glass-strong rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 p-6 sm:p-8 lg:p-10 items-stretch">
            {/* Left: image + quick info */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/30 via-pink-500/30 to-purple-500/30">
                  <Image
                    src="/download.jpeg"
                    alt={resumeData.personal.name}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">
                  {resumeData.personal.name}
                </p>
                <p className="text-sm sm:text-base text-indigo-300 font-medium">
                  {resumeData.personal.title}
                </p>
                {resumeData.personal.location && (
                  <p className="text-xs text-slate-400">
                    {resumeData.personal.location}
                  </p>
                )}
              </div>

              <div className="grid gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                    ✉️
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="text-xs sm:text-sm text-indigo-200 hover:text-white underline underline-offset-4"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                </div>

                {resumeData.personal.linkedin && (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm">
                      in
                    </span>
                    <div className="flex-1">
                      <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] mb-0.5">
                        LinkedIn
                      </p>
                      <a
                        href={resumeData.personal.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm text-sky-200 hover:text-white underline underline-offset-4"
                      >
                        {resumeData.personal.linkedin.replace("https://www.", "")}
                      </a>
                    </div>
                  </div>
                )}

                {resumeData.personal.github && (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/60 text-slate-100 text-sm">
                      {"</>"}
                    </span>
                    <div className="flex-1">
                      <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] mb-0.5">
                        GitHub
                      </p>
                      <a
                        href={resumeData.personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm text-slate-100 hover:text-white underline underline-offset-4"
                      >
                        {resumeData.personal.github.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-1 rounded-2xl bg-black/30 border border-white/10 px-4 py-3 text-xs sm:text-[13px] text-slate-300">
                <p className="font-medium text-slate-100 mb-1">
                  Security Clearance
                </p>
                <p>Active clearance — reference available on request.</p>
              </div>

              {/* Trailblazer profile links */}
              <div className="pt-2 flex flex-wrap gap-2">
                {resumeData.personal.lightningChampions && (
                  <a
                    href={resumeData.personal.lightningChampions}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-indigo-400/50 text-[11px] sm:text-xs text-indigo-200 hover:text-white hover:bg-indigo-500/30 transition-colors"
                  >
                    Lightning Champions
                  </a>
                )}
                {resumeData.personal.trailhead && (
                  <a
                    href={resumeData.personal.trailhead}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-sky-400/50 text-[11px] sm:text-xs text-sky-200 hover:text-white hover:bg-sky-500/30 transition-colors"
                  >
                    Trailhead
                  </a>
                )}
                {resumeData.personal.linkedin && (
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-slate-400/60 text-[11px] sm:text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Right: narrative + highlights */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              {/* Narrative text */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p className="text-slate-200">{resumeData.personal.description}</p>
                {resumeData.about.description.map((para, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: para.replace(
                        /<strong>(.*?)<\/strong>/g,
                        '<strong class="text-white font-semibold">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </div>

              {/* Core highlights */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
                  Core Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.about.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
