import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050816] flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 rounded-full blur-[100px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center font-black text-white text-3xl shadow-[0_0_30px_rgba(99,102,241,0.5)] mb-6 relative overflow-hidden">
              <motion.div
                initial={{ top: "100%" }}
                animate={{ top: "-10%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent h-[200%] w-full"
              />
              S
            </div>
            
            <div className="flex items-center gap-1 text-[#a5b4fc] font-semibold tracking-widest text-sm uppercase">
              <span>Initializing</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
              >
                .
              </motion.span>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-[rgba(99,102,241,0.1)]">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#22d3ee] shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
