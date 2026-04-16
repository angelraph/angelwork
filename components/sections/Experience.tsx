"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Star } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { experiences } from "@/lib/data";

const typeConfig = {
  "full-time": { label: "Full-time", bg: "rgba(229,231,235,0.1)",  border: "rgba(229,231,235,0.3)",  text: "#E5E7EB" },
  "contract":  { label: "Contract",  bg: "rgba(229,231,235,0.1)", border: "rgba(229,231,235,0.3)", text: "#E5E7EB" },
  "founder":   { label: "Founder",   bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)", text: "#22D3EE" },
};
const typeIcons = { "full-time": Briefcase, "contract": Code, "founder": Star };

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="03 / Experience"
      title="Work History"
      subtitle="The protocols, DAOs, and projects that shaped my Web3 career."
      className="relative"
      style={{ background: "#D93B2F" } as React.CSSProperties}
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line: indigo */}
        <div className="absolute left-8 top-0 bottom-0 w-px hidden sm:block"
          style={{ background: "linear-gradient(to bottom, #E5E7EB, rgba(229,231,235,0.3), transparent)" }} />

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
                {/* Dot — purple */}
                <div className="hidden sm:flex flex-shrink-0 h-16 w-16 items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                    className="relative h-10 w-10 rounded-xl flex items-center justify-center z-10 transition-all duration-300"
                    style={{ border: "1px solid rgba(229,231,235,0.3)", background: "rgba(229,231,235,0.08)" }}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} style={{ color: "#E5E7EB" }} />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:border-[rgba(229,231,235,0.2)]"
                  style={{ border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-base font-bold" style={{ color: "#F5F5F5" }}>{exp.role}</h3>
                        <span className="px-2 py-0.5 rounded-md border text-xs font-medium"
                          style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }}>
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-sm font-medium mt-0.5" style={{ color: "#E5E7EB" }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1.5 rounded-lg flex-shrink-0"
                      style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)", color: "#BDBDBD" }}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#E0E0E0" }}>{exp.description}</p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2.5 text-xs" style={{ color: "#E0E0E0" }}>
                        <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#E5E7EB" }} />
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
