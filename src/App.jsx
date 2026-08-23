import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FigmaAboutSection from "./components/sections/FigmaAboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import MinimalContactSection from "./components/sections/MinimalContactSection";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-background min-h-screen text-textMain font-sans overflow-x-hidden">
      <CustomCursor />
      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <main className="flex flex-col w-full">
        <HeroSection />
        <FigmaAboutSection />
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />
        <ExperienceSection />
        <MinimalContactSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
