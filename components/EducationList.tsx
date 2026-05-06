import Image from "next/image";
import { Education } from "@/lib/types";

const DEFAULT_ENTRY_IMAGE = "/default-entry.svg";

export function EducationList({
  id,
  items,
}: {
  id: string;
  items: Education[];
}) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold section-title">Education</h2>
      <ul className="relative mt-4 space-y-6 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gray-200 before:content-[''] dark:before:bg-neutral-800">
        {items.map((ed, i) => {
          return (
            <li key={i} className="relative pl-16">
              <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 bg-white p-1.5 shadow-sm dark:border-neutral-700 dark:bg-neutral-950">
                <Image
                  src={ed.image ?? DEFAULT_ENTRY_IMAGE}
                  alt={ed.imageAlt ?? `${ed.school} emblem`}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex items-start gap-3">
                  <div className="min-w-0 pt-0.5">
                    <p className="font-medium truncate">{ed.school}</p>
                    <p className="mt-1 text-sm text-gray-900 dark:text-neutral-200 truncate">
                      {ed.degree}
                      {ed.field ? ` in ${ed.field}` : ""}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {ed.period}
                  </p>
                  {ed.location ? (
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      {ed.location}
                    </p>
                  ) : null}
                </div>
              </div>
              {ed.points && ed.points.length > 0 && (
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 marker:text-gray-400 dark:text-neutral-400 dark:marker:text-neutral-600 space-y-1">
                  {ed.points.map((pt, j) => (
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
