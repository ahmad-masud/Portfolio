import Image from "next/image";
import { About as AboutT } from "@/lib/types";

export function About({ id, data }: { id: string; data: AboutT }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-neutral-800 dark:ring-gray-200">
            <Image
              src="/pfp.jpg"
              alt={(data?.about_name ?? "Profile") + " profile"}
              fill
              sizes="(max-width: 640px) 96px, 128px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-semibold tracking-tight gradient-text">
            {data?.about_name
              ? `Hi, I am ${data.about_name}`
              : "Hi, I am Your Name"}
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-neutral-300 max-w-prose">
            {data?.intro ??
              "I build clean, reliable apps for the web and mobile. I like practical solutions, readable code, and fast feedback loops."}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-block rounded-lg border border-gray-200 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors duration-200"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 dark:from-neutral-100 dark:to-blue-300 text-white dark:text-neutral-950 px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
