import { motion } from "framer-motion";
import { ArrowUpRight, Award, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-editorial">
      <div className="section-shell">
        <div className="experience-heading">
          <div><p className="eyebrow"><span>03</span> EXPERIENCE & LEARNING</p><h2>Learning by <span>shipping.</span></h2></div>
          <p>Internships and team work that taught me to build for real workflows, with the people who use them.</p>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((exp, index) => (
            <motion.article key={`${exp.company}-${exp.role}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-25px" }} transition={{ duration: .4, delay: index * .06 }} className="experience-row">
              <div className="experience-date"><span>0{index + 1}</span><p>{exp.date}</p></div>
              <div className="experience-main">
                <div className="experience-meta"><span>{exp.company}</span><span><MapPin size={12} /> {exp.location}</span></div>
                <h3>{exp.role}</h3>
                <ul>{exp.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="experience-tools">{exp.technologies?.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
              <div className="experience-link">
                {exp.certificateUrl ? <a href={exp.certificateUrl} target="_blank" rel="noreferrer" aria-label={`${exp.company} certificate`}><ArrowUpRight size={17} /></a> : <BriefcaseBusiness size={17} />}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="credentials-block">
          <div className="credentials-heading"><div><Award size={17} /><h3>Courses & credentials</h3></div><span>7 COMPLETED</span></div>
          <div className="credentials-grid">
            {CERTIFICATIONS.map((cert, index) => (
              <a key={cert.id || cert.title} href={cert.certificateUrl || undefined} target={cert.certificateUrl ? "_blank" : undefined} rel={cert.certificateUrl ? "noreferrer" : undefined} className="credential-item">
                <span className="credential-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="credential-name">{cert.title}<small>{cert.issuer} · {cert.date}</small></span>
                {cert.certificateUrl && <ArrowUpRight size={14} className="credential-arrow" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
