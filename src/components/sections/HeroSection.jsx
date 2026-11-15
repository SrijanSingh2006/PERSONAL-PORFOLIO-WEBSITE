import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import { PROFILE } from "../../data/portfolioData";

const specialties = ["AI / ML", "FULL-STACK", "DATA", "APPLIED AI"];

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });

  return (
    <section id="hero" className="hero-reimagined">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-new-layout">
        <motion.div className="hero-new-copy" initial={reducedMotion ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="hero-new-kicker"><span className="hero-new-dot" /> AI / ML & SOFTWARE ENGINEER <span className="hero-kicker-line" /> CHENNAI, INDIA</div>
          <p className="hero-new-intro">Hey, I’m <strong>Srijan Singh</strong> <span>✳</span></p>
          <h1>Building the<br /><span className="hero-gradient-word">intelligent</span><br />side of <span className="hero-outline-word">things.</span></h1>
          <p className="hero-new-description">From machine learning models to full-stack products, I turn ambitious ideas into experiences people can actually use.</p>
          <div className="hero-new-actions">
            <button type="button" className="hero-new-primary" onClick={scrollToProjects}>Explore my work <ArrowDownRight size={19} /></button>
            <a className="hero-new-secondary" href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer"><FileText size={17} /> View résumé <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-new-socials"><span>FIND ME ON</span><a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={PROFILE.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">LC</a></div>
        </motion.div>
        <motion.div className="hero-new-visual" initial={reducedMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
          <div className="hero-visual-orbit orbit-a" aria-hidden="true" /><div className="hero-visual-orbit orbit-b" aria-hidden="true" />
          <div className="hero-image-card"><div className="hero-image-top"><span>CREATIVE ENGINEERING</span><Sparkles size={16} /></div><img src={`${import.meta.env.BASE_URL}profile.png`} alt="Portrait of Srijan Singh" /><div className="hero-image-caption"><span>MEET THE MAKER</span><strong>Srijan Singh<span>✳</span></strong></div></div>
          <div className="hero-floating-card hero-floating-ai"><span>✦</span><div><strong>AI + ML</strong><small>Ideas into intelligence</small></div></div>
          <div className="hero-floating-card hero-floating-code"><span>⌘</span><div><strong>FULL STACK</strong><small>Built for real people</small></div></div>
          <div className="hero-visual-spark" aria-hidden="true">✳</div>
        </motion.div>
      </div>
      <div className="hero-specialty-bar" aria-label="Areas of work: AI and machine learning, full-stack development, data, and applied AI"><div className="hero-specialty-track" aria-hidden="true">{[0, 1].map(copy => <div className="hero-specialty-group" key={copy}>{specialties.map(specialty => <span key={specialty}>{specialty}<i>✳</i></span>)}</div>)}</div></div>
      <div className="hero-new-stats"><div><strong>9.14</strong><span>CGPA AT SRMIST</span></div><div><strong>92.10%</strong><span>MOODLINE TEST ACCURACY</span></div><div><strong>09<span>+</span></strong><span>SELECTED PROJECTS</span></div><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })}>SCROLL TO EXPLORE <ArrowDownRight size={17} /></button></div>
    </section>
  );
}
