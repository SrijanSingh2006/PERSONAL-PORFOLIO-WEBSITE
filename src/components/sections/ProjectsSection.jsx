import { motion } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../../data/portfolioData";

export default function ProjectsSection({ onOpenModal }) {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Map absolute pixels to percentage for the gradient
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${xPercent}%`);
    cardRef.current.style.setProperty("--mouse-y", `${yPercent}%`);
  };

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-24 z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold tracking-tight mb-4 text-magic-gradient">Magical Works</h2>
        <p className="text-white/80 font-light text-lg">Architecting intelligence into production.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => {
          const cardRef = useRef(null);
          
          return (
            <motion.div 
              key={project.id}
              ref={cardRef}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => onOpenModal(project)}
              className="magical-glass rounded-3xl flex flex-col overflow-hidden group cursor-pointer relative h-[350px]"
            >
              {/* Abstract Bloom replacing the image */}
              <div className="project-bloom"></div>

              <div className="p-8 flex flex-col justify-end h-full relative z-10 bg-gradient-to-t from-black/40 to-transparent">
                <span className="text-xs font-mono text-accent uppercase tracking-widest mb-3 block drop-shadow-md">
                  {project.badge}
                </span>
                <div className="flex justify-between items-start gap-4 mb-4 relative z-20 pointer-events-auto">
                  <h3 className="text-3xl font-bold text-white group-hover:text-magic-gradient transition-all duration-300 drop-shadow-lg">
                    {project.title}
                  </h3>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all cursor-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-mono text-white/90 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
