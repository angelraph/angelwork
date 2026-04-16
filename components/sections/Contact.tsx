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
    border: "1px solid rgba(255,255,255,0.08)", background: "#D93B2F",
    color: "#F5F5F5", fontSize: "14px", outline: "none",
  };

  return (
    <SectionWrapper
      id="contact"
      label="06 / Contact"
      title="Let's Build Together"
      subtitle="Have a project, partnership, or just want to say gm? My DMs are open."
      className="relative"
      style={{ background: "#EA4335" } as React.CSSProperties}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(229,231,235,0.07)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(229,231,235,0.06)" }} />

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
            <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#BDBDBD" }}>Email</p>
            <a href={`mailto:${personalInfo.email}`} className="font-medium transition-colors duration-200"
              style={{ color: "#F5F5F5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E7EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Availability */}
          <div className="p-5 rounded-xl" style={{ border: "1px solid rgba(229,231,235,0.25)", background: "rgba(229,231,235,0.06)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#E5E7EB" }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#E5E7EB" }}>Currently Available</span>
            </div>
            <p className="text-sm" style={{ color: "#E0E0E0" }}>
              Accepting new community management and content strategy projects. Response time: &lt;24h.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#BDBDBD" }}>Social & Handles</p>
            <div className="space-y-2">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", color: "#E0E0E0" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(229,231,235,0.3)"; e.currentTarget.style.background = "rgba(229,231,235,0.06)"; e.currentTarget.style.color = "#F5F5F5"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.color = "#E0E0E0"; }}
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
          <div className="rounded-2xl p-8" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#D93B2F" }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <CheckCircle className="h-16 w-16 mx-auto mb-4" style={{ color: "#E5E7EB" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#F5F5F5" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#E0E0E0" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-xs underline transition-colors" style={{ color: "#E5E7EB" }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#E0E0E0" }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Satoshi N."
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(229,231,235,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229,231,235,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#E0E0E0" }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@protocol.xyz"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(229,231,235,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229,231,235,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#E0E0E0" }}>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required
                    style={{ ...inputStyle, background: "#D93B2F" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(229,231,235,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229,231,235,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <option value="" disabled style={{ background: "#D93B2F" }}>Select a topic...</option>
                    <option value="community" style={{ background: "#D93B2F" }}>Community Management</option>
                    <option value="content"   style={{ background: "#D93B2F" }}>Content Strategy</option>
                    <option value="launch"    style={{ background: "#D93B2F" }}>Protocol Launch Campaign</option>
                    <option value="newsletter"style={{ background: "#D93B2F" }}>Newsletter / Writing</option>
                    <option value="other"     style={{ background: "#D93B2F" }}>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#E0E0E0" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(229,231,235,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229,231,235,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
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
