"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";

const testimonials = [
  {
    quote: "Raph transformed our community from a ghost town to one of the most engaged in DeFi. Absolute pro.",
    author: "Jake M.",
    role: "CEO, Nebula Protocol",
  },
  {
    quote: "The content strategy Raph built for our launch was a masterclass. $18M TVL in three days speaks for itself.",
    author: "Sarah K.",
    role: "CMO, NovaDEX",
  },
  {
    quote: "ChainPulse has been in my reading list since day one. Best Web3 newsletter, hands down.",
    author: "Marcus R.",
    role: "Web3 Investor",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      title="What People Say"
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="p-6 rounded-2xl transition-all duration-300"
            style={{ border: "1px solid #E2E8F0", background: "#FFFFFF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#F1F5F9"; }}
          >
            {/* Quote mark */}
            <div className="text-4xl font-serif leading-none mb-3 select-none"
              style={{ color: "rgba(124,58,237,0.25)" }}>&ldquo;</div>

            {/* Quote text */}
            <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#475569" }}>
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#0F172A" }}>
                {t.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{t.author}</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
