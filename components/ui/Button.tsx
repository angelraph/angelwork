"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    /* Indigo → Purple gradient with strong glow */
    primary:
      "bg-gradient-to-r from-[#E5E7EB] to-[#FFFFFF] text-[#EA4335] font-semibold btn-glow transition-shadow duration-300",
    /* Ghost border in indigo */
    secondary:
      "border border-[#E5E7EB]/50 text-[#E5E7EB] font-semibold hover:border-[#E5E7EB] hover:text-[#E5E7EB] hover:bg-[#E5E7EB]/5 backdrop-blur-sm transition-all duration-200",
    ghost:
      "text-[#E0E0E0] hover:text-[#F5F5F5] font-medium transition-colors duration-200",
  };

  const baseClasses = `relative inline-flex items-center gap-2 rounded-xl font-medium tracking-wide
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ display: "inline-block" }}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      {content}
    </button>
  );
}
