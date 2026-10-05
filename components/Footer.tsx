import { nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-5 text-sm text-muted">
        <a href="#top" className="font-display text-xl font-semibold uppercase tracking-[0.14em] text-fg">
          <i className="mr-2.5 inline-block size-[9px] rounded-full bg-accent align-middle" />
          Milestone
        </a>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          {nav.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-fg">{l.label}</a>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} Milestone</span>
      </div>
    </footer>
  );
}
