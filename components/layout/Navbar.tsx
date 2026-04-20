"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={isScrolled ? {
        background: "rgba(244,216,205,0.92)",
        borderBottom: "1px solid rgba(58,46,57,0.12)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 12px rgba(58,46,57,0.1)"
      } : { background: "transparent" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300"
              style={{ background: "#1E555C", boxShadow: "0 4px 14px rgba(30,85,92,0.35)" }}>
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-tight" style={{ fontFamily: "var(--font-montserrat)", color: "#3A2E39" }}>
              angelraph
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
                style={{ color: "#5C4A58" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#3A2E39"; e.currentTarget.style.background = "rgba(58,46,57,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#5C4A58"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-1/2"
                  style={{ background: "#F15152" }} />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="#contact" size="sm">Let&apos;s Talk</Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#3A2E39" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden md:hidden"
        style={{ borderTop: "1px solid rgba(58,46,57,0.12)", background: "#F4D8CD" }}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "#5C4A58" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#3A2E39"; e.currentTarget.style.background = "rgba(58,46,57,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#5C4A58"; e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(58,46,57,0.12)" }}>
            <Button href="#contact" size="sm" className="w-full justify-center">Let&apos;s Talk</Button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
