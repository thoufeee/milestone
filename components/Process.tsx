import { steps } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="how" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <SectionHead eyebrow="How we work" title="Four steps to launch." />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.08} className="grid content-start gap-2 border-t-2 border-fg pt-5">
              <b className="font-display text-sm font-light tracking-[0.14em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </b>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-[15px] text-muted">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
