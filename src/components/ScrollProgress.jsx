import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#0284c7] transform origin-left z-[9999] shadow-sm"
      aria-hidden="true"
      style={{ scaleX: reducedMotion ? scrollYProgress : springProgress }}
    />
  );
}
