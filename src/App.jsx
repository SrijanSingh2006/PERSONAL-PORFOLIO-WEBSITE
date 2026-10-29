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

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "light");

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`portfolio-shell min-h-screen text-textMain font-sans overflow-x-hidden ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <ScrollProgress />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main className="flex flex-col w-full">
        <HeroSection />
        <FigmaAboutSection />
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />
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
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
