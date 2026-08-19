import { motion } from "framer-motion";

export default function BentoAboutSection() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-3xl font-bold text-textMain tracking-tight">Overview</h2>
        <p className="text-textMuted">A quick look at my background and technical focus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bio Card (Spans 2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass-card p-8 flex flex-col justify-between"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-textMain mb-4">Background</h3>
            <p className="text-textMuted leading-relaxed">
              I am a Computer Science undergraduate at SRM Institute of Science and Technology. 
              My expertise lies in designing end-to-end Machine Learning pipelines, developing robust 
              Deep Learning models, and integrating Generative AI into practical applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-mono text-accent">B.Tech CSE '27</span>
            <span className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-mono text-accent">9.14 CGPA</span>
          </div>
        </motion.div>

        {/* Experience Metric Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="text-5xl font-bold text-gradient-accent mb-2">6+</div>
          <p className="text-textMain font-medium mb-1">Production Projects</p>
          <p className="text-sm text-textMuted">End-to-end pipelines</p>
        </motion.div>

        {/* Core Tech Stack (Spans all cols in mobile, 1 in desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold text-textMain mb-4">Core Focus</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm text-textMuted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Predictive Modeling
            </li>
            <li className="flex items-center gap-3 text-sm text-textMuted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Neural Networks
            </li>
            <li className="flex items-center gap-3 text-sm text-textMuted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Natural Language Processing
            </li>
            <li className="flex items-center gap-3 text-sm text-textMuted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Computer Vision
            </li>
          </ul>
        </motion.div>

        {/* Workflow / Deployment (Spans 2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 glass-card p-8 flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold text-textMain mb-4">Infrastructure & Deployment</h3>
          <p className="text-textMuted text-sm leading-relaxed mb-6">
            Building models is only half the battle. I containerize applications using Docker, build highly scalable asynchronous APIs with FastAPI and Flask, and manage data pipelines using Celery, Redis, and AWS.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "FastAPI", "Docker", "AWS S3", "React"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-mono text-textMuted">{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
