import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import { PROFILE, STATS } from "../../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center pt-20 hero-gradient grid-bg relative overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6366f1]/10 blur-[120px] pointer-events-none animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/8 blur-[100px] pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#22d3ee]/6 blur-[80px] pointer-events-none animate-float" style={{ animationDelay: "1s" }} />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Live badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-[rgba(99,102,241,0.25)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-xs font-semibold text-textMuted tracking-widest uppercase">Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Building{" "}
            <span className="gradient-text text-glow">
              Intelligent
            </span>
            <br />
            Systems with
            <br />
            <span className="gradient-text">Data & AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-textMuted max-w-xl mb-10 leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("projects")}
              className="btn-primary gap-2"
              id="hero-view-projects-btn"
            >
              View Projects
              <ArrowDown size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("contact")}
              className="btn-outline"
              id="hero-contact-btn"
            >
              Say Hello 👋
            </motion.button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-11 h-11 rounded-full glass border border-[rgba(99,102,241,0.25)] flex items-center justify-center text-textMuted hover:text-[#a5b4fc] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-11 h-11 rounded-full glass border border-[rgba(99,102,241,0.25)] flex items-center justify-center text-textMuted hover:text-[#a5b4fc] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-textMain mb-0.5">{stat.label}</div>
                <div className="text-xs text-textSubtle">{stat.caption}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.4, bounce: 0.3, delay: 0.3 }}
          className="flex justify-center lg:justify-end w-full relative"
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#6366f1]/30 to-[#8b5cf6]/20 blur-[60px]" />
          </div>

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Gradient border ring */}
            <div className="w-[340px] h-[420px] md:w-[380px] md:h-[460px] rounded-[2.5rem] p-[2px] bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#22d3ee] shadow-[0_0_60px_rgba(99,102,241,0.4)]">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-[#0d1117]">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Srijan Singh — AI/ML Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating badge — Spark icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-[rgba(99,102,241,0.4)] flex items-center gap-2 shadow-glow-sm"
            >
              <Sparkles size={14} className="text-[#818cf8]" />
              <span className="text-xs font-bold text-textMain">AI / ML</span>
            </motion.div>

            {/* Floating badge — CGPA */}
            <motion.div
              animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-[rgba(34,211,238,0.3)] flex items-center gap-2"
            >
              <span className="text-xs font-bold text-[#22d3ee]">⭐ CGPA {PROFILE.cgpa}</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-textSubtle cursor-pointer hover:text-textMuted transition-colors"
          onClick={() => scrollTo("about")}
        >
          <ArrowDown size={20} />
        </motion.div>
        <span className="text-xs text-textSubtle tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
