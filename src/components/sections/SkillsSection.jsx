import { motion } from "framer-motion";
import { SKILLS } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";

export default function SkillsSection() {
  const categories = [
    { key: "programming", label: "Programming Languages", color: "from-accent/20 to-accent/5" },
    { key: "languagesAndFrameworks", label: "Frameworks & Libraries", color: "from-accent2/20 to-accent2/5" },
    { key: "technical", label: "Technical Skills", color: "from-white/20 to-white/5" },
    { key: "domainKnowledge", label: "Domain Knowledge", color: "from-emerald-400/20 to-emerald-400/5" },
    { key: "toolsAndTech", label: "Tools & Technologies", color: "from-blue-400/20 to-blue-400/5" }
  ];

  const skillsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  );

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="The tools and technologies I use to build magic."
        icon={skillsIcon}
        gradientClass="from-accent2/40 to-accent2/5"
        glowClass="shadow-[0_0_40px_rgba(236,72,153,0.2)]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`magical-glass rounded-3xl p-8 relative overflow-hidden group ${idx === 4 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
          >
            {/* Soft background glow based on category color */}
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            
            <h3 className="text-lg font-bold text-white mb-6 drop-shadow-sm relative z-10">{cat.label}</h3>
            
            <div className="flex flex-wrap gap-3 relative z-10 pointer-events-auto">
              {SKILLS[cat.key].map(skill => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-black/20 hover:bg-white/20 border border-white/10 hover:border-white/40 rounded-xl text-sm font-medium text-white/90 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
