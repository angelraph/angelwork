"use client";

import { motion } from "framer-motion";
import { Rocket, Users, FileText, Award } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { personalInfo } from "@/lib/data";

const traits = [
  {
    icon: Rocket,
    title: "Web3 Pioneer",
    description: "Early adopter in the blockchain space, navigating DeFi, NFTs, and DAOs from the beginning.",
    color: "cyan",
  },
  {
    icon: FileText,
    title: "Storyteller",
    description: "Translating complex on-chain mechanics into narratives that resonate with mass audiences.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Community Architect",
    description: "Building high-engagement, loyal communities that become a protocol's greatest asset.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Growth Driven",
    description: "Data-first approach to content and community, with a track record of measurable results.",
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
  },
};

export default function About() {
  return (
    <SectionWrapper
      id="about"
      label="01 / About"
      title="The Story Behind the Work"
      subtitle="From blockchain curiosity to building communities at scale — here's how I got here."
      className="relative"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              My Web3 journey started in <span className="text-white font-medium">2021</span> — deep in a DeFi rabbit hole,
              reading whitepapers at 2am and joining every Discord that sounded promising. What I found wasn't
              just technology; it was a movement.
            </p>
            <p>
              I realized quickly that the biggest challenge in Web3 wasn't building — it was{" "}
              <span className="gradient-text font-medium">communicating and connecting</span>. Brilliant protocols
              were failing because no one understood them. Communities were disengaged because no one was listening.
            </p>
            <p>
              So I dedicated myself to solving that problem — writing content that educates and excites,
              building communities that are loyal and active, and helping protocols earn trust in a
              trust-scarce environment.
            </p>
            <p>
              Today I work at the intersection of{" "}
              <span className="text-cyan-400 font-medium">content strategy</span>,{" "}
              <span className="text-purple-400 font-medium">community growth</span>, and{" "}
              <span className="text-blue-400 font-medium">blockchain-native marketing</span>.
            </p>
          </div>

          {/* Location & availability badge */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-xs text-slate-400">
              📍 {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Collaborations
            </span>
          </div>
        </motion.div>

        {/* Right — trait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traits.map((trait, i) => {
            const c = colorMap[trait.color as keyof typeof colorMap];
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`group p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
                  hover:border-white/10 hover:shadow-xl ${c.glow} transition-all duration-300 cursor-default`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} border ${c.border} mb-4`}>
                  <trait.icon className={`h-5 w-5 ${c.text}`} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">{trait.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{trait.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
