import { Project } from "@/lib/types";

export function ProjectsList({ id, items }: { id: string; items: Project[] }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold section-title">Projects</h2>
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
                <ul className="flex flex-wrap gap-3 mt-2">
                  {p.links.map((link, k) => {
                    const isLive =
                      link.label.toLowerCase().includes("live") ||
                      link.label.toLowerCase().includes("docs");
                    const isGitHub =
                      link.label.toLowerCase().includes("github") ||
                      link.url.includes("github.com");
                    return (
                      <li key={k} className="truncate">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
                          title={link.label}
                        >
                          {isLive ? (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="flex-shrink-0"
                            >
                              <path d="M18 13v6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-6m12-3l3.293-3.293a1 1 0 00-1.414-1.414L17 8m0-8h6v6" />
                            </svg>
                          ) : isGitHub ? (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-shrink-0"
                            >
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.544 2.914 1.19.092-.926.349-1.538.636-1.892-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          ) : null}
                          <span className="truncate">{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
