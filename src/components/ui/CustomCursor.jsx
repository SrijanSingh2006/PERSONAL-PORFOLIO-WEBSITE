import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-yellow-200 pointer-events-none z-[9999] shadow-[0_0_15px_#fcd34d]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-accent/20 blur-[25px] pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.8 }}
      />
    </>
  );
}
