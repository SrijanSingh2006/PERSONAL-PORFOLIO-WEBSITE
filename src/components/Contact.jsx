import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, FileText, Sparkles, ArrowUpRight } from "lucide-react";
import { Github, Linkedin, LeetCode } from "./Icons";
import { PROFILE } from "../data/portfolioData";

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="contact-main-grid">
        <div className="contact-copy-column">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>10 / GET IN TOUCH</span>
          </div>
          <h2 className="contact-headline">Let’s build something intelligent.</h2>
          <p className="contact-lead-text">
            I'm open to AI/ML Developer opportunities, Machine Learning roles, software engineering positions, internships, and collaborative projects.
          </p>

          {/* Quick Contact Cards */}
          <div className="contact-info-boxes">
            <div className="contact-card-box">
              <div className="box-left">
                <div className="box-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="box-label">EMAIL ADDRESS</span>
                  <a href={`mailto:${PROFILE.email}`} className="box-value link">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <button
                className="btn-copy-small"
                onClick={copyEmail}
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="copied" /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-card-box">
              <div className="box-left">
                <div className="box-icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="box-label">PHONE / WHATSAPP</span>
                  <a href={`tel:+91${PROFILE.phone}`} className="box-value link">
                    +91 {PROFILE.phone}
                  </a>
                </div>
              </div>
              <button
                className="btn-copy-small"
                onClick={copyPhone}
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={14} className="copied" /> : <Copy size={14} />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-card-box">
              <div className="box-left">
                <div className="box-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="box-label">LOCATION & TIMEZONE</span>
                  <div className="box-value">{PROFILE.location} (IST / UTC+5:30)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="contact-actions-panel">
          <div className="actions-glass-card">
            <div className="card-top-header">
              <span className="dot-active"></span>
              <span>DIRECT CHANNELS & PROFILES</span>
            </div>

            <div className="direct-buttons-list">
              <a
                href={`mailto:${PROFILE.email}?subject=AI/ML%20Opportunity%20-%20Srijan%20Singh`}
                className="contact-channel-btn primary"
              >
                <Send size={18} />
                <span>Send Email Directly</span>
                <ArrowUpRight size={15} className="arr-right" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-btn"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={15} className="arr-right" />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-btn"
              >
                <Github size={18} />
                <span>Explore GitHub Repositories</span>
                <ArrowUpRight size={15} className="arr-right" />
              </a>

              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-btn"
              >
                <LeetCode size={18} />
                <span>View LeetCode Profile</span>
                <ArrowUpRight size={15} className="arr-right" />
              </a>

              <button
                onClick={onOpenResume}
                className="contact-channel-btn resume-btn"
              >
                <FileText size={18} />
                <span>Review & Download Resume</span>
                <ArrowUpRight size={15} className="arr-right" />
              </button>
            </div>

            <div className="response-time-badge">
              <Sparkles size={13} />
              <span>Typically responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
