import { Award, BriefcaseBusiness, MapPin } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-shell experience-layout">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Where I’ve worked<span className="heading-period">.</span></h2>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((exp) => (
            <article key={exp.company} className="experience-row">
              <span className="feature-icon"><BriefcaseBusiness size={20} strokeWidth={1.75} /></span>
              <div className="experience-main">
                <div className="experience-meta"><strong>{exp.company}</strong><span>{exp.date} <span aria-hidden="true">·</span> <MapPin size={13} /> {exp.location}</span></div>
                <h3>{exp.role}</h3>
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {exp.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {exp.certificateUrl && <a className="text-link" href={exp.certificateUrl} target="_blank" rel="noreferrer" aria-label={`View ${exp.company} certificate`}>View certificate</a>}
              </div>
            </article>
          ))}
        </div>

        <div className="credentials-block">
          <h3><Award size={22} /> Courses & credentials</h3>
          <ul className="credentials-grid">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.id}>
                {cert.certificateUrl
                  ? <a href={cert.certificateUrl} target="_blank" rel="noreferrer">{cert.title}</a>
                  : <span>{cert.title}</span>}
                <small>{cert.issuer} · {cert.date}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
