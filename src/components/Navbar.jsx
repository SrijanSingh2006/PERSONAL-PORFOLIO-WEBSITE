import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between magical-glass rounded-full px-8 py-3 mt-4 relative z-10 pointer-events-auto cursor-none">
        <div className="font-bold text-xl text-white tracking-tight drop-shadow-md">Srijan.</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <button onClick={() => scrollTo("about")} className="hover:text-accent transition-colors hover:scale-105 hover:drop-shadow-[0_0_10px_#f59e0b] duration-300">About</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-accent transition-colors hover:scale-105 hover:drop-shadow-[0_0_10px_#f59e0b] duration-300">Stack</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-accent transition-colors hover:scale-105 hover:drop-shadow-[0_0_10px_#f59e0b] duration-300">Projects</button>
        </div>

        <button 
          onClick={() => scrollTo("contact")}
          className="text-sm font-bold text-white bg-white/10 border border-white/20 px-5 py-2 rounded-xl hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
