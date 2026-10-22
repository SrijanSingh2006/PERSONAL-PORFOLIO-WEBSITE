import { motion } from "framer-motion";
import { FileText, Download, Eye, CheckCircle2, Sparkles, Award, GraduationCap, Briefcase, Code, ExternalLink } from "lucide-react";
import { PROFILE, STATS, CERTIFICATIONS, EXPERIENCE } from "../data/portfolioData";

export default function ResumeSection({ onOpenResume }) {
  const resumeBullets = [
    "AI Generalist & Developer specializing in creative design & workflow optimization",
    "B.Tech in Computer Science and Engineering from SRMIST (9.14 / 10 CGPA)",
    "7 End-to-End Platforms: TRIPMACHA, AGRICOMPLY, ReachInbox, DataLens, EmotionAI, Mentalytics, ECOSHIELD",
    "3 Remote Internships across AI Tooling, Web Applications & Workflow Optimization (CodeAlpha, Prodigy Infotech, Sukh Sagar Industries)",
    "SAP Certified Generative AI Developer + McKinsey.org Forward Program + Deloitte Data Analytics",
    "Proficient in Python, JavaScript, TypeScript, Google GenAI SDK, OpenCV, BullMQ, Redis, Docker, and FastAPI"
  ];

  return (
    <section id="resume" className="w-full py-28 section-gradient relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[500px] rounded-full bg-[#6366f1]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <div className="section-label">Curriculum Vitae</div>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
            Engineering Credentials & <span className="gradient-text">Curated Resume</span>
          </h2>
          <p className="text-textMuted max-w-2xl mt-4 text-base">
            Full-stack AI developer and tools engineer specializing in generative workflows, frictionless automation, and accessible user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Highlights & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  ATS-Optimized • AI Generalist & Systems Developer
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-textMain mb-4">
                Ready to empower innovative design and engineering teams.
              </h3>

              <p className="text-textMuted text-sm sm:text-base leading-relaxed mb-6">
                Equipped with the technical aptitude to uncover workflow bottlenecks, rigorously evaluate emerging AI tools, and deploy accessible Python/JS utilities from initial concept to execution.
              </p>

              <div className="space-y-3 mb-8">
                {resumeBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-textMuted">
                    <CheckCircle2 size={16} className="text-[#818cf8] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[rgba(99,102,241,0.15)]">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="btn-primary gap-2"
                id="resume-open-modal-btn"
              >
                <Eye size={16} />
                <span>Open Full Resume Preview</span>
              </motion.button>

              <a
                href={PROFILE.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline gap-2"
              >
                <Download size={16} />
                <span>View Official PDF (Drive) ↗</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Document Miniature Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={onOpenResume}
            className="lg:col-span-5 glass-card p-6 border border-[rgba(99,102,241,0.3)] bg-gradient-to-b from-[#0e1422] to-[#070b13] cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Document Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-textSubtle">
                  Srijan_Singh_Resume.pdf
                </span>
                <span className="text-xs text-[#818cf8] font-bold">9.14 CGPA</span>
              </div>

              {/* Document Mini Content */}
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-textMain group-hover:text-[#818cf8] transition-colors">
                    {PROFILE.name}
                  </h4>
                  <p className="text-xs text-[#a5b4fc] font-medium">
                    {PROFILE.role} • {PROFILE.location}
                  </p>
                  <p className="text-[11px] text-textSubtle font-mono mt-0.5">
                    {PROFILE.email} | {PROFILE.phone}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-bold text-[#818cf8] uppercase tracking-wider block">
                    Core Focus: AI Tools & Workflows
                  </span>
                  <p className="text-xs text-textMuted line-clamp-3 leading-relaxed">
                    Engineering undergraduate passionate about designing for creators and technical teams. Building AI tools, generative workflows, and accessible web apps in Python & JS to streamline complex processes.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                    <span className="text-textSubtle font-bold">EDUCATION</span>
                    <span className="text-textMain font-mono">SRMIST (9.14 CGPA)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                    <span className="text-textSubtle font-bold">PROJECTS</span>
                    <span className="text-textMain font-mono">7 Interactive Platforms</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                    <span className="text-textSubtle font-bold">INTERNSHIPS</span>
                    <span className="text-textMain font-mono">3 Remote Roles + IEEE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                    <span className="text-textSubtle font-bold">CERTIFICATIONS</span>
                    <span className="text-textMain font-mono">SAP GenAI, McKinsey</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-bold text-[#818cf8] group-hover:gap-3 transition-all">
              <Eye size={15} />
              <span>Click to view full interactive resume credentials</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
