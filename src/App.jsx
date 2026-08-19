import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ResumeDetailsSection from "./components/sections/ResumeDetailsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import CleanExperienceSection from "./components/sections/CleanExperienceSection";
import MinimalContactSection from "./components/sections/MinimalContactSection";
import ProjectModal from "./components/ProjectModal";
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Hide default cursor globally
  useEffect(() => {
    document.body.style.cursor = 'none';
    const iteractables = document.querySelectorAll('a, button, input, select');
    iteractables.forEach(el => el.style.cursor = 'none');
    return () => {
      document.body.style.cursor = 'auto';
      iteractables.forEach(el => el.style.cursor = 'pointer');
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-textMain font-sans overflow-x-clip selection:bg-accent selection:text-background cursor-none">
      <CustomCursor />
      
      <Navbar />
      
      <main className="flex flex-col w-full">
        <HeroSection />
        <ResumeDetailsSection />
        <SkillsSection />
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />
        <CleanExperienceSection />
        <MinimalContactSection />
      </main>

      <footer className="w-full bg-background text-center py-8 border-t border-border text-xs text-textMuted font-mono">
        &copy; {new Date().getFullYear()} Srijan Singh. All rights reserved.
      </footer>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}