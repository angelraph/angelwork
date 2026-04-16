"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  label?: string;       // e.g. "01 / ABOUT"
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  label,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative section-padding ${className}`}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {(label || title || subtitle) && (
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {label && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                {label}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
