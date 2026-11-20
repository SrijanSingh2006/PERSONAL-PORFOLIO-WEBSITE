import { CheckCircle2, Layers, X } from "lucide-react";
import { Github } from "./Icons";
import PortfolioDialog from "./PortfolioDialog";

export default function ProjectModal({ project, onClose }) {
  return (
    <PortfolioDialog className="project-modal" labelledBy="project-modal-title" onClose={onClose}>
      <div className="project-modal-topline">
        <span><Layers size={15} /> Case study</span>
        <button type="button" data-dialog-close onClick={onClose} aria-label="Close project details" className="icon-button"><X size={18} /></button>
      </div>

      <header className="project-modal-header">
        <div className="project-modal-tags">
          {project.categories?.map((category) => <span key={category}>{category}</span>)}
        </div>
        <p className="project-modal-eyebrow">{project.badge}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal-subtitle">{project.shortDescription}</p>
      </header>

      <div className="project-context-grid">
        <section className="project-context-card">
          <span>THE CHALLENGE</span>
          <p>{project.problem}</p>
        </section>
        <section className="project-context-card project-context-card-accent">
          <span>THE APPROACH</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <div className="project-modal-content-grid">
        <div className="project-modal-main">
          <section className="project-detail-section">
            <h3><CheckCircle2 size={16} /> What I built</h3>
            <ul className="project-highlight-list">
              {project.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </section>

          <section className="project-detail-section">
            <h3><Layers size={16} /> Implementation flow</h3>
            <ol className="project-build-flow">
              {project.buildSteps?.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="project-modal-aside">
          {project.mlModelDetails && (
            <section className="project-model-card">
              <span className="project-aside-label">MODEL & EVALUATION</span>
              <h3>{project.mlModelDetails.algorithm}</h3>
              <p>{project.mlModelDetails.evaluationMetrics}</p>
            </section>
          )}
          {project.resultsHighlight && (
            <section className="project-result-card">
              <span className="project-aside-label">PROJECT HIGHLIGHT</span>
              <p>{project.resultsHighlight}</p>
            </section>
          )}
        </aside>
      </div>

      <section className="project-modal-stack">
        <h3>Built with</h3>
        <div className="project-modal-tech">
          {project.technologies?.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      <footer className="project-modal-actions">
        <a href={project.githubLink} target="_blank" rel="noreferrer" className="button button-primary">
          <Github size={16} /> View source
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="button button-outline">
            Live demo
          </a>
        )}
      </footer>
    </PortfolioDialog>
  );
}
