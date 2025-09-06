export function Header({
  name,
  nav,
}: {
  name: string;
  nav: { id: string; label: string }[];
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-gray-200 dark:border-neutral-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#about" className="font-semibold">
          {name}
        </a>
        <nav className="hidden sm:flex items-center gap-2 sm:gap-4 text-sm">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
