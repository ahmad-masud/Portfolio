import { Job } from "@/lib/types";

export function ExperienceList({ id, items }: { id: string; items: Job[] }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-4">
        {items.map((job, i) => (
          <li
            key={i}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 p-4
                       bg-gradient-to-br from-gray-400/10 to-transparent dark:from-gray-500/15"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium truncate">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-neutral-400 shrink-0">
                {job.period}
              </p>
            </div>
            <div className="mt-1 flex items-baseline justify-between gap-4">
              <p className="text-sm text-gray-900 dark:text-neutral-200 truncate">
                {job.role}
              </p>
              {job.location ? (
                <p className="text-sm text-gray-600 dark:text-neutral-400 shrink-0">
                  {job.location}
                </p>
              ) : (
                <span />
              )}
            </div>
            {job.points && job.points.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-neutral-300 space-y-1">
                {job.points.map((pt, j) => (
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
