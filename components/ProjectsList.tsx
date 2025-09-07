import { Project } from "@/lib/types";

export function ProjectsList({ id, items }: { id: string; items: Project[] }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article
            key={i}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 p-4
                       bg-gradient-to-br from-gray-400/10 to-transparent dark:from-gray-500/15"
          >
            <div className="flex flex-col sm:flex-col gap-2 h-full">
              <div className="min-w-0 flex-1">
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
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
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
