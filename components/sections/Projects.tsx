"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { projects } from "@/lib/data";

const colorMap = {
  cyan:   { tag: { bg: "rgba(34,211,238,0.08)",  border: "rgba(34,211,238,0.2)",  text: "#22D3EE" }, metric: "#22D3EE", line: "linear-gradient(90deg,#22D3EE,#E5E7EB)", hover: "rgba(34,211,238,0.12)" },
  purple: { tag: { bg: "rgba(229,231,235,0.08)",  border: "rgba(229,231,235,0.2)",  text: "#E5E7EB" }, metric: "#E5E7EB", line: "linear-gradient(90deg,#E5E7EB,#E5E7EB)", hover: "rgba(229,231,235,0.12)" },
  blue:   { tag: { bg: "rgba(229,231,235,0.1)",    border: "rgba(229,231,235,0.25)",  text: "#E5E7EB" }, metric: "#E5E7EB", line: "linear-gradient(90deg,#E5E7EB,#22D3EE)", hover: "rgba(229,231,235,0.12)" },
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="03 / Projects"
      title="Featured Work"
      subtitle="A selection of campaigns, communities, and content projects that drove real results."
      className="relative"
      style={{ background: "#EA4335" } as React.CSSProperties}
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(229,231,235,0.07)" }} />

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
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
              style={{ border: "1px solid rgba(255,255,255,0.05)", background: "#D93B2F" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${c.hover}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: c.line }} />

              {/* Project number */}
              <div className="absolute top-5 right-5 text-5xl font-black select-none"
                style={{ color: "rgba(255,255,255,0.03)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ border: `1px solid ${c.tag.border}`, background: c.tag.bg, color: c.tag.text }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: "#FFFFFF" }}>{project.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#E0E0E0" }}>{project.description}</p>

                <div className="mb-5 flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider" style={{ color: "#BDBDBD" }}>Role</span>
                  <span className="text-xs font-medium" style={{ color: "#F5F5F5" }}>{project.role}</span>
                </div>

                {/* Impact box */}
                <div className="p-4 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "#BDBDBD" }}>Impact</p>
                  <p className="text-sm font-semibold" style={{ color: c.metric }}>{project.impact}</p>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-5 w-5" style={{ color: "#BDBDBD" }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
