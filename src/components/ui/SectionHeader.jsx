import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, icon: Icon, gradientClass = "from-accent/40 to-accent/5", glowClass = "shadow-[0_0_40px_rgba(245,158,11,0.2)]" }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16 relative w-full pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`w-24 h-24 mb-6 rounded-3xl flex items-center justify-center magical-glass relative overflow-hidden group pointer-events-auto cursor-none ${glowClass}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
        <div className="absolute inset-0 bg-white/5 blur-xl"></div>
        <div className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
          {Icon}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="pointer-events-auto cursor-none"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white drop-shadow-md group-hover:text-magic-gradient transition-all">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/70 font-light text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
