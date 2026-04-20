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
    <footer style={{ background: "#3A2E39" }}>
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: "#1E555C" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 w-fit mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: "#1E555C", boxShadow: "0 4px 14px rgba(30,85,92,0.4)" }}>
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "#F4D8CD" }}>
                angelraph
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#A8937E" }}>
              Web3 Content Strategist & Community Builder. Building the future of decentralized communities, one story at a time.
            </p>

            {/* Wallet */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#7A6B72" }}>Wallet Address</p>
              <button onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                style={{ border: "1px solid rgba(244,216,205,0.1)", background: "rgba(244,216,205,0.05)" }}>
                <span className="font-mono text-xs" style={{ color: "#A8937E" }}>{shortAddress}</span>
                {copied
                  ? <Check className="h-3.5 w-3.5" style={{ color: "#EDB183" }} />
                  : <Copy className="h-3.5 w-3.5" style={{ color: "#7A6B72" }} />}
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#7A6B72" }}>Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors duration-200"
                    style={{ color: "#A8937E" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F4D8CD")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A8937E")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#7A6B72" }}>Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-all duration-200"
                  style={{ color: "#A8937E" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#F4D8CD"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#A8937E"; }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                    style={{ border: "1px solid rgba(244,216,205,0.1)", background: "rgba(244,216,205,0.05)" }}>
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
          style={{ borderTop: "1px solid rgba(244,216,205,0.1)" }}>
          <p className="text-xs" style={{ color: "#7A6B72" }}>
            © {new Date().getFullYear()} built by angelraph
          </p>
          <p className="text-xs" style={{ color: "#7A6B72" }}>
            Designed for the{" "}
            <span style={{ color: "#EDB183", fontWeight: 600 }}>decentralized future</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
