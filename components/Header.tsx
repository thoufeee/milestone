import { nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg px-5">
      <div className="mx-auto flex h-[68px] max-w-[1040px] items-center justify-between gap-4">
        <a href="#top" className="font-display text-xl font-semibold uppercase tracking-[0.14em]">
          <i className="mr-2.5 inline-block size-[9px] rounded-full bg-accent align-middle" />
          Milestone
        </a>
        <nav aria-label="Main" className="hidden gap-[30px] text-sm text-muted md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-on-accent transition hover:brightness-110"
        >
          Free audit
        </a>
      </div>
    </header>
  );
}
