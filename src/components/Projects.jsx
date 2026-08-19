import { useState } from "react";
import { ArrowUpRight, Sparkles, Layers, Award, Terminal } from "lucide-react";
import { Github } from "./Icons";
import { PROJECTS, PROFILE } from "../data/portfolioData";

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "AI / ML",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "Data Analytics",
    "Full Stack"
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="section-container">
      <div className="section-header projects-header-row">
        <div>
          <div className="section-eyebrow">05 / SELECTED PROJECTS</div>
          <h2 className="section-title">End-to-End AI, Machine Learning & Full-Stack Systems.</h2>
          <p className="section-subtitle">
            Click any project to inspect its architecture pipeline, problem breakdown, ML models, and evaluation metrics.
          </p>
        </div>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="all-github-link"
        >
          <span>All repositories on GitHub</span>
          <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="project-filter-bar">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`project-filter-pill ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.id}
          >
            <div className="card-top-row">
              <span className="project-index">0{index + 1}</span>
              <span className="project-badge">{project.badge}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-sub">{project.subtitle}</p>

            <p className="project-short-desc">{project.shortDescription}</p>

            <div className="project-tech-chips">
              {project.technologies.slice(0, 5).map((tech) => (
                <span className="tech-chip" key={tech}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="tech-chip more">+{project.technologies.length - 5}</span>
              )}
            </div>

            <div className="project-metric-callout">
              <Award size={14} className="metric-icon" />
              <span>{project.resultsHighlight}</span>
            </div>

            <div className="project-card-footer">
              <button
                className="btn-inspect-project"
                onClick={() => onSelectProject(project)}
              >
                <Terminal size={14} />
                <span>Explore Architecture & Details</span>
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-btn"
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
