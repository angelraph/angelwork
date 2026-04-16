"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { projects } from "@/lib/data";

const colorMap = {
  cyan: {
    tag: "border-cyan-500/20 bg-cyan-500/8 text-cyan-300",
    accent: "from-cyan-500/5 to-transparent",
    border: "hover:border-cyan-500/25",
    glow: "hover:shadow-cyan-500/10",
    metric: "text-cyan-400",
    line: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  purple: {
    tag: "border-purple-500/20 bg-purple-500/8 text-purple-300",
    accent: "from-purple-500/5 to-transparent",
    border: "hover:border-purple-500/25",
    glow: "hover:shadow-purple-500/10",
    metric: "text-purple-400",
    line: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  blue: {
    tag: "border-blue-500/20 bg-blue-500/8 text-blue-300",
    accent: "from-blue-500/5 to-transparent",
    border: "hover:border-blue-500/25",
    glow: "hover:shadow-blue-500/10",
    metric: "text-blue-400",
    line: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="03 / Projects"
      title="Featured Work"
      subtitle="A selection of campaigns, communities, and content projects that drove real results."
      className="relative"
    >
      {/* Background orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const c = colorMap[project.color as keyof typeof colorMap];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
                overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-default
                ${c.border} ${c.glow}`}
            >
              {/* Top gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px ${c.line} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Project number */}
              <div className="absolute top-5 right-5 text-5xl font-black text-white/[0.03] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md border text-xs font-medium ${c.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Role</span>
                  <span className="text-xs text-slate-300 font-medium">{project.role}</span>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1.5">Impact</p>
                  <p className={`text-sm font-semibold ${c.metric}`}>{project.impact}</p>
                </div>
              </div>

              {/* Hover icon */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-5 w-5 text-slate-400" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
