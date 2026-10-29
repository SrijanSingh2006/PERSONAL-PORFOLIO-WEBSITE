import { motion } from "framer-motion";
import { Braces, Database, GitPullRequest, MessagesSquare, ArrowUpRight } from "lucide-react";
import { SKILL_CATEGORIES, PROFILE } from "../../data/portfolioData";

const skillIcons = [Braces, Database, GitPullRequest, MessagesSquare];

export default function FigmaAboutSection() {
  return (
    <section id="about" className="about-editorial">
      <div className="section-shell about-layout">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="about-story">
          <p className="eyebrow"><span>01</span> A LITTLE ABOUT HOW I WORK</p>
          <h2>The useful part of AI is what happens <em>after</em> the prompt.</h2>
          <p className="about-lede">I’m a final-year CSE undergrad at SRMIST, drawn to the engineering that keeps AI applications dependable: schemas, evaluation, review states, and good interfaces.</p>
          <p className="about-detail">I like taking fuzzy requirements and making them concrete. In practice, that means building a small tool, checking its edge cases, documenting how it works, and listening when a user says something feels off.</p>

          <div className="about-facts">
            <div><span>01</span><strong>Think in systems</strong><p>Prompts, data contracts, and failure paths belong in the same conversation.</p></div>
            <div><span>02</span><strong>Make it legible</strong><p>Clear tools and careful documentation help teams work with AI confidently.</p></div>
          </div>

          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-link about-link">A little more on LinkedIn <ArrowUpRight size={15} /></a>
        </motion.div>

        <div className="skills-editorial">
          <div className="skills-heading"><p className="eyebrow">TOOLS I USE</p><span className="skills-caption">Areas I work across</span></div>
          <div className="skill-list">
            {SKILL_CATEGORIES.map((group, index) => {
              const Icon = skillIcons[index] || Braces;
              return (
                <motion.div key={group.id || group.title} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: index * .07 }} className="skill-row">
                  <div className="skill-row-icon"><Icon size={18} strokeWidth={1.7} /></div>
                  <div className="skill-row-content"><div><span className="skill-row-index">0{index + 1}</span><h3>{group.title}</h3></div><p>{group.skills.join(" · ")}</p></div>
                </motion.div>
              );
            })}
          </div>
          <div className="toolkit-foot"><span>RECENTLY USED</span><p>Python <i>·</i> TypeScript <i>·</i> React <i>·</i> FastAPI <i>·</i> GitHub Actions</p></div>
        </div>
      </div>
    </section>
  );
}
