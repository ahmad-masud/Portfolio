import { Education } from "@/lib/types";

export function EducationList({
  id,
  items,
}: {
  id: string;
  items: Education[];
}) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Education</h2>
      <ul className="mt-4 space-y-4">
        {items.map((ed, i) => (
          <li
            key={i}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 p-4
                       bg-gradient-to-br from-gray-400/10 to-transparent dark:from-gray-500/15"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium truncate">{ed.school}</p>
              <p className="text-sm text-gray-600 dark:text-neutral-400 shrink-0">
                {ed.period}
              </p>
            </div>
            <div className="mt-1 flex items-baseline justify-between gap-4">
              <p className="text-sm text-gray-900 dark:text-neutral-200 truncate">
                {ed.degree}
                {ed.field ? ` in ${ed.field}` : ""}
              </p>
              {ed.location ? (
                <p className="text-sm text-gray-600 dark:text-neutral-400 shrink-0">
                  {ed.location}
                </p>
              ) : (
                <span />
              )}
            </div>
            {ed.points && ed.points.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-neutral-300 space-y-1">
                {ed.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
