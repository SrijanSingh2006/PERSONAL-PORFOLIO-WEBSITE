import { motion } from "framer-motion";

export default function MinimalContactSection() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="magical-glass rounded-3xl p-12 md:p-16 flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-magic-gradient opacity-50"></div>
        <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Get In Touch</h2>
        <p className="text-base font-light text-white/80 mb-10 max-w-md relative z-10">
          Interested in collaborating? Drop me an email or connect on socials.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center relative z-10 pointer-events-auto cursor-none">
          <a 
            href="mailto:srijansingh2006@gmail.com"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300"
          >
            srijansingh2006@gmail.com
          </a>
          <a 
            href="tel:+919838027276"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            +91 9838027276
          </a>
        </div>

        <div className="flex gap-6 mt-10 relative z-10 pointer-events-auto cursor-none">
          <a href="https://github.com/SrijanSingh2006" target="_blank" rel="noreferrer" className="text-white/60 hover:text-accent hover:scale-110 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/srijan-singh-999a552a9" target="_blank" rel="noreferrer" className="text-white/60 hover:text-accent hover:scale-110 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
