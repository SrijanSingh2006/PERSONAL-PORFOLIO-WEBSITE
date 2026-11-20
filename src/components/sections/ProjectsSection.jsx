import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, ArrowRight, BarChart3, Braces, FileCheck2, GitBranch, MapPinned, ShieldCheck, ShoppingBag, Wallet, Workflow } from "lucide-react";
import { Github } from "../Icons";
import { PROJECTS } from "../../data/projects";

const projectArt = {
  agricomply: { icon: ShieldCheck, accent: "moss", flow: ["DOCUMENTS", "RETRIEVE", "INSIGHTS"] },
  moodline: { icon: Activity, accent: "rose", flow: ["TEXT", "BiGRU", "EMOTION"] },
  skyline: { icon: BarChart3, accent: "blue", flow: ["LISTING", "PIPELINE", "ROOM TYPE"] },
  tripmacha: { icon: Workflow, accent: "violet", flow: ["TRIP BRIEF", "PLAN", "ITINERARY"] },
  ecoshield: { icon: MapPinned, accent: "teal", flow: ["FARM DATA", "MODEL", "MAP VIEW"] },
  threadiq: { icon: ShoppingBag, accent: "gold", flow: ["DISCOVER", "ANALYZE", "IMPROVE"] },
  reachinbox: { icon: GitBranch, accent: "indigo", flow: ["QUEUE", "RATE LIMIT", "DELIVER"] },
  paypulse: { icon: Wallet, accent: "cyan", flow: ["EMPLOYEE", "BENEFITS", "HR REVIEW"] },
  "excel-analytics": { icon: FileCheck2, accent: "lavender", flow: ["UPLOAD", "EXPLORE", "VISUALIZE"] },
};

const filters = ["All work", "AI & ML", "Full stack", "Data & product"];

export default function ProjectsSection({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState("All work");
  const reducedMotion = useReducedMotion();
  const visibleProjects = activeFilter === "All work"
    ? PROJECTS
    : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="projects-editorial relative overflow-hidden">
      <div className="section-shell">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="projects-heading">
          <div>
            <p className="eyebrow"><span>02</span> SELECTED WORK · AI / ML · SOFTWARE</p>
            <h2>From intelligent models<br /><span>to useful products.</span></h2>
          </div>
          <div className="projects-heading-aside">
            <p>Applied machine learning, AI products, and full-stack systems—explore the work by discipline or open a case study for the details.</p>
            <a href="https://github.com/SrijanSingh2006" target="_blank" rel="noreferrer" className="text-link"><Github size={16} /> Browse GitHub <ArrowRight size={15} /></a>
          </div>
        </motion.div>

        <div className="project-browser">
          <div className="project-filters" role="group" aria-label="Filter projects by discipline">
            {filters.map((filter) => {
              const count = filter === "All work" ? PROJECTS.length : PROJECTS.filter((project) => project.categories.includes(filter)).length;
              return (
                <button
                  key={filter}
                  type="button"
                  className={`project-filter${activeFilter === filter ? " is-active" : ""}`}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}<span>{String(count).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <p className="project-results" aria-live="polite">Showing <strong>{visibleProjects.length}</strong> {visibleProjects.length === 1 ? "project" : "projects"}</p>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={visibleProjects.length} reducedMotion={reducedMotion} onOpen={() => onOpenModal(project)} />
          ))}
        </div>
        <p className="projects-footnote"><span>↳</span> Every project links to its source. Open a case study for the challenge, approach, implementation flow, and model notes.</p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total, reducedMotion, onOpen }) {
  const art = projectArt[project.id] || { icon: Braces, accent: "violet", flow: ["IDEA", "BUILD", "SHIP"] };
  const Icon = art.icon;
  return (
    <motion.article
      layout={reducedMotion ? false : "position"}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        default: { duration: .42, delay: (index % 3) * .04 },
        layout: { duration: .34, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`project-tile art-${art.accent}`}
    >
      <div className="project-art" aria-hidden="true">
        <div className="project-art-top"><span className="project-number">{String(index + 1).padStart(2, "0")} <i>/ {String(total).padStart(2, "0")}</i></span><span className="project-period">{project.displayLabel}</span></div>
        <div className="project-art-center">
          <div className="project-art-ring ring-a" /><div className="project-art-ring ring-b" />
          <div className="project-icon"><Icon size={24} strokeWidth={1.65} /></div>
          <span className="project-art-caption">{art.flow[1]}</span>
        </div>
        <div className="project-flow">
          {art.flow.map((step, stepIndex) => <span key={step}><i>{String(stepIndex + 1).padStart(2, "0")}</i>{step}</span>)}
        </div>
        <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      </div>

      <div className="project-body">
        <div className="project-kicker"><span>{project.badge}</span><span className="project-kicker-mark">↗</span></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-bottom">
          <div className="project-tech">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} onClick={(event) => event.stopPropagation()}><Github size={17} /></a>
        </div>
        <button type="button" className="project-read-more" onClick={onOpen}>
          Read project notes <ArrowRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}
