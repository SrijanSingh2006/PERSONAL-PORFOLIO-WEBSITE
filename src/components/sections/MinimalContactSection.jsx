import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";

export default function MinimalContactSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="contact-editorial">
      <div className="section-shell contact-layout">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="contact-message">
          <p className="eyebrow"><span>05</span> GET IN TOUCH</p>
          <p className="contact-note">For teams building something thoughtful</p>
          <h2>Have a real problem?<br /><span>Let’s talk it through.</span></h2>
          <p className="contact-description">I’m open to AI/ML internships and engineering opportunities. If your team cares about making AI useful and dependable, I’d be glad to hear what you’re working on.</p>
          <a href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Hello from your portfolio")}`} className="contact-primary">Write me an email <ArrowUpRight size={17} /></a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="contact-card">
          <div className="contact-card-heading"><span>CONTACT DETAILS</span><span className="contact-card-mark">SS / 26</span></div>
          <div className="contact-detail-row">
            <div className="contact-detail-icon"><Mail size={17} /></div>
            <div className="contact-detail-copy"><span>EMAIL</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <button className="copy-email" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">{copied ? <Check size={16} /> : <Copy size={15} />}</button>
          </div>
          <div className="contact-detail-row">
            <div className="contact-detail-icon"><Phone size={17} /></div>
            <div className="contact-detail-copy"><span>PHONE</span><a href="tel:+919838027276">{PROFILE.phone}</a></div>
            <ArrowUpRight size={15} className="contact-row-arrow" />
          </div>
          <div className="contact-detail-row">
            <div className="contact-detail-icon"><MapPin size={17} /></div>
            <div className="contact-detail-copy"><span>BASED IN</span><p>{PROFILE.location}</p></div>
          </div>
          <div className="contact-card-footer"><span>FIND ME ONLINE</span><div>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">LC</a>
          </div></div>
        </motion.div>
      </div>
    </section>
  );
}
