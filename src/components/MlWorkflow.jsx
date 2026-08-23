import { useState } from "react";
import { ArrowRight, Layers, Cpu, Wrench, FolderGit2, CheckCircle, Sparkles } from "lucide-react";
import { ML_WORKFLOW } from "../data/portfolioData";

export default function MlWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ML_WORKFLOW[activeStepIndex];

  return (
    <section id="workflow" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">03 / ML PIPELINE ARCHITECTURE</div>
        <h2 className="section-title">From raw data to deployable AI systems.</h2>
        <p className="section-subtitle">
          How I approach end-to-end Machine Learning engineering: structured, reproducible, and production-ready.
        </p>
      </div>

      <div className="pipeline-flow-container">
        <div className="pipeline-steps-track">
          {ML_WORKFLOW.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                className={`pipeline-step-node ${isCurrent ? "active" : ""}`}
                onClick={() => setActiveStepIndex(idx)}
                aria-label={`Step ${step.step}: ${step.title}`}
              >
                <div className="node-num">{step.step}</div>
                <div className="node-label">{step.short}</div>
                <div className="node-title">{step.title}</div>
                {idx < ML_WORKFLOW.length - 1 && (
                  <div className="node-connector" aria-hidden="true">
                    <ArrowRight size={14} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="workflow-detail-card">
        <div className="workflow-detail-grid">
          <div className="detail-left">
            <div className="step-badge">
              <Sparkles size={14} />
              <span>PHASE {activeStep.step} OF 10</span>
            </div>
            <h3 className="step-headline">{activeStep.title}</h3>
            <p className="step-desc">{activeStep.description}</p>

            <div className="step-project-ref">
              <div className="ref-label">
                <FolderGit2 size={15} />
                <span>Implemented in Project:</span>
              </div>
              <div className="ref-value">{activeStep.projectRef}</div>
            </div>
          </div>

          <div className="detail-right">
            <div className="tools-card-box">
              <div className="box-head">
                <Wrench size={15} />
                <span>Key Libraries & Tools in this Phase</span>
              </div>
              <div className="tools-tags-wrap">
                {activeStep.tools.map((tool) => (
                  <span className="tool-chip" key={tool}>
                    <CheckCircle size={12} className="tool-check" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="step-nav-controls">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="step-nav-btn"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStepIndex === ML_WORKFLOW.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(ML_WORKFLOW.length - 1, prev + 1))}
                className="step-nav-btn next"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
