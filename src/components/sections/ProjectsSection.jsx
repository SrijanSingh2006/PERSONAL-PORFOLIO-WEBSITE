import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";
import { PROJECTS } from "../../data/portfolioData";


const CARD_GRADIENT_COLORS = [
  ["#6366f1", "#8b5cf6"],
  ["#8b5cf6", "#22d3ee"],
  ["#22d3ee", "#10b981"],
  ["#f59e0b", "#ef4444"],
  ["#ef4444", "#8b5cf6"],
  ["#10b981", "#6366f1"],
];

export default function ProjectsSection({ onOpenModal }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/SrijanSingh2006/repos?sort=updated&per_page=8")
      .then((res) => res.json())
      .then((data) => {
        const fetched = Array.isArray(data)
          ? data
              .filter((repo) => repo.name !== "SrijanSingh2006")
              .slice(0, 6)
              .map((repo) => ({
              id: repo.id,
              title: repo.name.replace(/-/g, " "),
              badge: repo.language || "Open Source",
              shortDescription: repo.description || "A project by Srijan Singh.",
              description: repo.description || "A project by Srijan Singh.",
              technologies: repo.topics?.length > 0 ? repo.topics : repo.language ? [repo.language] : [],
              date: new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
              githubLink: repo.html_url,
            }))
          : PROJECTS;
        setProjects(fetched.length ? fetched : PROJECTS);
        setLoading(false);
      })
      .catch(() => {
        setProjects(PROJECTS);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="w-full py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] rounded-full bg-[#8b5cf6]/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-4">Featured Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Creative <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-base">
            A curated selection of AI/ML projects and open-source contributions — pulled live from GitHub.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              <div className="w-14 h-14 border-2 border-[rgba(99,102,241,0.2)] rounded-full" />
              <div className="w-14 h-14 border-t-2 border-[#6366f1] rounded-full animate-spin absolute inset-0" />
            </div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
                colors={CARD_GRADIENT_COLORS[index % CARD_GRADIENT_COLORS.length]}
              />
            ))}
          </motion.div>
        )}

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/SrijanSingh2006"
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <Github size={16} />
              View All on GitHub
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenModal, colors }) {
  const [from, to] = colors;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
      }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      onClick={() => onOpenModal(project)}
      className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full"
      id={`project-card-${project.id}`}
    >
      <div
        className="relative h-52 overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${from}18, ${to}10)` }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${from}30 1px, transparent 1px), linear-gradient(90deg, ${from}30 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <motion.span
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="font-black text-7xl select-none relative z-10"
          style={{ color: `${from}50` }}
        >
          {"</>"}
        </motion.span>
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: `${from}22`, border: `1px solid ${from}40`, color: from }}
          >
            {project.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 text-xs text-textSubtle font-mono">{project.date}</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ background: `linear-gradient(135deg, ${from}dd, ${to}cc)` }}
        >
          <span className="bg-white text-[#050816] font-bold text-sm px-6 py-2.5 rounded-full shadow-lg">
            View Details
          </span>
        </motion.div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg capitalize mb-2 group-hover:text-[#818cf8] transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-textMuted mb-4 line-clamp-2 flex-1 leading-relaxed">{project.description}</p>
        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && <span className="tech-tag">+{project.technologies.length - 3}</span>}
          </div>
        )}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-[rgba(99,102,241,0.1)]">
          <span className="text-xs font-bold text-[#818cf8] flex items-center gap-1 group-hover:gap-2 transition-all">
            Case Study <ArrowRight size={12} />
          </span>
          {project.githubLink && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full glass border border-[rgba(99,102,241,0.2)] flex items-center justify-center text-textMuted hover:text-[#818cf8] hover:border-[rgba(99,102,241,0.5)] transition-all"
            >
              <Github size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
