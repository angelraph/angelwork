"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { skills } from "@/lib/data";

const colorConfig = {
  cyan: {
    card: "hover:border-cyan-500/30 hover:shadow-cyan-500/10",
    badge: "border-cyan-500/20 bg-cyan-500/8 text-cyan-300",
    header: "from-cyan-500/10 to-transparent border-cyan-500/20",
    icon: "text-cyan-400",
    dot: "bg-cyan-400",
    title: "text-cyan-300",
  },
  purple: {
    card: "hover:border-purple-500/30 hover:shadow-purple-500/10",
    badge: "border-purple-500/20 bg-purple-500/8 text-purple-300",
    header: "from-purple-500/10 to-transparent border-purple-500/20",
    icon: "text-purple-400",
    dot: "bg-purple-400",
    title: "text-purple-300",
  },
  blue: {
    card: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    badge: "border-blue-500/20 bg-blue-500/8 text-blue-300",
    header: "from-blue-500/10 to-transparent border-blue-500/20",
    icon: "text-blue-400",
    dot: "bg-blue-400",
    title: "text-blue-300",
  },
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
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

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
              className={`relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
                overflow-hidden hover:shadow-xl transition-all duration-300 ${c.card}`}
            >
              {/* Card header */}
              <div className={`px-6 pt-6 pb-5 bg-gradient-to-b ${c.header} border-b border-white/5`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className={`font-bold text-base ${c.title}`}>{group.category}</h3>
                </div>
              </div>

              {/* Skills list */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {group.items.map((skill, skillIdx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 + 0.2 }}
                      className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom skill badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">Also Proficient In</p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Notion", "Figma", "Canva", "Airtable",
            "Buffer", "Hootsuite", "Mirror.xyz", "Substack",
            "Google Analytics", "Mixpanel", "Dune", "Nansen",
          ].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-xs text-slate-400 hover:text-slate-200 hover:border-white/15 transition-all duration-200 cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
