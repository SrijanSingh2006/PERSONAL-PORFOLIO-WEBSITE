import { useEffect, useRef, useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

const links = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Résumé", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuToggle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-40% 0px -45% 0px" });

    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuToggle.current?.focus();
      }
    }}>
      <div className="section-shell nav-layout">
        <a className="brand" href="#hero" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark" aria-hidden="true">SS</span>
          <span>{PROFILE.name}<span className="brand-period">.</span></span>
        </a>

        <nav aria-label="Main navigation" className="nav-links">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-button" onClick={onToggleTheme} aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}>
            <ThemeIcon size={18} />
          </button>
          <a href="#contact" className="button button-primary nav-contact">Get in touch</a>
          <button type="button" className="icon-button menu-toggle" ref={menuToggle} onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!mobileOpen}>
        <div className="section-shell">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
          ))}
          <button type="button" className="button button-outline" onClick={onOpenResume}><FileText size={17} /> Preview résumé</button>
        </div>
      </nav>
    </header>
  );
}
