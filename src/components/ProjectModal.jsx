import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    modalRef.current?.scrollTo({ top: 0 });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ type: "spring", duration: 0.36, bounce: 0.16 }}
          onClick={(event) => event.stopPropagation()}
          ref={modalRef}
          className="project-modal relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-2xl sm:p-9"
        >
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-textMuted transition hover:border-violet-300 hover:text-violet-600 sm:right-7 sm:top-7"
          >
            <X size={18} />
          </button>

          <div className="mb-6 flex flex-wrap items-center gap-2 pr-12">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
              {project.badge}
            </span>
            <span className="font-mono text-xs text-textSubtle">{project.date}</span>
          </div>

          <h2 className="mb-2 font-display text-3xl font-black tracking-tight text-textMain sm:text-4xl">
            {project.title}
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-textMuted sm:text-base">
            {project.subtitle}
          </p>

          <div className="mb-7 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-5 sm:p-6">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-700">
              <Layers size={15} /> Project overview
            </div>
            <p className="text-sm leading-relaxed text-textMain">
              {project.shortDescription || project.description}
            </p>
          </div>

          {project.bullets?.length > 0 && (
            <div className="mb-7">
              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-textSubtle">
                <CheckCircle2 size={15} className="text-violet-500" /> Resume highlights
              </h3>
              <div className="space-y-3">
                {project.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-textMuted"
                  >
                    <span className="mt-0.5 font-bold text-violet-500">↗</span>
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8 border-t border-slate-200 pt-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-textSubtle">Built with</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span key={technology} className="tech-tag">{technology}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
            <a href={project.githubLink || project.github} target="_blank" rel="noreferrer" className="btn-primary gap-2">
              <Github size={16} /> View source <ArrowUpRight size={15} />
            </a>
            {project.liveDemo && project.liveDemo !== "#" && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-outline gap-2">
                Live demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
