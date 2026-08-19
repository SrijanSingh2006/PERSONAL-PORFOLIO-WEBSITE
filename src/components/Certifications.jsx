import { Award, CheckCircle2, Calendar, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">07 / CERTIFICATIONS & CREDENTIALS</div>
        <h2 className="section-title">Continuous learning & industry certifications.</h2>
      </div>

      <div className="certifications-grid">
        {CERTIFICATIONS.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-top-row">
              <div className="cert-issuer-badge">
                <ShieldCheck size={14} />
                <span>{cert.issuer}</span>
              </div>
              <div className="cert-date">
                <Calendar size={13} />
                <span>{cert.date}</span>
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-description">{cert.description}</p>

            <div className="cert-topics-section">
              <div className="topics-heading">Key Topics Covered:</div>
              <div className="topics-chips-wrap">
                {cert.topics.map((topic) => (
                  <span className="topic-pill" key={topic}>
                    <CheckCircle2 size={11} className="topic-check" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
