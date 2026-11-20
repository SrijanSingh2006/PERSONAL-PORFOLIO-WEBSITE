import { Braces, Database, MessagesSquare, Workflow } from "lucide-react";
import { PROFILE, SKILL_CATEGORIES } from "../../data/portfolioData";

const skillIcons = [Workflow, Braces, Database, MessagesSquare];

export default function FigmaAboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell about-layout">
        <div className="section-heading about-story">
          <p className="eyebrow">About me</p>
          <h2>The engineering behind <em>useful AI.</em></h2>
          <p>I’m a final-year computer science student at SRMIST. I’m drawn to the work that makes AI applications dependable, from well-defined data schemas and careful evaluation to human review and clear interfaces.</p>
          <p>I like turning an unclear requirement into a small, usable tool, then testing its edge cases and improving it with feedback.</p>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-link">More on LinkedIn</a>
        </div>

        <div className="skill-grid" aria-label="Skills">
          {SKILL_CATEGORIES.map((group, index) => {
            const Icon = skillIcons[index];
            return (
              <article key={group.id} className="skill-card">
                <span className="feature-icon"><Icon size={21} strokeWidth={1.75} /></span>
                <h3>{group.title}</h3>
                <p>{group.skills.join(" · ")}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
