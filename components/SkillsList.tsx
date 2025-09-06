import { SkillCategory } from "@/lib/types";
export function SkillsList({
  id,
  categories,
}: {
  id: string;
  categories: SkillCategory[];
}) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 space-y-6">
        {categories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-lg font-medium mb-2">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((s, j) => (
                <li
                  key={j}
                  className="rounded-full border border-gray-200 dark:border-neutral-800 px-3 py-1 text-sm text-gray-800 dark:text-neutral-200"
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
