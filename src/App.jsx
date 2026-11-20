import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FigmaAboutSection from "./components/sections/FigmaAboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ResumeSection from "./components/ResumeSection";
import MinimalContactSection from "./components/sections/MinimalContactSection";
import ProjectModal from "./components/ProjectModal";
import ResumeModal from "./components/ResumeModal";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // The toggle still works for this visit if browser storage is unavailable.
  }
  return "dark";
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Keep the current theme in memory when storage is blocked.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#110f19" : "#f9f7fe");
  }, [theme]);

  return (
    <div className={`portfolio-shell theme-${theme}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} theme={theme} onToggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")} />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection onOpenModal={setSelectedProject} />
        <FigmaAboutSection />
        <ExperienceSection />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <MinimalContactSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
