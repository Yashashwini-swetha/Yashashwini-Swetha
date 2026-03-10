import { useState } from "react";
import { motion } from "motion/react";
import { IntroSequence } from "./intro-sequence";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { SkillsSection } from "./skills-section";
import { ProjectsSection } from "./projects-section";
import { GoalsSection } from "./goals-section";
import { ContactSection } from "./contact-section";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen overflow-x-hidden" 
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Smooth scroll container */}
      <div className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GoalsSection />
        <ContactSection />
      </div>
    </motion.div>
  );
}
