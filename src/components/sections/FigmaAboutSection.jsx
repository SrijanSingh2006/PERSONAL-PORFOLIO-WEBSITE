import { motion } from "framer-motion";
import { SUMMARY, SKILLS, EXPERIENCE, CERTIFICATIONS } from "../../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: i * 0.08 },
  }),
};

const SKILL_GROUPS = [
  { title: "AI / ML", icon: "🧠", color: "#6366f1", skills: SKILLS.technical.slice(0, 5) },
  { title: "Frameworks", icon: "⚡", color: "#8b5cf6", skills: SKILLS.languagesAndFrameworks.slice(0, 5) },
  { title: "Languages", icon: "💻", color: "#22d3ee", skills: SKILLS.programming },
  { title: "Tools & Cloud", icon: "☁️", color: "#10b981", skills: SKILLS.toolsAndTech.slice(0, 5) },
];

export default function FigmaAboutSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="w-full py-28 section-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          About Me
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 leading-tight">
              Work Process &{" "}
              <span className="gradient-text">Core Skills</span>
            </h2>

            <p className="text-textMuted leading-relaxed mb-8 text-base">
              {SUMMARY.slice(0, 320)}...
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { emoji: "🎓", label: "B.Tech CSE", sub: "SRM University" },
                { emoji: "📍", label: "Chennai", sub: "India" },
                { emoji: "💼", label: `${EXPERIENCE.length} Internships`, sub: "ML & Dev" },
                { emoji: "📜", label: `${CERTIFICATIONS.length} Certs`, sub: "SAP, NPTEL" },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="glass-card px-4 py-3 flex items-center gap-3"
                >
                  <span className="text-xl">{fact.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-textMain">{fact.label}</p>
                    <p className="text-xs text-textSubtle">{fact.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              View My Portfolio
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SKILL_GROUPS.map((group, i) => (
              <motion.div
                key={group.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-5 flex flex-col"
                style={{ borderColor: `${group.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${group.color}18` }}
                >
                  {group.icon}
                </div>
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: group.color }}
                >
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-full text-textMuted"
                      style={{
                        background: `${group.color}12`,
                        border: `1px solid ${group.color}28`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



