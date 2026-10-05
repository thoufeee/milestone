import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-[620px] md:mb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-[clamp(28px,4.4vw,48px)] font-light uppercase leading-[1.12] tracking-[0.04em] text-balance">
        {title}
      </h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </Reveal>
  );
}
