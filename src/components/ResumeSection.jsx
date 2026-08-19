import { FileText, Download, Eye, CheckCircle, Sparkles, Award } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ResumeSection({ onOpenResume }) {
  const resumeBullets = [
    "AI/ML Developer with hands-on experience in ML, DL (RNN/LSTM/GRU), NLP, and CV",
    "B.Tech in Computer Science and Engineering from SRMIST (9.14 / 10 CGPA)",
    "6 End-to-End Projects: AGRICOMPLY, EmotionAI (92.1%), Mentalytics, ECOSHIELD, TRIPMACHA, DataLens",
    "Internship experience at CodeAlpha (ML) and Prodigy Infotech (Full Stack)",
    "4 Professional Certifications across SAP Generative AI and NPTEL (ML, Database, Java)"
  ];

  return (
    <section id="resume" className="section-container">
      <div className="resume-showcase-card">
        <div className="resume-content-left">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>09 / CURRICULUM VITAE</span>
          </div>

          <h2 className="resume-headline">Ready for AI / Machine Learning Opportunities.</h2>
          <p className="resume-sub">
            Review my complete resume covering academic excellence, internship experience, machine learning pipelines, and technical skill stack.
          </p>

          <div className="resume-points-list">
            {resumeBullets.map((bullet, idx) => (
              <div className="resume-point" key={idx}>
                <CheckCircle size={15} className="resume-check" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="resume-actions-group">
            <button
              onClick={onOpenResume}
              className="btn-resume-primary"
            >
              <Eye size={17} />
              <span>View Resume in Modal</span>
            </button>

            <a
              href={`mailto:${PROFILE.email}?subject=Resume%20Request%20-%20Srijan%20Singh%20(AI/ML%20Developer)&body=Hi%20Srijan,%0A%0AWe%20would%20like%20to%20request%20your%20latest%20resume%20for%20an%20AI/ML%20opportunity.`}
              className="btn-resume-secondary"
            >
              <Download size={17} />
              <span>Request / Download Resume</span>
            </a>
          </div>
        </div>

        <div className="resume-preview-right">
          <div className="resume-doc-frame" onClick={onOpenResume}>
            <div className="doc-top-bar">
              <div className="doc-dots"><i></i><i></i><i></i></div>
              <span>Srijan_Singh_Resume.pdf</span>
            </div>
            <div className="doc-content-mini">
              <div className="mini-header-line">
                <strong>{PROFILE.name}</strong>
                <span>{PROFILE.role}</span>
              </div>
              <div className="mini-divider"></div>
              <div className="mini-section-row">
                <span className="mini-tag">EDUCATION</span>
                <span>SRMIST — B.Tech CSE (9.14 CGPA)</span>
              </div>
              <div className="mini-section-row">
                <span className="mini-tag">SKILLS</span>
                <span>Python • PyTorch • TensorFlow • Scikit-learn • FastAPI</span>
              </div>
              <div className="mini-section-row">
                <span className="mini-tag">PROJECTS</span>
                <span>EmotionAI (92.1%) • AGRICOMPLY • Mentalytics</span>
              </div>
              <div className="mini-section-row">
                <span className="mini-tag">EXPERIENCE</span>
                <span>CodeAlpha (ML) • Prodigy Infotech</span>
              </div>
            </div>
            <div className="doc-overlay-hover">
              <Eye size={22} />
              <span>Click to View Full Credentials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
