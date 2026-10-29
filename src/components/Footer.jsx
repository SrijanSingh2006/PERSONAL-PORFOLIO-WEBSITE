import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer-editorial w-full pt-16 pb-8 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center font-black text-white text-sm shadow-md">
                S
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight gradient-text">Srijan Singh.</span>
            </div>
            <p className="text-sm text-textMuted leading-relaxed max-w-xs">
              AI workflow and full-stack engineer building governed LLM systems, evaluation pipelines, and tools for people.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-textMain uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["hero", "about", "projects", "experience", "resume", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-textMuted hover:text-indigo-600 transition-colors text-left capitalize"
                >
                  {id === "hero" ? "Home" : id}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-textMain uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 text-sm text-textMuted hover:text-indigo-600 transition-colors"
              >
                <Mail size={14} />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-textMuted hover:text-indigo-600 transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-textMuted hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-textMuted hover:text-indigo-600 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-indigo-600">LC</span>
                LeetCode
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <p className="text-xs text-textSubtle">
            © {new Date().getFullYear()} <span className="text-textMuted font-semibold">{PROFILE.name}</span>. Built with React & TailwindCSS.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-textMuted hover:text-indigo-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
          >
            Back to top <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
