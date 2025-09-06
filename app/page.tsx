// app/page.tsx
import about from "@/data/about.json";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import contact from "@/data/contact.json";

import {
  About as AboutT,
  Education as EducationT,
  Job,
  Project,
  SkillCategory,
  Contact as ContactT,
} from "@/lib/types";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { EducationList } from "@/components/EducationList";
import { ExperienceList } from "@/components/ExperienceList";
import { ProjectsList } from "@/components/ProjectsList";
import { SkillsList } from "@/components/SkillsList";
import { ContactList } from "@/components/ContactList";

export default function Portfolio() {
  const nav = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const projectList = projects as Project[];
  const visibleProjects = projectList;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header name={(about as AboutT)?.name ?? "Your Name"} nav={nav} />

      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <About id="about" data={about as AboutT} />
        <EducationList id="education" items={education as EducationT[]} />
        <ExperienceList id="experience" items={experience as Job[]} />
        <ProjectsList id="projects" items={visibleProjects} />
        <SkillsList id="skills" categories={skills as SkillCategory[]} />
        <ContactList id="contact" data={contact as ContactT} />
      </main>

      <footer className="mx-auto max-w-3xl px-4 sm:px-6 py-10 text-sm text-gray-600 dark:text-neutral-400">
        <p>
          © {new Date().getFullYear()} {(about as AboutT)?.name ?? "Your Name"}
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
