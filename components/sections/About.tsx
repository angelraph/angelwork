"use client";

import { motion } from "framer-motion";
import { Rocket, Users, FileText, Award } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { personalInfo } from "@/lib/data";

const traits = [
  { icon: Rocket,   title: "Web3 Pioneer",        description: "Early adopter navigating DeFi, NFTs, and DAOs from the very beginning.", color: "indigo" },
  { icon: FileText, title: "Storyteller",          description: "Translating complex on-chain mechanics into narratives that resonate with mass audiences.", color: "purple" },
  { icon: Users,    title: "Community Architect",  description: "Building high-engagement, loyal communities that become a protocol's greatest asset.", color: "cyan" },
  { icon: Award,    title: "Growth Driven",        description: "Data-first approach to content and community, with a track record of measurable results.", color: "indigo" },
];

const colorMap = {
  indigo: { bg: "rgba(30,85,92,0.08)",  border: "rgba(30,85,92,0.25)",  text: "#1E555C" },
  purple: { bg: "rgba(30,85,92,0.08)", border: "rgba(30,85,92,0.25)", text: "#1E555C" },
  cyan:   { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.25)", text: "#22D3EE" },
};

export default function About() {
  return (
    <SectionWrapper
      id="about"
      label="01 / About"
      title="The Story Behind the Work"
      subtitle="From blockchain curiosity to building communities at scale. Here is how i got here"
      className="relative"
      style={{ background: "#FAEEE8" } as React.CSSProperties}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,85,92,0.06)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#5C4A58" }}>
            <p>
              My Web3 journey started in <span style={{ color: "#3A2E39", fontWeight: 500 }}>2020</span> deep in a DeFi rabbit hole,
              reading whitepapers at 2am and joining every Discord that sounded promising. What I found wasn't
              just technology; it was a movement.
            </p>
            <p>
              I realized quickly that the biggest challenge in Web3 wasn't building it was{" "}
              <span style={{ color: "#1E555C", fontWeight: 500 }}>communicating and connecting</span>. Brilliant protocols
              were failing because no one understood them. Communities were disengaged because no one was listening.
            </p>
            <p>
              So I dedicated myself to solving that problem writing content that educates and excites,
              building communities that are loyal and active, and helping protocols earn trust in a trust-scarce environment.
            </p>
            <p>
              Today I work at the intersection of{" "}
              <span style={{ color: "#1E555C", fontWeight: 500 }}>content strategy</span>,{" "}
              <span style={{ color: "#1E555C", fontWeight: 500 }}>community growth</span>, and{" "}
              <span style={{ color: "#22D3EE", fontWeight: 500 }}>blockchain-native marketing</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
              style={{ border: "1px solid rgba(58,46,57,0.12)", background: "#EDD5C8", color: "#5C4A58" }}>
              📍 {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
              style={{ border: "1px solid rgba(30,85,92,0.3)", background: "rgba(30,85,92,0.08)", color: "#1E555C" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#1E555C" }} />
              Open to Collaborations
            </span>
          </div>
        </motion.div>

        {/* Trait cards */}
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
                className="p-5 rounded-2xl transition-all duration-300 cursor-default"
                style={{ border: "1px solid rgba(58,46,57,0.12)", background: "#FAEEE8" }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                  <trait.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: c.text }} />
                </div>
                <h3 className="font-semibold text-sm mb-1.5" style={{ color: "#3A2E39" }}>{trait.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8C7388" }}>{trait.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
