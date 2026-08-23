import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label">My Journey</div>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Experience Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-textMuted uppercase tracking-widest mb-6 flex items-center gap-2">
              <Briefcase size={16} className="text-[#6366f1]" />
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-transparent" />
              <div className="flex flex-col gap-6">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 80, damping: 18 }}
                    className="pl-14 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-5 w-5 h-5 rounded-full bg-[#050816] border-2 border-[#6366f1] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                    </div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      className="glass-card p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="font-display font-bold text-base text-textMain">{exp.role}</h4>
                          <p className="text-[#818cf8] font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="tech-tag">{exp.type}</span>
                          <span className="flex items-center gap-1 text-xs text-textSubtle">
                            <Calendar size={10} />
                            {exp.date}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-textSubtle">
                            <MapPin size={10} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-textMuted leading-relaxed line-clamp-3">{exp.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>


          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="font-display font-bold text-lg text-textMuted uppercase tracking-widest mb-6 flex items-center gap-2">
              📜 Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        color: "#818cf8",
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-textSubtle font-mono">{cert.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-textMain mt-2 mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-textMuted line-clamp-2 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
