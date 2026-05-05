import Image from "next/image";
import { Job } from "@/lib/types";
import { calculateDuration } from "@/lib/duration";

const DEFAULT_ENTRY_IMAGE = "/default-entry.svg";

export function ExperienceList({ id, items }: { id: string; items: Job[] }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold section-title">Experience</h2>
      <ul className="mt-4 space-y-4">
        {items.map((job, i) => {
          const duration = calculateDuration(job.period);
          return (
            <li
              key={i}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 p-4
                         bg-gradient-to-br from-gray-400/10 to-transparent dark:from-gray-500/15 card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src={job.image ?? DEFAULT_ENTRY_IMAGE}
                      alt={job.imageAlt ?? `${job.company} logo`}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-medium truncate">{job.company}</p>
                    <p className="mt-1 text-sm text-gray-900 dark:text-neutral-200 truncate">
                      {job.role}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {job.period}
                  </p>
                  {duration && (
                    <p className="text-xs text-gray-500 dark:text-neutral-500 mt-0.5">
                      {duration}
                    </p>
                  )}
                  {job.location ? (
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      {job.location}
                    </p>
                  ) : null}
                </div>
              </div>
              {job.points && job.points.length > 0 && (
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-neutral-300 space-y-1">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
