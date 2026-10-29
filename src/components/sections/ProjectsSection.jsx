import { motion } from "framer-motion";
import { Activity, ArrowRight, Braces, FileCheck2, GitBranch, MapPinned, ShieldCheck, Workflow } from "lucide-react";
import { Github } from "../Icons";
import { PROJECTS } from "../../data/portfolioData";

const projectArt = {
  tripmacha: { icon: Workflow, accent: "violet", flow: ["PROMPT", "TOOL CALL", "EVAL"] },
  agricomply: { icon: ShieldCheck, accent: "moss", flow: ["SOURCE DOCS", "RETRIEVE", "REVIEW"] },
  reachinbox: { icon: GitBranch, accent: "blue", flow: ["PHASE 01", "REVIEW GATE", "PHASE 02"] },
  datalens: { icon: FileCheck2, accent: "rose", flow: ["INGEST", "VALIDATE", "PUBLISH"] },
  emotionai: { icon: Activity, accent: "gold", flow: ["TEST SET", "BENCHMARK", "REPORT"] },
  mentalytics: { icon: Braces, accent: "lavender", flow: ["INPUT", "SCHEMA", "API"] },
  ecoshield: { icon: MapPinned, accent: "teal", flow: ["MODEL", "MAP VIEW", "SCENARIO"] },
};

export default function ProjectsSection({ onOpenModal }) {
  return (
    <section id="projects" className="projects-editorial relative overflow-hidden">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="projects-heading">
          <div>
            <p className="eyebrow"><span>02</span> SELECTED WORK · 2024—26</p>
            <h2>Built, tested,<br /><span>and put to work.</span></h2>
          </div>
          <div className="projects-heading-aside">
            <p>A closer look at the systems behind the résumé: what they do, how they’re checked, and the tools that make them run.</p>
            <a href="https://github.com/SrijanSingh2006" target="_blank" rel="noreferrer" className="text-link"><Github size={16} /> Browse GitHub <ArrowRight size={15} /></a>
          </div>
        </motion.div>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={() => onOpenModal(project)} />
          ))}
        </div>
        <p className="projects-footnote"><span>↳</span> Each project links back to its source repository. Open a card for the implementation notes.</p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const art = projectArt[project.id] || projectArt.tripmacha;
  const Icon = art.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: .48, delay: (index % 2) * .08 }}
      className={`project-tile art-${art.accent}`}
      onClick={onOpen}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onOpen(); } }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} project details`}
    >
      <div className="project-art">
        <div className="project-art-top"><span className="project-number">0{index + 1} <i>/ 07</i></span><span className="project-period">{project.date}</span></div>
        <div className="project-art-center">
          <div className="project-icon"><Icon size={24} strokeWidth={1.65} /></div>
          <span className="project-art-caption">{art.flow[1]}</span>
        </div>
        <div className="project-flow" aria-hidden="true">
          {art.flow.map((step, stepIndex) => <span key={step}><i>{String(stepIndex + 1).padStart(2, "0")}</i>{step}</span>)}
        </div>
        <span className="art-orbit orbit-one" aria-hidden="true" /><span className="art-orbit orbit-two" aria-hidden="true" />
      </div>

      <div className="project-body">
        <div className="project-kicker"><span>{project.badge}</span><ArrowRight size={15} /></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription || project.description}</p>
        <div className="project-bottom">
          <div className="project-tech">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`${project.title} on GitHub`}><Github size={17} /></a>
        </div>
      </div>
    </motion.article>
  );
}
