"use client";

import { motion } from "framer-motion";
import { Zap, Copy, Check } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { TwitterXIcon, GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: TwitterXIcon, href: personalInfo.social.twitter, label: "Twitter / X" },
  { icon: GithubIcon,   href: personalInfo.social.github,  label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
];

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const shortAddress = `${personalInfo.walletAddress.slice(0, 6)}...${personalInfo.walletAddress.slice(-4)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative" style={{ background: "#C93428", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(229,231,235,0.4), transparent)" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 w-fit mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg,#E5E7EB,#FFFFFF)", boxShadow: "0 0 20px rgba(229,231,235,0.4)" }}>
                <Zap className="h-5 w-5 text-[#EA4335]" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold" style={{ color: "#F5F5F5" }}>angelraph</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#BDBDBD" }}>
              Web3 Content Strategist & Community Builder. Building the future of decentralized communities, one story at a time.
            </p>

            {/* Wallet */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#BDBDBD" }}>Wallet Address</p>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
              >
                <span className="font-mono text-xs" style={{ color: "#E0E0E0" }}>{shortAddress}</span>
                {copied
                  ? <Check className="h-3.5 w-3.5" style={{ color: "#E5E7EB" }} />
                  : <Copy className="h-3.5 w-3.5" style={{ color: "#BDBDBD" }} />}
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#BDBDBD" }}>Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors duration-200"
                    style={{ color: "#BDBDBD" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#BDBDBD")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#BDBDBD" }}>Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-all duration-200 group"
                  style={{ color: "#BDBDBD" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#BDBDBD")}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "#BDBDBD" }}>
            © {new Date().getFullYear()} built by angelraph
          </p>
          <p className="text-xs" style={{ color: "#BDBDBD" }}>
            Designed for the{" "}
            <span className="gradient-text font-medium">decentralized future</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
