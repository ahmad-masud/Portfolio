import { About as AboutT } from "@/lib/types";

export function About({ id, data }: { id: string; data: AboutT }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <h1 className="text-3xl sm:text-6xl font-semibold tracking-tight gradient-text">
        {data?.about_name
          ? `Hi, I am ${data.about_name}`
          : "Hi, I am Your Name"}
      </h1>
      <p className="mt-3 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-neutral-300 max-w-prose">
        {data?.intro ??
          "I build clean, reliable apps for the web and mobile. I like practical solutions, readable code, and fast feedback loops."}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-block rounded-lg border border-gray-200 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors duration-200"
        >
          See projects
        </a>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 dark:from-neutral-100 dark:to-blue-300 text-white dark:text-neutral-950 px-4 py-2 text-sm hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-all duration-200"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
