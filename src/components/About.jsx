import { GraduationCap, MapPin, Target, Award, Brain, Terminal, Database, Server } from "lucide-react";
import { PROFILE, ABOUT_PARAGRAPHS } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Complete ML Lifecycle",
      text: "From raw data ingestion and exploratory analysis to model tuning and evaluation."
    },
    {
      icon: Terminal,
      title: "Deep Learning & NLP",
      text: "Sequence modeling with RNN, LSTM, GRU, BiGRU architectures and text classification."
    },
    {
      icon: Server,
      title: "API & Microservices",
      text: "Deploying high-throughput inference endpoints using FastAPI, Flask, and Docker."
    },
    {
      icon: Database,
      title: "Full-Stack Integration",
      text: "Connecting AI backends with React interfaces, Redis queues, and cloud storage."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">01 / ABOUT ME</div>
        <h2 className="section-title">Turning ML concepts into working, production-ready applications.</h2>
      </div>

      <div className="about-main-grid">
        <div className="about-text-column">
          <p className="about-lead">
            {ABOUT_PARAGRAPHS[0]}
          </p>

          <p className="about-body">
            {ABOUT_PARAGRAPHS[1]}
          </p>

          <p className="about-body">
            {ABOUT_PARAGRAPHS[2]}
          </p>

          <p className="about-body">
            {ABOUT_PARAGRAPHS[3]}
          </p>

          <div className="competencies-grid">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div className="competency-card" key={idx}>
                  <div className="competency-icon">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-card-column">
          <div className="profile-glass-card">
            <div className="card-top-header">
              <span className="dot-active"></span>
              <span>ACADEMIC & PROFESSIONAL PROFILE</span>
            </div>

            <div className="profile-info-list">
              <div className="info-item">
                <div className="info-label">
                  <GraduationCap size={15} />
                  <span>Education</span>
                </div>
                <div className="info-value">B.Tech — CSE</div>
                <div className="info-sub">{PROFILE.college}</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <Award size={15} />
                  <span>Academic Standing</span>
                </div>
                <div className="info-value highlight-accent">{PROFILE.cgpa} CGPA</div>
                <div className="info-sub">Expected Graduation: {PROFILE.graduationYear}</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <Target size={15} />
                  <span>Primary Specialization</span>
                </div>
                <div className="info-value">AI / Machine Learning</div>
                <div className="info-sub">Predictive Modeling & Deep Learning</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <MapPin size={15} />
                  <span>Location</span>
                </div>
                <div className="info-value">{PROFILE.location}</div>
                <div className="info-sub">Available for On-site & Remote roles</div>
              </div>
            </div>

            <div className="card-footer-quote">
              <span>"Building end-to-end AI systems from data to deployment."</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
