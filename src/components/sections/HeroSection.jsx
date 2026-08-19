import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 z-10">
      {/* Background Magic */}
      <div className="bg-magical-forest"></div>

      {/* Main Content Glass */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="magical-glass rounded-3xl px-8 py-12 md:px-16 md:py-20 text-center max-w-4xl z-10 flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8 flex flex-col items-center gap-6"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <img src="/profile.png" alt="Srijan Singh" className="w-full h-full object-cover" />
          </div>
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-mono text-white tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            ✨ AI & Machine Learning Developer ✨
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-magic-gradient"
        >
          Srijan Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-lg md:text-xl font-light text-white/90 max-w-2xl mb-10 leading-relaxed"
        >
          Building intelligent systems with data, predictive analytics, and Generative AI. Transforming complex problems into elegant solutions.
        </motion.p>

        {/* Contact Details inline in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10 pointer-events-auto cursor-none"
        >
          <a href="mailto:srijansingh2006@gmail.com" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email Me
          </a>
          <a href="tel:+919838027276" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            9838027276
          </a>
          <a href="https://github.com/SrijanSingh2006" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/srijan-singh-999a552a9" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
