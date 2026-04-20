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
      "bg-[#F15152] text-white font-semibold btn-glow transition-all duration-200 hover:bg-[#D94344]",
    secondary:
      "border-2 border-[#1E555C] text-[#1E555C] font-semibold hover:bg-[#1E555C] hover:text-[#F4D8CD] transition-all duration-200",
    ghost:
      "text-[#5C4A58] hover:text-[#3A2E39] font-medium transition-colors duration-200",
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
