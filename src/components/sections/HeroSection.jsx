import { ArrowDownRight, ArrowUpRight, Asterisk, FileText, Sparkles } from "lucide-react";
import { Github, LeetCode, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";
import { PROJECTS } from "../../data/projects";

const specialties = ["AI / ML", "FULL-STACK", "DATA", "APPLIED AI"];

export default function HeroSection() {
  return (
    <section id="hero" className="hero-reimagined">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-new-layout">
        <div className="hero-new-copy">
          <div className="hero-new-kicker">
            <span className="hero-kicker-role"><span className="hero-new-dot" aria-hidden="true" /> AI / ML & SOFTWARE ENGINEER</span>
            <span className="hero-kicker-line" aria-hidden="true" />
            <span>{PROFILE.location}</span>
          </div>
          <p className="hero-new-intro">Hey, I’m <strong>{PROFILE.name}</strong> <Asterisk aria-hidden="true" size={23} /></p>
          <h1>
            <span className="hero-title-line">Building the</span>{" "}
            <span className="hero-title-line"><span className="hero-gradient-word">intelligent</span></span>{" "}
            <span className="hero-title-line">side of things.</span>
          </h1>
          <p className="hero-new-description">From machine learning models to full-stack products, I turn ambitious ideas into experiences people can actually use.</p>
          <div className="hero-new-actions">
            <a className="hero-new-primary" href="#projects">Explore my work <ArrowDownRight size={19} /></a>
            <a className="hero-new-secondary" href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer"><FileText size={17} /> View résumé <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-new-socials"><span>FIND ME ON</span><a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={PROFILE.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><LeetCode size={17} /></a></div>
        </div>
        <div className="hero-new-visual">
          <div className="hero-visual-orbit orbit-a" aria-hidden="true" /><div className="hero-visual-orbit orbit-b" aria-hidden="true" />
          <div className="hero-image-card">
            <div className="hero-image-top"><span>CREATIVE ENGINEERING</span><Sparkles size={16} aria-hidden="true" /></div>
            <img src={`${import.meta.env.BASE_URL}images/srijan-singh.webp`} alt="Portrait of Srijan Singh" width="822" height="870" fetchPriority="high" />
            <div className="hero-image-caption"><span>MEET THE MAKER</span><strong>{PROFILE.name}<Asterisk size={24} aria-hidden="true" /></strong></div>
          </div>
          <div className="hero-floating-card hero-floating-ai"><span aria-hidden="true">✦</span><div><strong>AI + ML</strong><small>Ideas into intelligence</small></div></div>
          <div className="hero-floating-card hero-floating-code"><span aria-hidden="true">⌘</span><div><strong>FULL STACK</strong><small>Built for real people</small></div></div>
          <Asterisk className="hero-visual-spark" size={45} aria-hidden="true" />
        </div>
      </div>
      <ul className="hero-specialty-bar" aria-label="Areas of work">
        {specialties.map((specialty) => (
          <li key={specialty}><Asterisk size={19} aria-hidden="true" />{specialty}</li>
        ))}
      </ul>
      <div className="hero-new-stats">
        <div><strong>{PROFILE.cgpa.split("/")[0]}</strong><span>CGPA AT SRMIST</span></div>
        <div><strong>92.10%</strong><span>MOODLINE TEST ACCURACY</span></div>
        <div><strong>{PROJECTS.length}</strong><span>SELECTED PROJECTS</span></div>
        <a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={17} /></a>
      </div>
    </section>
  );
}
