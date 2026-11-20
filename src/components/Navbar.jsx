import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Sun, Moon, FileText, ArrowUpRight, Mail } from "lucide-react";

export default function Navbar({ onOpenResume, theme = "dark", onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuToggle = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuToggle.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .2, .5, .8] });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    setMobileOpen(false);
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={reducedMotion ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className={`portfolio-nav w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="portfolio-nav-inner mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("hero")}
            aria-label="Back to home"
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center font-black text-white text-sm shadow-md">
              S
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight gradient-text">
              Srijan Singh.
            </span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                whileHover={{ y: -1 }}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`nav-link relative px-3 py-2 text-sm font-semibold transition-colors duration-200 group ${activeSection === link.id ? "nav-link-active" : ""}`}
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <motion.button type="button" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} onClick={onToggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenResume || (() => scrollTo("resume"))}
              className="btn-outline !py-2 !px-4 !text-xs font-semibold"
            >
              <FileText size={15} /> Résumé
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("contact")}
              className="btn-primary !py-2 !px-5 !text-sm"
            >
              Get in touch <ArrowUpRight size={15} />
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              ref={menuToggle}
              className="mobile-menu-toggle"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="portfolio-mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="portfolio-mobile-menu"
            initial={reducedMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu fixed top-[73px] left-0 right-0 z-40 backdrop-blur-md border-b shadow-xl lg:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left py-3 px-2 text-sm font-semibold text-textMuted hover:text-textMain border-b border-slate-100 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  if (onOpenResume) onOpenResume();
                  else scrollTo("resume");
                  setMobileOpen(false);
                }}
                className="btn-outline mt-3 w-full !py-2.5 text-xs font-semibold"
              >
                <FileText size={15} className="inline mr-2" /> View résumé
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary mt-2 w-full !py-2.5 text-sm"
              >
                <Mail size={15} className="inline mr-2" /> Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
