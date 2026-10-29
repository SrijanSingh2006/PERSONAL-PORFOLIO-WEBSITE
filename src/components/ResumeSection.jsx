import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Eye, FileText } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="resume-editorial">
      <div className="section-shell resume-layout">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="resume-intro">
          <p className="eyebrow"><span>04</span> RÉSUMÉ</p>
          <h2>The short version<br /><em>is here.</em></h2>
          <p>Computer Science at SRMIST, 9.14 CGPA. Three internships across AI workflows, internal tools, and quality pipelines. Seven projects where I’ve put those ideas into practice.</p>
          <div className="resume-actions">
            <a className="resume-download" href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer"><Download size={16} /> Open résumé PDF <ArrowUpRight size={14} /></a>
            <button className="resume-preview-link" onClick={onOpenResume}><Eye size={16} /> View details</button>
          </div>
          <span className="resume-file-note"><FileText size={13} /> Srijan_Singh_Resume.pdf · Updated 2026</span>
        </motion.div>

        <motion.button initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onClick={onOpenResume} className="resume-paper" aria-label="Open résumé preview">
          <div className="paper-header"><span>SS<span className="paper-dot">.</span></span><span>COMPUTER SCIENCE · 2023—27</span></div>
          <div className="paper-title"><h3>{PROFILE.name}</h3><p>{PROFILE.role}</p></div>
          <div className="paper-rule" />
          <div className="paper-focus"><span>FOCUS</span><p>Agentic AI <i>·</i> RAG <i>·</i> LLM evaluation <i>·</i> Full-stack tools</p></div>
          <div className="paper-columns">
            <div><span>EXPERIENCE</span><strong>CodeAlpha</strong><small>AI Research & Workflow Engineering</small><strong>Prodigy Infotech</strong><small>Full-Stack AI Tooling & Schema Engineering</small></div>
            <div><span>SELECTED WORK</span><strong>TRIPMACHA</strong><small>Agentic workflow & QC pipeline</small><strong>AGRICOMPLY</strong><small>RAG & human review gates</small></div>
          </div>
          <div className="paper-footer"><span>PYTHON · TYPESCRIPT · REACT · FASTAPI</span><span>9.14 / 10 <ArrowDownRight size={13} /></span></div>
        </motion.button>
      </div>
    </section>
  );
}
