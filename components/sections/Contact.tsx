"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { TwitterXIcon, GithubIcon, LinkedinIcon, DiscordIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: TwitterXIcon, label: "Twitter / X",    handle: "@RaphElevator",   href: personalInfo.social.twitter },
  { icon: GithubIcon,   label: "GitHub",          handle: "angelraph",       href: personalInfo.social.github },
  { icon: LinkedinIcon, label: "LinkedIn",        handle: "angelraph",       href: personalInfo.social.linkedin },
  { icon: DiscordIcon,  label: "Discord",         handle: "angelraph",       href: personalInfo.social.discord },
];

interface FormState { name: string; email: string; subject: string; message: string; }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    border: "1px solid #E2E8F0", background: "#F8FAFC",
    color: "#0F172A", fontSize: "14px", outline: "none",
  };

  return (
    <SectionWrapper
      id="contact"
      label="04 / Contact"
      title="Let's Build Together"
      subtitle="Have a project, partnership, or just want to say gm? My DMs are open."
      className="relative"
      style={{ background: "#FFFFFF" } as React.CSSProperties}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.07)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.06)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>Email</p>
            <a href={`mailto:${personalInfo.email}`} className="font-medium transition-colors duration-200"
              style={{ color: "#0F172A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0F172A")}
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Availability */}
          <div className="p-5 rounded-xl" style={{ border: "1px solid rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.06)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#7C3AED" }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7C3AED" }}>Currently Available</span>
            </div>
            <p className="text-sm" style={{ color: "#475569" }}>
              Accepting new community management and content strategy projects. Response time: &lt;24h.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#94A3B8" }}>Social & Handles</p>
            <div className="space-y-2">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{ border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#475569" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)"; e.currentTarget.style.background = "rgba(124,58,237,0.06)"; e.currentTarget.style.color = "#0F172A"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.color = "#475569"; }}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                  <span className="ml-auto text-xs font-mono opacity-50">{handle}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl p-8" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC" }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <CheckCircle className="h-16 w-16 mx-auto mb-4" style={{ color: "#7C3AED" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#475569" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-xs underline transition-colors" style={{ color: "#7C3AED" }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Uzoechi Raphael"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@protocol.xyz"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required
                    style={{ ...inputStyle, background: "#F8FAFC" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <option value="" disabled style={{ background: "#F8FAFC" }}>Select a topic...</option>
                    <option value="launch"    style={{ background: "#F8FAFC" }}>Protocol Launch Campaign</option>
                    <option value="webdev"    style={{ background: "#F8FAFC" }}>Web Developing</option>
                    <option value="content"   style={{ background: "#F8FAFC" }}>Content Strategy</option>
                    <option value="community" style={{ background: "#F8FAFC" }}>Community Management</option>
                    <option value="newsletter"style={{ background: "#F8FAFC" }}>Newsletter / Writing</option>
                    <option value="other"     style={{ background: "#F8FAFC" }}>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                <Button size="lg" className="w-full justify-center">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <> Send Message <Send className="h-4 w-4" /> </>
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
