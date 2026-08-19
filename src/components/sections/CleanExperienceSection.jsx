import { motion } from "framer-motion";
import { EXPERIENCE } from "../../data/portfolioData";

export default function CleanExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
      <div className="mb-16 flex items-center gap-4">
        <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-md">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
      </div>

      <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 flex flex-col gap-12">
        {EXPERIENCE.map((exp, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Glowing Node */}
            <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-accent2 border border-white group-hover:bg-accent group-hover:scale-125 group-hover:shadow-[0_0_20px_#f59e0b] transition-all duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-white drop-shadow-sm group-hover:text-magic-gradient transition-all">{exp.role}</h3>
              <span className="text-xs font-mono text-accent2 tracking-widest mt-1 md:mt-0 font-bold">{exp.date}</span>
            </div>
            <p className="text-sm font-semibold text-white/90 mb-2">{exp.company} &bull; {exp.location}</p>
            <p className="text-sm font-light text-white/80 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
