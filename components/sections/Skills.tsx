"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { skills } from "@/lib/data";

const colorConfig = {
  cyan:   { dot: "#1E555C", title: "#1E555C", header: "rgba(30,85,92,0.08)",     border: "rgba(30,85,92,0.2)",     hoverShadow: "rgba(30,85,92,0.15)" },
  purple: { dot: "#1E555C", title: "#1E555C", header: "rgba(30,85,92,0.06)",  border: "rgba(30,85,92,0.2)",  hoverShadow: "rgba(30,85,92,0.15)" },
  blue:   { dot: "#1E555C", title: "#1E555C", header: "rgba(30,85,92,0.06)",   border: "rgba(30,85,92,0.2)",   hoverShadow: "rgba(30,85,92,0.15)" },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="02 / Skills"
      title="Tools of the Trade"
      subtitle="From on-chain tools to content workflows — the full stack of a Web3-native creator."
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, groupIdx) => {
          const c = colorConfig[group.color as keyof typeof colorConfig];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: groupIdx * 0.15, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, boxShadow: `0 0 25px ${c.hoverShadow}` }}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: "1px solid rgba(58,46,57,0.12)", background: "#F4D8CD", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-5" style={{ background: c.header, borderBottom: "1px solid rgba(58,46,57,0.08)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="font-bold text-base" style={{ color: c.title }}>{group.category}</h3>
                </div>
              </div>

              {/* Items */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {group.items.map((skill, skillIdx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 + 0.2 }}
                      className="flex items-center gap-3 text-sm transition-colors duration-200"
                      style={{ color: "#5C4A58" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tool badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#8C7388" }}>Also Proficient In</p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Notion","Figma","Canva","Airtable","Buffer","Hootsuite","Mirror.xyz","Substack","Google Analytics","Mixpanel","Dune","Nansen"].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-default"
              style={{ border: "1px solid rgba(58,46,57,0.12)", background: "#FAEEE8", color: "#8C7388" }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
