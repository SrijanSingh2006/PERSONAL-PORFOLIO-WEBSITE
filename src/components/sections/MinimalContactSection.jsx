import { useEffect, useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { Github, LeetCode, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";

export default function MinimalContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell contact-layout">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s work together<span className="heading-period">.</span></h2>
          <p>I’m open to AI/ML, software engineering, and full-stack opportunities. If you have a project or role in mind, I’d love to hear about it.</p>
          <a href={`mailto:${PROFILE.email}`} className="button button-primary"><Mail size={17} /> Send me an email</a>
        </div>

        <address className="contact-card">
          <div className="contact-row">
            <span className="feature-icon"><Mail size={19} /></span>
            <div><span>Email</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <button type="button" className="icon-button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">{copied ? <Check size={17} /> : <Copy size={17} />}</button>
            <span className="sr-only" role="status">{copied ? "Email address copied" : ""}</span>
          </div>
          <div className="contact-row">
            <span className="feature-icon"><Phone size={19} /></span>
            <div><span>Phone</span><a href={`tel:${PROFILE.phone.replaceAll(" ", "")}`}>{PROFILE.phone}</a></div>
          </div>
          <div className="contact-row">
            <span className="feature-icon"><MapPin size={19} /></span>
            <div><span>Location</span><p>{PROFILE.location}</p></div>
          </div>
          <div className="contact-socials" aria-label="Social profiles">
            <a className="icon-button" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={18} /></a>
            <a className="icon-button" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18} /></a>
            <a className="icon-button" href={PROFILE.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode"><LeetCode size={17} /></a>
          </div>
        </address>
      </div>
    </section>
  );
}
