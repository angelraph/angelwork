"use client";

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
    <footer style={{ background: "#0F172A", borderTop: "1px solid #1E293B" }}>
      {/* Top accent line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 w-fit mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg,#7C3AED,#9F67EA)", boxShadow: "0 4px 14px rgba(124,58,237,0.35)" }}>
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">angelraph</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#94A3B8" }}>
              Web3 Content Strategist & Community Builder. Building the future of decentralized communities, one story at a time.
            </p>

            {/* Wallet */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#64748B" }}>Wallet Address</p>
              <button onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                style={{ border: "1px solid #1E293B", background: "rgba(255,255,255,0.03)" }}>
                <span className="font-mono text-xs" style={{ color: "#94A3B8" }}>{shortAddress}</span>
                {copied
                  ? <Check className="h-3.5 w-3.5" style={{ color: "#7C3AED" }} />
                  : <Copy className="h-3.5 w-3.5" style={{ color: "#64748B" }} />}
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#64748B" }}>Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors duration-200"
                    style={{ color: "#94A3B8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#64748B" }}>Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-all duration-200"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                    style={{ border: "1px solid #1E293B", background: "rgba(255,255,255,0.03)" }}>
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
          style={{ borderTop: "1px solid #1E293B" }}>
          <p className="text-xs" style={{ color: "#64748B" }}>
            © {new Date().getFullYear()} built by angelraph
          </p>
          <p className="text-xs" style={{ color: "#64748B" }}>
            Designed for the{" "}
            <span className="gradient-text font-medium">decentralized future</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
