"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { works } from "@/lib/content";
import SectionHead from "./SectionHead";
import WorkVisual from "./WorkVisual";

/** True on screens where the stacking effect applies. */
function useDesktop() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 800px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setOn(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return on;
}

function Card({
  work,
  i,
  progress,
  stack,
}: {
  work: (typeof works)[number];
  i: number;
  progress: MotionValue<number>;
  stack: boolean;
}) {
  const n = works.length;
  const depth = n - 1 - i; // how many cards will land on top of this one
  const scale = useTransform(progress, [i / n, 1], [1, 1 - depth * 0.05]);
  const filter = useTransform(progress, [i / n, 1], ["brightness(1)", `brightness(${1 - depth * 0.1})`]);
  const flip = i % 2 === 1;

  return (
    <motion.article
      style={stack ? { scale, filter, top: 92 + i * 20 } : undefined}
      className="mb-6 grid origin-top overflow-hidden rounded-[36px] border border-line bg-surface md:sticky md:min-h-[420px] md:grid-cols-[1fr_1.15fr] md:data-[flip=true]:grid-cols-[1.15fr_1fr]"
      data-flip={flip}
    >
      <div className={`grid min-w-0 content-center gap-3.5 p-[clamp(24px,4vw,48px)] ${flip ? "md:order-2" : ""}`}>
        <div className="flex items-baseline gap-1.5 font-display text-muted">
          <b className="text-[clamp(44px,6vw,76px)] font-light leading-none text-fg">{String(i + 1).padStart(2, "0")}</b>
          <span>/ {String(n).padStart(2, "0")}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs font-bold">
          <span className="rounded-full bg-accent px-3 py-1 text-on-accent">{work.type}</span>
          <span className="rounded-full bg-soft px-3 py-1">{work.industry}</span>
        </div>
        <h3 className="font-display text-[clamp(26px,3.2vw,40px)] font-light uppercase leading-[1.1] tracking-[0.03em]">
          {work.title}
        </h3>
        <p className="max-w-[44ch] text-muted">{work.text}</p>
        <ul className="flex flex-wrap gap-2">
          {work.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-[13px] font-bold text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-3 border-t border-line pt-3.5">
          <b className="font-display text-[clamp(34px,4vw,48px)] font-light leading-none text-accent">{work.metric.value}</b>
          <span className="text-sm text-muted">{work.metric.label}</span>
        </div>
        <a
          href="#contact"
          className="justify-self-start rounded-full border-[1.5px] border-fg px-5 py-2.5 text-sm font-bold transition hover:bg-fg hover:text-bg"
        >
          Build something like this →
        </a>
      </div>
      <WorkVisual kind={work.kind} />
    </motion.article>
  );
}

export default function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const stack = useDesktop();

  return (
    <section id="work" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <SectionHead eyebrow="Our works" title="Selected projects." />
      <div ref={ref}>
        {works.map((w, i) => (
          <Card key={w.title} work={w} i={i} progress={scrollYProgress} stack={stack} />
        ))}
      </div>
      <p className="mt-6 text-[13px] text-muted">
        Sample projects and figures shown for layout. Replace with your real portfolio.
      </p>
    </section>
  );
}
