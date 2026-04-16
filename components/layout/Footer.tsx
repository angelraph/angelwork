"use client";

import { motion } from "framer-motion";
import { Zap, Copy, Check } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { TwitterXIcon, GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: TwitterXIcon, href: personalInfo.social.twitter, label: "Twitter / X" },
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
    <footer className="relative border-t border-white/5 bg-[#04040f]/80 backdrop-blur-xl">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 w-fit group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">
                alex<span className="gradient-text">.</span>xyz
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Web3 Content Strategist & Community Builder. Building the future of decentralized communities, one story at a time.
            </p>

            {/* Wallet address */}
            <div className="mt-5">
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Wallet Address</p>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  {shortAddress}
                </span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-cyan-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-200">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-600">
            Designed for the{" "}
            <span className="gradient-text font-medium">decentralized future</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
