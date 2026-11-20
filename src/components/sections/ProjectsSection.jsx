import { useState } from "react";
import { Activity, BarChart3, Braces, FileCheck2, GitBranch, MapPinned, ShieldCheck, ShoppingBag, Wallet, Workflow } from "lucide-react";
import { Github } from "../Icons";
import { PROFILE } from "../../data/portfolioData";
import { PROJECTS } from "../../data/projects";

const projectArt = {
  agricomply: { Icon: ShieldCheck, color: "moss", image: "agricomply-dashboard.webp" },
  moodline: { Icon: Activity, color: "rose" },
  skyline: { Icon: BarChart3, color: "blue" },
  tripmacha: { Icon: Workflow, color: "violet" },
  ecoshield: { Icon: MapPinned, color: "teal" },
  threadiq: { Icon: ShoppingBag, color: "gold" },
  reachinbox: { Icon: GitBranch, color: "indigo" },
  paypulse: { Icon: Wallet, color: "cyan" },
  "excel-analytics": { Icon: FileCheck2, color: "lavender" },
};

const filters = ["All work", "AI & ML", "Full stack", "Data & product"].map((label) => ({
  label,
  projects: label === "All work" ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(label)),
}));

export default function ProjectsSection({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <header className="section-heading heading-split">
          <h2>Selected projects<span className="heading-period">.</span></h2>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="button button-outline"><Github size={18} /> Browse GitHub</a>
        </header>

        <div className="project-browser">
          <div className="project-filters" role="group" aria-label="Filter projects by discipline">
            {filters.map((filter) => (
              <button key={filter.label} type="button" className="project-filter" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                {filter.label} <span>{filter.projects.length}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{activeFilter.projects.length} projects</p>
        </div>

        <div className="project-grid">
          {activeFilter.projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => onOpenModal(project)} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const { Icon, color, image } = projectArt[project.id] ?? { Icon: Braces, color: "violet" };
  return (
    <article className={`project-tile art-${color}${image ? " project-featured" : ""}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-label"><Icon size={15} />{project.displayLabel}</span>
        {image ? (
          <div className="project-screenshot">
            <img src={`${import.meta.env.BASE_URL}images/${image}`} alt="" width="1360" height="646" loading="lazy" decoding="async" />
          </div>
        ) : (
          <div className="project-symbol">
            <Icon size={42} strokeWidth={1.35} />
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="project-kicker">{project.badge}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-actions">
          <button type="button" className="text-link" onClick={onOpen} aria-label={`View ${project.title} case study`}>View case study</button>
          <a className="icon-button" href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} title="View source on GitHub"><Github size={18} /></a>
        </div>
      </div>
    </article>
  );
}
