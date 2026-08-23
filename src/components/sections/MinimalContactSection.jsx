import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";

export default function MinimalContactSection() {
  return (
    <section id="contact" className="w-full py-28 section-gradient relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#6366f1]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-4">Get In Touch</div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-textMuted max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Items */}
            {[
              {
                icon: <Mail size={18} />,
                label: "Email Me",
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
                color: "#6366f1",
              },
              {
                icon: <Phone size={18} />,
                label: "Call Me",
                value: `+91 ${PROFILE.phone}`,
                href: `tel:+91${PROFILE.phone}`,
                color: "#8b5cf6",
              },
              {
                icon: <MapPin size={18} />,
                label: "Location",
                value: PROFILE.location,
                href: null,
                color: "#22d3ee",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass-card p-5 flex items-center gap-4"
                style={{ borderColor: `${item.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-textSubtle mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-textMain hover:text-[#818cf8] transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-textMain text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-5 mt-2"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-textSubtle mb-4">Connect Online</p>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, href: PROFILE.github, label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: PROFILE.linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm font-medium text-textMuted hover:text-[#a5b4fc] border border-[rgba(99,102,241,0.2)] hover:border-[rgba(99,102,241,0.5)] transition-all"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.15 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <h3 className="font-display font-bold text-xl mb-6 gradient-text">Send a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-textSubtle uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="picto-input"
                  id="contact-name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-textSubtle uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="picto-input"
                  id="contact-email"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-textSubtle uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  placeholder="Project / Opportunity / Collaboration"
                  className="picto-input"
                  id="contact-subject"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-textSubtle uppercase tracking-wider">Message</label>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  className="picto-input resize-none"
                  id="contact-message"
                />
              </div>
              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full justify-center gap-2"
                  id="contact-submit-btn"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
