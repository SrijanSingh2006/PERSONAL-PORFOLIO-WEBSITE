import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, Award, Cpu, AlertCircle, Lightbulb, BookOpen, Layers } from "lucide-react";
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

  const githubUrl = project.githubLink || project.github || "https://github.com/SrijanSingh2006";

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0b0f19] border border-[rgba(99,102,241,0.25)] shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[rgba(99,102,241,0.15)] bg-gradient-to-b from-[#111827] to-[#0b0f19]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/30">
                  {project.badge}
                </span>
                {project.date && (
                  <span className="text-xs text-textSubtle font-mono">{project.date}</span>
                )}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-textMain tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm text-textMuted mt-1">{project.subtitle}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold glass text-textMain border border-[rgba(99,102,241,0.3)] hover:border-[#818cf8] hover:text-[#818cf8] transition-all"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemo && project.liveDemo !== "#" && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-glow-sm hover:opacity-90 transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full glass border border-[rgba(99,102,241,0.2)] flex items-center justify-center text-textMuted hover:text-white hover:border-[#ef4444] hover:bg-[#ef4444]/20 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Metric Highlight Banner */}
          {project.resultsHighlight && (
            <div className="mx-6 sm:mx-8 mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#6366f1]/15 via-[#8b5cf6]/10 to-[#22d3ee]/10 border border-[#6366f1]/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#6366f1]/20 border border-[#6366f1]/40 flex items-center justify-center text-[#818cf8] shrink-0">
                <Award size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-[#818cf8] uppercase">
                  Verified Result / Key Metric
                </div>
                <div className="text-sm sm:text-base font-bold text-textMain mt-0.5">
                  {project.resultsHighlight}
                </div>
              </div>
            </div>
          )}

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Overview & Resume Description */}
            <div>
              <h3 className="section-label mb-2">Overview & Implementation</h3>
              <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                {project.description || project.shortDescription}
              </p>
            </div>

            {/* Resume Bullets (if provided) */}
            {project.bullets && project.bullets.length > 0 && (
              <div className="glass-card p-5 border border-[rgba(99,102,241,0.2)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#818cf8] mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  Resume Verified Achievements
                </h4>
                <div className="space-y-2">
                  {project.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textMuted leading-relaxed">
                      <span className="text-[#6366f1] font-bold mt-0.5">▹</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Cards */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="glass-card p-5 border border-red-500/20 bg-red-950/10">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                      <AlertCircle size={16} />
                      <h4>The Friction / Problem</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="glass-card p-5 border border-emerald-500/20 bg-emerald-950/10">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                      <Lightbulb size={16} />
                      <h4>The Engineered Solution</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Architecture Diagram */}
            {project.architectureDiagram && (
              <div>
                <h3 className="section-label mb-2">Architecture & Execution Flow</h3>
                <div className="rounded-2xl border border-[rgba(99,102,241,0.2)] bg-[#070b13] p-4 font-mono text-xs overflow-x-auto text-[#a5b4fc]">
                  <div className="flex items-center gap-2 text-textSubtle pb-2 mb-3 border-b border-white/5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>pipeline_flow.txt</span>
                  </div>
                  <pre className="whitespace-pre-wrap">{project.architectureDiagram}</pre>
                </div>
              </div>
            )}

            {/* Pipeline Steps */}
            {project.pipelineSteps && project.pipelineSteps.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#818cf8] mb-3 flex items-center gap-2">
                  <Layers size={14} />
                  Step-by-Step Pipeline
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.pipelineSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="glass-card p-3.5 flex items-start gap-3 border border-[rgba(99,102,241,0.15)]"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#6366f1]/20 text-[#818cf8] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-textMuted leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="section-label mb-3">Key Features & Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-textMain glass px-3.5 py-2.5 rounded-xl border border-[rgba(99,102,241,0.15)]"
                    >
                      <CheckCircle2 size={14} className="text-[#22d3ee] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="section-label mb-3">Technologies & Tooling</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl glass border border-[rgba(99,102,241,0.25)] text-[#a5b4fc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ML Details (if present) */}
            {project.mlModelDetails && (
              <div className="glass-card p-5 border border-[rgba(99,102,241,0.2)] bg-[#111827]/40">
                <h3 className="section-label mb-3">Model Architecture & Tuning</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {project.mlModelDetails.algorithm && (
                    <div>
                      <span className="text-textSubtle block uppercase tracking-wider text-[10px] mb-1">
                        Algorithm
                      </span>
                      <span className="text-textMain font-medium">{project.mlModelDetails.algorithm}</span>
                    </div>
                  )}
                  {project.mlModelDetails.hyperparameters && (
                    <div>
                      <span className="text-textSubtle block uppercase tracking-wider text-[10px] mb-1">
                        Hyperparameters
                      </span>
                      <span className="text-textMain font-medium">{project.mlModelDetails.hyperparameters}</span>
                    </div>
                  )}
                  {project.mlModelDetails.evaluationMetrics && (
                    <div>
                      <span className="text-textSubtle block uppercase tracking-wider text-[10px] mb-1">
                        Metrics
                      </span>
                      <span className="text-textMain font-medium">{project.mlModelDetails.evaluationMetrics}</span>
                    </div>
                  )}
                  {project.mlModelDetails.optimization && (
                    <div>
                      <span className="text-textSubtle block uppercase tracking-wider text-[10px] mb-1">
                        Optimization
                      </span>
                      <span className="text-textMain font-medium">{project.mlModelDetails.optimization}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Learnings */}
            {project.whatILearned && (
              <div className="glass-card p-5 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-[#818cf8] font-bold text-sm mb-2">
                  <BookOpen size={16} />
                  <h4>Key Takeaways & Insights</h4>
                </div>
                <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                  {project.whatILearned}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-[rgba(99,102,241,0.15)] bg-[#070b13] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-textSubtle">
              Verified portfolio project • Srijan Singh
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-semibold text-textMuted hover:text-white glass transition-all"
              >
                Close
              </button>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !py-2 !px-4 !text-xs gap-2"
                >
                  <Github size={14} />
                  <span>View Repository ↗</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
