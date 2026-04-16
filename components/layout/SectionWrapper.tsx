"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ children, id, className = "", style, label, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative section-padding ${className}`} style={style}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(label || title || subtitle) && (
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {label && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#E5E7EB" }}>
                {label}
              </p>
            )}
            {title && (
              <h2 className="gradient-text text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                style={{ color: "#E0E0E0" }}>
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
