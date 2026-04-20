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
    primary:
      "bg-gradient-to-r from-[#7C3AED] to-[#9F67EA] text-white font-semibold btn-glow transition-shadow duration-300",
    secondary:
      "border border-[#7C3AED] text-[#7C3AED] font-semibold hover:bg-[#7C3AED] hover:text-white transition-all duration-200",
    ghost:
      "text-[#475569] hover:text-[#0F172A] font-medium transition-colors duration-200",
  };

  const baseClasses = `relative inline-flex items-center gap-2 rounded-xl font-semibold tracking-wide font-heading
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
