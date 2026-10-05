import { quotes, stats } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Customers() {
  return (
    <section id="customers" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <SectionHead eyebrow="Our customers" title="Businesses that grew with us." />
      <div className="mb-[clamp(40px,6vw,72px)] grid grid-cols-2 gap-y-7 md:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="grid gap-1 pr-4">
            <b className="font-display text-[clamp(40px,6vw,72px)] font-light leading-none tabular-nums">
              {s.value}
              {s.suffix && <small className="text-[0.38em] text-muted">{s.suffix}</small>}
            </b>
            <span className="text-sm text-muted">{s.label}</span>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-[clamp(24px,4vw,48px)] md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.who} delay={i * 0.08}>
            <figure className="m-0 grid h-full content-between gap-5 border-t border-line pt-6">
              <blockquote className="font-display text-[clamp(18px,1.8vw,22px)] font-light leading-[1.45]">
                {q.text}
              </blockquote>
              <figcaption className="grid text-sm">
                {q.who}
                <span className="text-[13px] text-muted">Sample testimonial</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
