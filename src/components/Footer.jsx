import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, LeetCode } from "./Icons";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="f-title">{PROFILE.name}</span>
            <span className="f-role">{PROFILE.role}</span>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {new Date().getFullYear()} {PROFILE.name}. Built for high-performance AI/ML engineering.
          </div>

          <div className="footer-social-links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" title="GitHub">
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <span className="dot-sep">•</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <span className="dot-sep">•</span>
            <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" title="LeetCode">
              <LeetCode size={15} />
              <span>LeetCode</span>
            </a>
            <span className="dot-sep">•</span>
            <a href={`mailto:${PROFILE.email}`} title="Email">
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
