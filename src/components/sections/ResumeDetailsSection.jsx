import { motion } from "framer-motion";
import { SUMMARY, EDUCATION, CERTIFICATIONS } from "../../data/portfolioData";

export default function ResumeDetailsSection() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 flex flex-col gap-24">
      
      {/* Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="magical-glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 drop-shadow-md">About Me</h2>
        <p className="text-base md:text-lg font-light text-white/90 leading-relaxed relative z-10 drop-shadow-sm">
          {SUMMARY}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-light text-textMain tracking-wide">Education</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-1 border-l-2 border-white/5 pl-4 hover:border-accent transition-colors duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base font-semibold text-textMain">{edu.degree}</h3>
                  <span className="text-xs font-mono text-accent/80 whitespace-nowrap">{edu.date}</span>
                </div>
                <p className="text-sm font-light text-textMuted">{edu.institution}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-textMuted/60">{edu.location}</span>
                  <span className="text-xs font-mono text-white/80 bg-white/5 px-2 py-0.5 rounded">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-light text-textMain tracking-wide">Certifications</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-1 border-l-2 border-white/5 pl-4 hover:border-accent2 transition-colors duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base font-semibold text-textMain leading-tight">{cert.title}</h3>
                  <span className="text-xs font-mono text-accent2/80 whitespace-nowrap">{cert.date}</span>
                </div>
                <p className="text-sm font-light text-textMuted mb-1">{cert.issuer}</p>
                <p className="text-xs font-light text-textMuted/60 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
