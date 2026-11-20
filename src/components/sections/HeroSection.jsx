import { Asterisk, FileText, LayoutGrid, MapPin } from "lucide-react";
import { Github, LeetCode, Linkedin } from "../Icons";
import { PROFILE, STATS } from "../../data/portfolioData";
import { PROJECTS } from "../../data/projects";

const heroStats = [
  { ...STATS[0], label: "CGPA at SRMIST" },
  { value: PROJECTS.length, label: "Selected projects" },
  { ...STATS[3], label: "Moodline test accuracy" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="section-shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span aria-hidden="true" /> AI/ML & Full-Stack Engineer</p>
            <h1>Srijan <span>Singh<span className="hero-period">.</span></span></h1>
            <p className="hero-description">I build machine learning models, AI workflows, and full-stack applications with a focus on careful evaluation and clear interfaces.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects"><LayoutGrid size={17} /> Explore projects</a>
              <a className="button button-outline" href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer"><FileText size={17} /> View résumé</a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={19} /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={19} /></a>
              <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode"><LeetCode size={18} /></a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={`${import.meta.env.BASE_URL}images/srijan-singh.webp`} alt="Portrait of Srijan Singh" width="822" height="870" fetchPriority="high" />
              <span className="portrait-location"><MapPin size={15} /> {PROFILE.location}</span>
            </div>
            <Asterisk className="portrait-spark" strokeWidth={1.3} aria-hidden="true" />
          </div>
        </div>

        <dl className="hero-stats">
          {heroStats.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
