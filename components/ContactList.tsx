import { Contact } from "@/lib/types";

export function ContactList({ id, data }: { id: string; data: Contact }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      {data?.blurb && (
        <p className="mt-2 text-gray-700 dark:text-neutral-300">{data.blurb}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-3">
        {data?.items?.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center rounded-lg bg-gray-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 text-sm hover:opacity-90"
          >
            {item.text ?? item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
