"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { metrics } from "@/lib/data";

/* ── Counter ─────────────────────────────────────────────── */
function AnimatedValue({ value }: { value: string }) {
  const match = value.match(/^([\d.]+)(\D*)$/);
  if (!match) return <span>{value}</span>;
  const num = parseFloat(match[1]);
  const suffix = match[2];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 15 });
  const display = useTransform(spring, (v) => {
    if (num >= 1000) return `${Math.round(v).toLocaleString()}${suffix}`;
    if (Number.isInteger(num)) return `${Math.round(v)}${suffix}`;
    return `${v.toFixed(1)}${suffix}`;
  });
  useEffect(() => { if (inView) motionVal.set(num); }, [inView, num, motionVal]);
  return <motion.span ref={ref} style={{ display: "inline-block" }}>{display}</motion.span>;
}

const testimonials = [
  { quote: "Raph transformed our community from a ghost town to one of the most engaged in DeFi. Absolute pro.", author: "Jake M.", role: "CEO, Nebula Protocol" },
  { quote: "The content strategy Raph built for our launch was a masterclass. $18M TVL in three days speaks for itself.", author: "Sarah K.", role: "CMO, NovaDEX" },
  { quote: "ChainPulse has been in my reading list since day one. Best Web3 newsletter, hands down.", author: "Marcus R.", role: "Web3 Investor" },
];

export default function Metrics() {
  return (
    <SectionWrapper
      id="metrics"
      label="05 / Social Proof"
      title="Results That Speak"
      subtitle="Real numbers from real campaigns. No fluff, no inflated metrics."
      className="relative"
      style={{ background: "#EA4335" } as React.CSSProperties}
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Metric cards — numbers in Cyber Blue #22D3EE */}
      <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-2xl text-center overflow-hidden transition-all duration-300 cursor-default"
            style={{ border: "1px solid rgba(255,255,255,0.05)", background: "#D93B2F" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(34,211,238,0.15)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,211,238,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)"; }}
          >
            <div className="text-3xl mb-3">{metric.icon}</div>
            {/* Cyber Blue for the numbers */}
            <p className="text-3xl sm:text-4xl font-black mb-2" style={{ color: "#22D3EE" }}>
              <AnimatedValue value={metric.value} />
            </p>
            <p className="text-xs" style={{ color: "#E0E0E0" }}>{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: "#BDBDBD" }}>
        What People Say
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="p-6 rounded-2xl transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.05)", background: "#D93B2F" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,231,235,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)"; }}
          >
            <div className="text-4xl font-serif leading-none mb-3 select-none" style={{ color: "rgba(229,231,235,0.25)" }}>&ldquo;</div>
            <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#E0E0E0" }}>{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: "#1a1a24", border: "1px solid rgba(229,231,235,0.3)", color: "#E5E7EB" }}>
                {t.author[0]}
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#F5F5F5" }}>{t.author}</p>
                <p className="text-xs" style={{ color: "#BDBDBD" }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
