import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="py-[clamp(72px,12vw,160px)]">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Digital studio</p>
      <h1 className="max-w-[14ch] font-display text-[clamp(38px,7vw,88px)] font-light uppercase leading-[1.1] tracking-[0.04em] text-balance">
        Everything your business runs on.
      </h1>
      <p className="my-7 max-w-[480px] text-lg text-muted">
        Mobile apps, websites, ERP, e-commerce, automation and SEO, for every kind of industry.
        One team, from first idea to launch and beyond.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-full bg-accent px-6.5 py-3 font-bold text-on-accent transition hover:brightness-110"
        >
          Book a free audit
        </a>
        <a
          href={site.whatsapp}
          className="rounded-full border-[1.5px] border-fg px-6.5 py-3 font-bold transition hover:bg-fg hover:text-bg"
        >
          Chat on WhatsApp
        </a>
      </div>
      <p className="mt-[clamp(48px,8vw,96px)] text-sm tracking-[0.06em] text-muted">
        Mobile apps · Websites · ERP · SEO · E-commerce · Automation
      </p>
    </section>
  );
}
