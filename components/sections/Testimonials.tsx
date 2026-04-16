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
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,231,235,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            {/* Quote mark */}
            <div className="text-4xl font-serif leading-none mb-3 select-none"
              style={{ color: "rgba(229,231,235,0.25)" }}>&ldquo;</div>

            {/* Quote text */}
            <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#E0E0E0" }}>
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(229,231,235,0.15)", border: "1px solid rgba(229,231,235,0.3)", color: "#F5F5F5" }}>
                {t.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>{t.author}</p>
                <p className="text-xs" style={{ color: "#BDBDBD" }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
