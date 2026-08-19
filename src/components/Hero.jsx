import { useState } from "react";
import { ArrowDown, FileText, Sparkles, Check, Copy, Terminal, Play } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PROFILE, STATS } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("pipeline");

  const pipelineCode = `# End-to-End AI/ML Lifecycle
from srijan_ml import Pipeline, ModelEvaluator, APIDeployer

# 1. Ingestion & Preprocessing
dataset = Pipeline.load("dataset_5000_records.csv")
X, y = Pipeline.preprocess_and_engineer_features(dataset)

# 2. Deep Architecture / ML Modeling
model = Pipeline.train_model(
    architecture="BiGRU_NLP_Transformer",
    epochs=50,
    optimizer="adam",
    batch_size=32
)

# 3. Model Benchmark & Evaluation
results = ModelEvaluator.evaluate(model, X_test, y_test)
# Output: Test Accuracy = 92.1% | R² Score = 0.878

# 4. Production API Deployment
APIDeployer.expose_fastapi(
    model=model,
    endpoint="/api/v1/predict",
    latency_target="<50ms"
)`;

  const statsCode = `# Verified Credentials Summary
developer = {
    "name": "${PROFILE.name}",
    "institution": "${PROFILE.college}",
    "cgpa": "${PROFILE.cgpa}",
    "focus_areas": [
        "Machine Learning",
        "Deep Learning (RNN/LSTM/GRU)",
        "Generative AI & LLMs",
        "Computer Vision & NLP"
    ],
    "status": "Open to AI/ML Developer roles"
}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="eyebrow-chip">
            <Sparkles size={14} className="sparkle-icon" />
            <span>AI / ML DEVELOPER • COMPUTER SCIENCE</span>
          </div>

          <h1 className="hero-title">
            Building <span>Intelligent</span> Systems with Data & AI.
          </h1>

          <div className="hero-role-badge">
            <span className="role-tag">{PROFILE.name}</span>
            <span className="role-divider">•</span>
            <span className="role-sub">AI / ML Developer | Machine Learning | Deep Learning | Generative AI</span>
          </div>

          <p className="hero-description">
            {PROFILE.bio}
          </p>

          <div className="hero-action-buttons">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary-glow"
            >
              <span>View My Projects</span>
              <ArrowDown size={17} />
            </button>

            <button
              onClick={onOpenResume}
              className="btn-secondary-glass"
            >
              <FileText size={17} />
              <span>Resume</span>
            </button>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon-glass"
              title="GitHub Profile"
            >
              <Github size={19} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon-glass"
              title="LinkedIn Profile"
            >
              <Linkedin size={19} />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="stats-row">
            {STATS.slice(0, 4).map((stat, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-caption">{stat.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Terminal Card */}
        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-tabs">
                <button
                  className={`term-tab ${activeTab === "pipeline" ? "active" : ""}`}
                  onClick={() => setActiveTab("pipeline")}
                >
                  <Terminal size={12} />
                  <span>ml_pipeline.py</span>
                </button>
                <button
                  className={`term-tab ${activeTab === "profile" ? "active" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <Play size={12} />
                  <span>developer.py</span>
                </button>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(activeTab === "pipeline" ? pipelineCode : statsCode)}
                title="Copy code"
              >
                {copied ? <Check size={14} className="copied" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="terminal-body">
              <pre className="code-block">
                <code>{activeTab === "pipeline" ? pipelineCode : statsCode}</code>
              </pre>
            </div>

            <div className="terminal-footer">
              <div className="status-indicator">
                <span className="pulsing-green-dot"></span>
                <span className="status-text">Pipeline Active • Ready for Inference & Deployment</span>
              </div>
              <span className="engine-tag">FastAPI + Scikit + TF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
