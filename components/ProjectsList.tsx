// components/ProjectsList.tsx
import { Project } from "@/lib/types";

export function ProjectsList({ id, items }: { id: string; items: Project[] }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {items.map((p, i) => (
          <article
            key={i}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-neutral-300">
                  {p.desc}
                </p>
                {p.tags && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t, k) => (
                      <span
                        key={k}
                        className="rounded-full border border-gray-200 dark:border-neutral-800 px-2.5 py-0.5 text-xs text-gray-700 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {p.links && p.links.length > 0 && (
                <ul className="sm:text-right flex flex-wrap sm:flex-col gap-x-3 gap-y-1 sm:pl-4 shrink-0">
                  {p.links.map((link, k) => (
                    <li key={k} className="truncate">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm underline truncate"
                        title={link.label}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
