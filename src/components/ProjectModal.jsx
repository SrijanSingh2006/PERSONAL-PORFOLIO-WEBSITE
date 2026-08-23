import { useEffect } from "react";
import { X, ExternalLink, Sparkles, CheckCircle2, Award, Cpu, AlertCircle, Lightbulb, BookOpen } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-category-badge">{project.badge}</div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-header-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="modal-action-btn github"
            >
              <Github size={15} />
              <span>GitHub Repo</span>
            </a>
            {project.liveDemo && project.liveDemo !== "#" && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="modal-action-btn live"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}
            <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-metric-banner">
          <div className="metric-icon-wrap">
            <Award size={20} />
          </div>
          <div>
            <div className="metric-caption">VERIFIED RESULT / HIGHLIGHT</div>
            <div className="metric-headline">{project.resultsHighlight}</div>
          </div>
        </div>

        <div className="modal-body-content">
          <div className="modal-section">
            <h3 className="section-label">OVERVIEW</h3>
            <p className="section-text">{project.shortDescription}</p>
          </div>

          <div className="modal-two-col-grid">
            <div className="prob-sol-card problem">
              <div className="prob-sol-head">
                <AlertCircle size={17} />
                <h4>THE PROBLEM</h4>
              </div>
              <p>{project.problem}</p>
            </div>

            <div className="prob-sol-card solution">
              <div className="prob-sol-head">
                <Lightbulb size={17} />
                <h4>THE SOLUTION</h4>
              </div>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-label">SYSTEM ARCHITECTURE & PIPELINE</h3>
            <div className="architecture-box">
              <div className="diagram-top-bar">
                <span className="dot-g"></span>
                <span>pipeline_flow_diagram.txt</span>
              </div>
              <pre className="diagram-pre">
                <code>{project.architectureDiagram}</code>
              </pre>
            </div>

            <div className="pipeline-steps-breakdown">
              <h4 className="sub-heading">Step-by-Step Execution:</h4>
              <ol className="execution-steps-list">
                {project.pipelineSteps.map((step, idx) => (
                  <li key={idx}>
                    <span className="step-num">0{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-label">KEY FEATURES</h3>
            <div className="features-chips-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div className="feature-item" key={idx}>
                  <CheckCircle2 size={15} className="feat-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-label">TECHNOLOGIES & FRAMEWORKS</h3>
            <div className="tech-badge-cloud">
              {project.technologies.map((tech) => (
                <span className="modal-tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.mlModelDetails && (
            <div className="modal-section">
              <h3 className="section-label">ML MODEL & OPTIMIZATION</h3>
              <div className="ml-details-card">
                {project.mlModelDetails.algorithm && (
                  <div className="ml-detail-row">
                    <strong>Algorithm:</strong> {project.mlModelDetails.algorithm}
                  </div>
                )}
                {project.mlModelDetails.hyperparameters && (
                  <div className="ml-detail-row">
                    <strong>Hyperparameters:</strong> {project.mlModelDetails.hyperparameters}
                  </div>
                )}
                {project.mlModelDetails.evaluationMetrics && (
                  <div className="ml-detail-row">
                    <strong>Evaluation Metrics:</strong> {project.mlModelDetails.evaluationMetrics}
                  </div>
                )}
                {project.mlModelDetails.optimization && (
                  <div className="ml-detail-row">
                    <strong>Optimization Technique:</strong> {project.mlModelDetails.optimization}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="modal-section">
            <h3 className="section-label">EVALUATION RESULTS</h3>
            <div className="results-box">
              <Award size={18} className="res-icon" />
              <span>{project.results}</span>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-label">KEY TAKEAWAYS & WHAT I LEARNED</h3>
            <div className="learnings-box">
              <BookOpen size={18} className="learn-icon" />
              <p>{project.whatILearned}</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="footer-left">
            <span className="repo-note">Ready to review implementation details & code?</span>
          </div>
          <div className="footer-right">
            <button className="modal-close-secondary" onClick={onClose}>
              Close
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="modal-github-action"
            >
              <Github size={16} />
              <span>View Source Code on GitHub ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
