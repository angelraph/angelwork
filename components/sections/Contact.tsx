"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { TwitterXIcon, GithubIcon, LinkedinIcon, DiscordIcon } from "@/components/ui/SocialIcons";

const socials = [
  {
    icon: TwitterXIcon,
    label: "Twitter / X",
    handle: "@alexnakamoto",
    href: personalInfo.social.twitter,
    color: "hover:border-sky-500/30 hover:bg-sky-500/5 hover:text-sky-400",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "alexnakamoto",
    href: personalInfo.social.github,
    color: "hover:border-slate-400/30 hover:bg-slate-400/5 hover:text-slate-200",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "alexnakamoto",
    href: personalInfo.social.linkedin,
    color: "hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-400",
  },
  {
    icon: DiscordIcon,
    label: "Discord",
    handle: "alexnakamoto#0001",
    href: personalInfo.social.discord,
    color: "hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-400",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <SectionWrapper
      id="contact"
      label="06 / Contact"
      title="Let's Build Together"
      subtitle="Have a project, partnership, or just want to say gm? My DMs are open."
      className="relative"
    >
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left panel — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Email */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Response time */}
          <div className="p-5 rounded-xl border border-cyan-500/15 bg-cyan-500/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Currently Available</span>
            </div>
            <p className="text-slate-300 text-sm">
              Accepting new community management and content strategy projects. Response time: &lt;24h.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Social & Handles</p>
            <div className="space-y-2">
              {socials.map(({ icon: Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
                    text-slate-400 transition-all duration-200 group ${color}`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                  <span className="ml-auto text-xs opacity-50 font-mono">{handle}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right panel — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-xs text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Satoshi N."
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-slate-600
                        focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@protocol.xyz"
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-slate-600
                        focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-[#06061a] text-slate-300 text-sm
                      focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="community">Community Management</option>
                    <option value="content">Content Strategy</option>
                    <option value="launch">Protocol Launch Campaign</option>
                    <option value="newsletter">Newsletter / Writing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-slate-600 resize-none
                      focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                  />
                </div>

                <Button size="lg" className="w-full justify-center">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
