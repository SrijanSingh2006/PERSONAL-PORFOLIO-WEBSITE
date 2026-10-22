import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Download, ExternalLink, GraduationCap, Briefcase, Code, Award, CheckCircle2, Sparkles, FolderGit2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PROFILE, EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES, PROJECTS, SUMMARY } from "../data/portfolioData";

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
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0b0f19] border border-[rgba(99,102,241,0.25)] shadow-[0_0_60px_rgba(99,102,241,0.25)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[rgba(99,102,241,0.15)] bg-gradient-to-b from-[#111827] to-[#0b0f19]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  CURRICULUM VITAE • AI GENERALIST & SYSTEMS DEVELOPER
                </span>
                <span className="text-xs font-mono text-[#818cf8] px-2.5 py-0.5 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20">
                  CGPA: 9.14/10
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-textMain tracking-tight">
                {PROFILE.name}
              </h2>
              <p className="text-sm text-[#a5b4fc] font-medium mt-0.5">
                {PROFILE.role} • {PROFILE.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PROFILE.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold glass text-textMain border border-[rgba(99,102,241,0.3)] hover:border-[#818cf8] hover:text-[#818cf8] transition-all"
              >
                <Download size={14} />
                <span>Drive PDF ↗</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}?subject=Internship%20Inquiry%20-%20Srijan%20Singh`}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-glow-sm hover:opacity-90 transition-all"
              >
                <Mail size={14} />
                <span>Email Candidate</span>
              </a>
              <button
                onClick={onClose}
                aria-label="Close resume"
                className="w-9 h-9 rounded-full glass border border-[rgba(99,102,241,0.2)] flex items-center justify-center text-textMuted hover:text-white hover:border-[#ef4444] hover:bg-[#ef4444]/20 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="px-6 sm:px-8 py-3 bg-[#070b13] border-b border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-textMuted font-mono">
            <div className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#818cf8]" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">{PROFILE.email}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#818cf8]" />
              <a href="tel:+919838027276" className="hover:text-white transition-colors">{PROFILE.phone}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#818cf8]" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-[#818cf8] transition-colors">GitHub ↗</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-textMuted hover:text-[#818cf8] transition-colors">LinkedIn ↗</a>
              <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" className="text-textMuted hover:text-[#818cf8] transition-colors">LeetCode ↗</a>
            </div>
          </div>

          {/* Scrollable Document Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Summary */}
            <div className="glass-card p-5 border border-[rgba(99,102,241,0.2)]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#818cf8] mb-2 flex items-center gap-2">
                <Sparkles size={14} />
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                {SUMMARY}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="section-label mb-3 flex items-center gap-2">
                <GraduationCap size={16} />
                Education
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="glass-card p-4 border border-[rgba(99,102,241,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-sm text-textMain">{edu.degree}</h4>
                      <p className="text-xs text-[#818cf8] font-medium">{edu.institution}</p>
                      {edu.focus && <p className="text-[11px] text-textSubtle mt-1">{edu.focus}</p>}
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-mono font-bold text-[#22d3ee] block">{edu.score}</span>
                      <span className="text-[11px] text-textSubtle font-mono">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div>
              <h3 className="section-label mb-3 flex items-center gap-2">
                <Code size={16} />
                Core Competencies & Tooling
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id || cat.title} className="glass-card p-4 border border-[rgba(99,102,241,0.15)]">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-lg">{cat.icon}</span>
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider" style={{ color: cat.color }}>
                        {cat.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-textMuted border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Internship Experience */}
            <div>
              <h3 className="section-label mb-3 flex items-center gap-2">
                <Briefcase size={16} />
                Internship Experience & Responsibility
              </h3>
              <div className="space-y-4">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="glass-card p-5 border border-[rgba(99,102,241,0.18)]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-textMain">{exp.role}</h4>
                          {exp.certificateUrl && (
                            <a
                              href={exp.certificateUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] font-bold text-[#818cf8] hover:underline"
                            >
                              [Certificate ↗]
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-[#818cf8] font-semibold">{exp.company} • <span className="text-textSubtle">{exp.location}</span></p>
                      </div>
                      <span className="text-xs font-mono text-textSubtle">{exp.period}</span>
                    </div>
                    {exp.overview && (
                      <p className="text-xs text-[#a5b4fc] font-medium leading-relaxed mb-2.5">{exp.overview}</p>
                    )}
                    {exp.highlights && (
                      <div className="space-y-1.5 border-t border-white/5 pt-2.5">
                        {exp.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-textMuted leading-relaxed">
                            <span className="text-[#818cf8] mt-0.5">▹</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="section-label mb-3 flex items-center gap-2">
                <FolderGit2 size={16} />
                Key Projects & Technical Platforms (All 7)
              </h3>
              <div className="grid grid-cols-1 gap-3.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="glass-card p-4 border border-[rgba(99,102,241,0.15)]">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <span className="font-display font-bold text-sm text-textMain mr-2">{proj.title}</span>
                        <span className="text-[11px] font-mono text-[#818cf8]">| {proj.subtitle}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-mono text-textSubtle">{proj.date}</span>
                        {proj.githubLink && (
                          <a
                            href={proj.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-[#818cf8] hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Github size={12} />
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>
                    {proj.domain && (
                      <p className="text-[11px] font-mono text-textSubtle mb-1">Domain: {proj.domain}</p>
                    )}
                    <div className="space-y-1 mt-2 mb-2">
                      {proj.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-textMuted leading-relaxed">
                          <span className="text-[#818cf8] mt-0.5">▹</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {proj.technologies.slice(0, 6).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6366f1]/10 text-[#a5b4fc] border border-[#6366f1]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="section-label mb-3 flex items-center gap-2">
                <Award size={16} />
                Certifications & Programs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="glass-card p-3.5 border border-[rgba(99,102,241,0.15)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#818cf8] font-bold mb-1">
                        <span>{cert.issuer}</span>
                        <span className="text-textSubtle font-mono">{cert.date}</span>
                      </div>
                      <h4 className="font-display font-bold text-xs text-textMain mb-1">{cert.title}</h4>
                      {cert.focusDomain && (
                        <p className="text-[10px] font-mono text-[#818cf8] mb-1.5">{cert.focusDomain}</p>
                      )}
                      <p className="text-[11px] text-textMuted line-clamp-2">{cert.description}</p>
                    </div>
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-bold text-[#818cf8] hover:underline mt-2 flex items-center gap-1"
                      >
                        Verify Certificate ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-[rgba(99,102,241,0.15)] bg-[#070b13] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-textSubtle">
              Srijan Singh • SRMIST Kattankulathur • Available for High-Impact Internship & Engineering Roles
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-semibold text-textMuted hover:text-white glass transition-all"
              >
                Close Preview
              </button>
              <a
                href={PROFILE.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 !px-4 !text-xs gap-2"
              >
                <Download size={14} />
                <span>Open Drive Resume ↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
