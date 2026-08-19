import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">06 / ACADEMIC BACKGROUND</div>
        <h2 className="section-title">Education & qualifications.</h2>
      </div>

      <div className="education-cards-grid">
        {EDUCATION.map((edu, idx) => (
          <div className={`education-card ${idx === 0 ? "highlight-card" : ""}`} key={idx}>
            <div className="edu-card-header">
              <div className="edu-icon-wrap">
                <GraduationCap size={20} />
              </div>
              <div className="edu-date-wrap">
                <Calendar size={13} />
                <span>{edu.period}</span>
              </div>
            </div>

            <h3 className="edu-degree">{edu.degree}</h3>
            <div className="edu-institution">{edu.institution}</div>

            <div className="edu-meta-row">
              <div className="edu-location">
                <MapPin size={13} />
                <span>{edu.location}</span>
              </div>
              <div className="edu-cgpa-badge">
                <Award size={13} />
                <span>Score: <strong>{edu.cgpa}</strong></span>
              </div>
            </div>

            <p className="edu-focus">{edu.focus}</p>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className="edu-points">
                {edu.highlights.map((item, hIdx) => (
                  <div className="edu-point-item" key={hIdx}>
                    <span className="bullet">▹</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
