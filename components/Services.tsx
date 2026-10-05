import { services } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <SectionHead eyebrow="What we build" title="Six things, one team." />
      <div className="grid gap-x-14 md:grid-cols-2">
        {services.map((s) => (
          <Reveal key={s.title} className="grid content-start gap-2 border-t border-line py-7">
            <h3 className="font-display text-[22px] font-semibold tracking-[0.02em]">{s.title}</h3>
            <p className="max-w-[40ch] text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
