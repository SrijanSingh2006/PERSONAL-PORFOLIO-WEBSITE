import { useEffect } from "react";
import { X, Mail, Phone, MapPin, Download, ExternalLink, GraduationCap, Briefcase, Code, Award, CheckCircle2 } from "lucide-react";
import { PROFILE, EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container resume-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-category-badge">CURRICULUM VITAE</div>
            <h2 className="modal-title">{PROFILE.name}</h2>
            <p className="modal-subtitle">{PROFILE.role}</p>
          </div>

          <div className="modal-header-actions">
            <a
              href={`mailto:${PROFILE.email}?subject=Resume%20Inquiry%20-%20Srijan%20Singh&body=Hi%20Srijan,%0A%0AWe%20are%20interested%20in%20discussing%20an%20AI/ML%20Developer%20role.`}
              className="modal-action-btn live"
            >
              <Mail size={15} />
              <span>Email Srijan</span>
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close resume">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body-content resume-modal-scroll">
          <div className="resume-contact-bar">
            <div className="r-item"><Mail size={14} /> <span>{PROFILE.email}</span></div>
            <div className="r-item"><Phone size={14} /> <span>+91 {PROFILE.phone}</span></div>
            <div className="r-item"><MapPin size={14} /> <span>{PROFILE.location}</span></div>
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-text">{PROFILE.bio}</p>
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">EDUCATION</h3>
            {EDUCATION.map((edu, idx) => (
              <div className="resume-sub-item" key={idx}>
                <div className="r-item-head">
                  <strong>{edu.degree}</strong>
                  <span className="r-date">{edu.period}</span>
                </div>
                <div className="r-inst">{edu.institution} — <span className="r-score">CGPA / Score: {edu.cgpa}</span></div>
                <p className="r-desc">{edu.focus}</p>
              </div>
            ))}
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">EXPERIENCE</h3>
            {EXPERIENCE.map((exp, idx) => (
              <div className="resume-sub-item" key={idx}>
                <div className="r-item-head">
                  <strong>{exp.role} — {exp.company}</strong>
                  <span className="r-date">{exp.period}</span>
                </div>
                <p className="r-desc">{exp.description}</p>
                <div className="r-bullets">
                  {exp.highlights.map((h, hIdx) => (
                    <div className="r-bullet" key={hIdx}>
                      <span>▹</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-grid">
              {SKILL_CATEGORIES.map((cat) => (
                <div className="r-skill-row" key={cat.id}>
                  <strong>{cat.title}:</strong>
                  <span>{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">CERTIFICATIONS</h3>
            <div className="resume-certs-list">
              {CERTIFICATIONS.map((cert) => (
                <div className="r-cert-row" key={cert.id}>
                  <div className="r-cert-head">
                    <strong>{cert.title}</strong>
                    <span className="r-date">{cert.issuer} • {cert.date}</span>
                  </div>
                  <p className="r-desc">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="footer-left">
            <span>SRMIST Kattankulathur • Chennai, India</span>
          </div>
          <div className="footer-right">
            <button className="modal-close-secondary" onClick={onClose}>
              Close Preview
            </button>
            <a
              href={`mailto:${PROFILE.email}?subject=Resume%20Inquiry%20-%20Srijan%20Singh`}
              className="modal-github-action"
            >
              <Mail size={16} />
              <span>Contact Directly via Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
