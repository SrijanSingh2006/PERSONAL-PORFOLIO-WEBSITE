import MlWorkflow from "../MlWorkflow";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";
import Certifications from "../Certifications";
import Profiles from "../Profiles";
import ResumeSection from "../ResumeSection";
import Contact from "../Contact";

export default function WorkflowAndCredentials({ onOpenResume }) {
  return (
    <div className="w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit">
      {/* 1. ML Pipeline Architecture */}
      <MlWorkflow />

      {/* 2. Technical Skills */}
      <Skills />

      {/* 3. Work Experience */}
      <Experience />

      {/* 4. Academic Background */}
      <Education />

      {/* 5. Certifications */}
      <Certifications />

      {/* 6. Coding & Professional Profiles */}
      <Profiles />

      {/* 7. Dedicated Resume Section */}
      <ResumeSection onOpenResume={onOpenResume} />

      {/* 8. Contact Section */}
      <Contact onOpenResume={onOpenResume} />
    </div>
  );
}
