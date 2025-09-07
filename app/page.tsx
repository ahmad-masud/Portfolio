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
import { About } from "@/components/About";
import { EducationList } from "@/components/EducationList";
import { ExperienceList } from "@/components/ExperienceList";
import { ProjectsList } from "@/components/ProjectsList";
import { SkillsList } from "@/components/SkillsList";
import { ContactList } from "@/components/ContactList";

export default function Portfolio() {
  const projectList = projects as Project[];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div
        aria-hidden
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2
          top-[-60vw] w-[200vw] h-[100vw] rounded-full
          bg-[radial-gradient(closest-side,rgba(59,130,246,0.45),rgba(59,130,246,0.20)_35%,transparent_70%)]
          dark:bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),rgba(59,130,246,0.15)_35%,transparent_70%)]
          blur-2xl
        "
      />

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <About id="about" data={about as AboutT} />
        <EducationList id="education" items={education as EducationT[]} />
        <ExperienceList id="experience" items={experience as Job[]} />
        <ProjectsList id="projects" items={projectList} />
        <SkillsList id="skills" categories={skills as SkillCategory[]} />
        <ContactList id="contact" data={contact as ContactT} />
      </main>

      <footer className="mx-auto max-w-5xl px-4 sm:px-6 py-10 text-sm text-gray-600 dark:text-neutral-400">
        <p>
          © {new Date().getFullYear()}{" "}
          {(about as AboutT)?.footer_name ?? "Your Name"}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
