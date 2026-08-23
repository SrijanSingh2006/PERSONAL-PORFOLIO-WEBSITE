import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkDesktop = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    
    if (!isDesktop) {
      document.body.style.cursor = "auto";
      return;
    }

    // Hide default cursor globally
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);



    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(e.target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      const injectedStyle = document.getElementById("custom-cursor-style");
      if (injectedStyle) injectedStyle.remove();
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };

  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gradient-to-br from-[#22d3ee] to-[#6366f1] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(34,211,238,0.8)] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[rgba(139,92,246,0.6)] rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_rgba(99,102,241,0.3)]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0)",
          borderColor: isHovering ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.6)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
