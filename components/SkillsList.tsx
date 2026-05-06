import { SkillCategory } from "@/lib/types";

export function SkillsList({
  id,
  categories,
}: {
  id: string;
  categories: SkillCategory[];
}) {
  return (
    <section id={id} className="py-6">
      <h2 className="text-2xl font-semibold section-title">Skills</h2>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/50"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-neutral-400">
                {cat.category}
              </h3>
              <span className="text-xs text-gray-400 dark:text-neutral-500">
                {cat.items.length}
              </span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {cat.items.map((s, j) => (
                <li
                  key={j}
                  className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
