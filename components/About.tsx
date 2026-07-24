import Image from "next/image";
import { About as AboutT, Contact as ContactT } from "@/lib/types";

export function About({
  id,
  data,
  contact,
}: {
  id: string;
  data: AboutT;
  contact: ContactT;
}) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
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
              className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-200 px-3 text-xs leading-none whitespace-nowrap transition-colors duration-200 hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
            >
              See projects
            </a>
            {contact.items.map((item) => {
              const label = item.text ?? item.label ?? "Contact link";

              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-80 focus:outline-none"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={label}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
