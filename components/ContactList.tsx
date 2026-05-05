import { Contact } from "@/lib/types";

export function ContactList({ id, data }: { id: string; data: Contact }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-semibold section-title">Contact</h2>
      {data?.blurb && (
        <p className="mt-2 text-gray-700 dark:text-neutral-300">{data.blurb}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-6">
        {data?.items?.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
            title={item.text ?? item.label}
          >
            {item.icon && (
              <img src={item.icon} alt={item.text ?? item.label} className="w-12 h-12 rounded-lg" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
