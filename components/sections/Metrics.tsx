"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { metrics } from "@/lib/data";

const colorConfig = {
  cyan: {
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-cyan-500/15",
    value: "from-cyan-400 to-cyan-600",
    bg: "from-cyan-500/8 to-transparent",
    ring: "ring-cyan-500/20",
  },
  purple: {
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-purple-500/15",
    value: "from-purple-400 to-purple-600",
    bg: "from-purple-500/8 to-transparent",
    ring: "ring-purple-500/20",
  },
  blue: {
    border: "hover:border-blue-500/30",
    glow: "hover:shadow-blue-500/15",
    value: "from-blue-400 to-blue-600",
    bg: "from-blue-500/8 to-transparent",
    ring: "ring-blue-500/20",
  },
};

/* ── Counter animation hook ──────────────────────────────── */
function AnimatedValue({ value }: { value: string }) {
  // Parse numeric part
  const match = value.match(/^([\d.]+)(\D*)$/);
  if (!match) {
    return <span>{value}</span>;
  }
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

  useEffect(() => {
    if (inView) motionVal.set(num);
  }, [inView, num, motionVal]);

  return (
    <motion.span ref={ref} style={{ display: "inline-block" }}>
      {display}
    </motion.span>
  );
}

const testimonials = [
  {
    quote: "Alex transformed our community from a ghost town to one of the most engaged in DeFi. Absolute pro.",
    author: "Jake M.",
    role: "CEO, Nebula Protocol",
  },
  {
    quote: "The content strategy Alex built for our launch was a masterclass. $18M TVL in three days speaks for itself.",
    author: "Sarah K.",
    role: "CMO, NovaDEX",
  },
  {
    quote: "ChainPulse has been in my reading list since day one. Best Web3 newsletter, hands down.",
    author: "Marcus R.",
    role: "Web3 Investor",
  },
];

export default function Metrics() {
  return (
    <SectionWrapper
      id="metrics"
      label="05 / Social Proof"
      title="Results That Speak"
      subtitle="Real numbers from real campaigns. No fluff, no inflated metrics."
      className="relative"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Metrics grid */}
      <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {metrics.map((metric, i) => {
          const c = colorConfig[metric.color as keyof typeof colorConfig];
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
                text-center overflow-hidden hover:shadow-xl transition-all duration-300
                ${c.border} ${c.glow}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className="text-3xl mb-3">{metric.icon}</div>

                {/* Value */}
                <p className={`text-3xl sm:text-4xl font-black bg-gradient-to-br ${c.value} bg-clip-text text-transparent mb-2`}>
                  <AnimatedValue value={metric.value} />
                </p>

                {/* Label */}
                <p className="text-xs text-slate-400 leading-tight">{metric.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-8">
          What People Say
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group"
          >
            {/* Quote marks */}
            <div className="text-4xl font-serif text-cyan-500/20 leading-none mb-3 select-none">&ldquo;</div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                {t.author[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
