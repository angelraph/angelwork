"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Star } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { experiences } from "@/lib/data";

const typeConfig = {
  "full-time": { label: "Full-time", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/8" },
  "contract": { label: "Contract", color: "text-purple-400 border-purple-500/30 bg-purple-500/8" },
  "founder": { label: "Founder", color: "text-amber-400 border-amber-500/30 bg-amber-500/8" },
};

const typeIcons = {
  "full-time": Briefcase,
  "contract": Code,
  "founder": Star,
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="04 / Experience"
      title="Work History"
      subtitle="The protocols, DAOs, and projects that shaped my Web3 career."
      className="relative"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const cfg = typeConfig[exp.type as keyof typeof typeConfig];
            const Icon = typeIcons[exp.type as keyof typeof typeIcons];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative flex gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 h-16 w-16 items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                    className="relative h-10 w-10 rounded-xl border border-white/10 bg-[#04040f] flex items-center justify-center z-10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 group-hover:border-white/10 group-hover:shadow-xl group-hover:shadow-black/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-base font-bold text-white">{exp.role}</h3>
                        <span className={`px-2 py-0.5 rounded-md border text-xs font-medium ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-sm text-cyan-400/80 font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/5 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60 flex-shrink-0" />
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
