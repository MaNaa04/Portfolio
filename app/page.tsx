import Sidebar from "@/components/Sidebar/Sidebar";
import SectionHeading from "@/components/Common/SectionHeading";
import AboutSection from "@/components/About/AboutSection";
import GitHubSection from "@/components/GitHub/GitHubSection";
import LeetCodeSection from "@/components/LeetCode/LeetCodeSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import EducationSection from "@/components/Education/EducationSection";
import CommandPalette from "@/components/CommandPalette/CommandPalette";

import ContactSection from "@/components/Contact/ContactSection";
import Reveal from "@/components/Common/Reveal";
import CosmosBackground from "@/components/Common/CosmosBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black relative">
      <CosmosBackground />
      <CommandPalette />
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Scrollable Content */}
      <main className="w-full lg:w-auto lg:ml-[320px] flex-1 min-h-screen">
        <div className="max-w-[1024px] px-6 pt-24 pb-12 md:px-16 md:pt-32 lg:pt-16 md:pb-16 space-y-20 md:space-y-[96px]">
          <Reveal><AboutSection /></Reveal>
          <Reveal>
            <section id="activity" className="space-y-8 min-w-0">
              <SectionHeading number="02" title="Technical Pulse" badge="ACTIVITY_&_CODE" />
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                <GitHubSection />
                <LeetCodeSection />
              </div>
            </section>
          </Reveal>
          <Reveal><ExperienceSection /></Reveal>
          <Reveal><ProjectsSection /></Reveal>
          <Reveal><SkillsSection /></Reveal>
          <Reveal><EducationSection /></Reveal>

          <Reveal><ContactSection /></Reveal>
        </div>

        {/* Footer */}
        <footer className="px-6 md:px-16 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-[#525252] tracking-[0.15em] uppercase text-center md:text-left">
            DESIGNED_FOR_PERFORMANCE // BUILT_WITH_PRECISION // © 2026
          </p>
          <p className="font-outfit text-xs text-[#525252] text-center md:text-right">
            Thanks for stopping by! Crafted with <span className="text-[#FF5C00]">♥</span>
          </p>
        </footer>
      </main>
    </div>
  );
}
