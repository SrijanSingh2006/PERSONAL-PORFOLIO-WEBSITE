import { Download, Eye, FileText } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="section resume-section">
      <div className="section-shell">
        <div className="resume-layout">
          <div className="section-heading">
            <p className="eyebrow">Résumé</p>
            <h2>Experience at a glance<span className="heading-period">.</span></h2>
            <p>Computer Science at SRMIST, {PROFILE.cgpa} CGPA. Three internships across software and AI evaluation, full-stack development, and machine learning data quality.</p>
            <div className="resume-actions">
              <button type="button" className="button button-primary" onClick={onOpenResume}><Eye size={18} /> Preview résumé</button>
              <a className="button button-outline" href={PROFILE.resumePdfUrl} download><Download size={17} /> Download PDF</a>
            </div>
          </div>

          <button type="button" className="resume-paper" onClick={onOpenResume} aria-label="Open résumé preview">
            <span className="resume-paper-image">
              <img src={`${import.meta.env.BASE_URL}resume-deccan/page-1.png`} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="resume-paper-caption"><FileText size={17} /> {PROFILE.name} · Résumé</span>
          </button>
        </div>
      </div>
    </section>
  );
}
