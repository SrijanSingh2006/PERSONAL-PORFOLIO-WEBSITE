import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">04 / WORK EXPERIENCE</div>
        <h2 className="section-title">Hands-on, project-driven experience.</h2>
      </div>

      <div className="experience-timeline">
        {EXPERIENCE.map((exp, idx) => (
          <div className="timeline-card-wrapper" key={idx}>
            <div className="timeline-node-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>

            <div className="experience-card">
              <div className="exp-card-header">
                <div className="role-and-company">
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company-name">{exp.company}</span>
                    <span className="exp-badge">{exp.type}</span>
                  </div>
                </div>

                <div className="exp-date-badge">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="exp-main-desc">{exp.description}</p>

              <div className="exp-highlights-list">
                {exp.highlights.map((point, pIdx) => (
                  <div className="exp-point" key={pIdx}>
                    <CheckCircle size={14} className="point-icon" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="exp-skills-row">
                {exp.skills.map((skill) => (
                  <span className="exp-skill-tag" key={skill}>
                    {skill}
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
