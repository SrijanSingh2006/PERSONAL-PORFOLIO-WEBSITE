import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Braces, Check, FileText, MapPin, Workflow } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";

const proof = [
  { value: "9.14", label: "CGPA · SRMIST" },
  { value: "92.1%", label: "NLP model accuracy" },
  { value: "3", label: "Internships" },
];

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="hero" className="hero-editorial relative overflow-hidden">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-atmosphere-orb hero-atmosphere-orb-a" />
        <span className="hero-atmosphere-orb hero-atmosphere-orb-b" />
        <span className="hero-atmosphere-grid" />
      </div>
      <div className="hero-topline" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>COMPUTER SCIENCE · AI SYSTEMS</span></div>

      <div className="hero-layout">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, ease: [0.22, 1, .36, 1] }}
          className="hero-copy"
        >
          <div className="hero-location"><span className="availability-dot" /><MapPin size={14} /><span>Chennai, India</span><span className="location-divider">/</span><span>SRMIST · B.Tech CSE</span></div>
          <p className="hero-greeting">Hello, I’m Srijan.</p>
          <h1>I build AI systems<br className="desktop-break" /> that hold up <span>after the demo.</span></h1>
          <p className="hero-description">Agentic workflows, retrieval systems, and the evaluation tools around them. I care about making LLM applications structured, testable, and useful to the people who rely on them.</p>

          <div className="hero-actions">
            <button onClick={() => scrollTo("projects")} className="btn-primary hero-project-link">Explore selected work <ArrowDownRight size={17} /></button>
            <a href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer" className="hero-resume-link"><FileText size={16} /> Resume <ArrowUpRight size={14} /></a>
          </div>

          <div className="hero-socials" aria-label="Social profiles">
            <span>Elsewhere</span>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" className="leetcode-link" aria-label="LeetCode">LC</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: .85, delay: .12, ease: [0.22, 1, .36, 1] }}
          className="hero-visual"
        >
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-outer" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-inner" aria-hidden="true" />
          <div className="portrait-signal" aria-hidden="true"><span className="portrait-signal-dot" /><span>AI / ML</span><i>IN PRACTICE</i></div>
          <div className="portrait-frame">
            <div className="portrait-index">01 <span>/ ABOUT</span></div>
            <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Portrait of Srijan Singh" />
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="workflow-note"
          >
            <div className="workflow-note-head"><span><Workflow size={15} /> CURRENT FOCUS</span><span className="workflow-live"><span /> IN PRACTICE</span></div>
            <div className="workflow-steps">
              <span><Braces size={15} /> Structure</span><i />
              <span><Check size={15} /> Evaluate</span><i />
              <span><ArrowUpRight size={15} /> Ship</span>
            </div>
          </motion.div>
          <div className="hero-stamp" aria-hidden="true">S<span>·</span>S</div>
        </motion.div>
      </div>

      <div className="hero-proof-strip">
        <div className="proof-intro">A few things<br />that show the work</div>
        {proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong><span>{item.label}</span>
          </div>
        ))}
        <button className="proof-scroll" onClick={() => scrollTo("about")} aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDownRight size={17} /></button>
      </div>
    </section>
  );
}
