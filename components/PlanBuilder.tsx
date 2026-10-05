"use client";

import { useState } from "react";
import { industries, needs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const OTHER_INDUSTRY = "Not listed";
const OTHER_NEED = "Something else";

function Chip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        on ? "border-fg bg-fg text-bg" : "border-line hover:border-fg"
      }`}
    >
      {label}
    </button>
  );
}

const label = "mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted";

export default function PlanBuilder() {
  const [industry, setIndustry] = useState("Healthcare");
  const [picked, setPicked] = useState<string[]>(["Mobile app", "Website"]);
  const [idea, setIdea] = useState("");

  const toggle = (n: string) =>
    setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const showIdea = industry === OTHER_INDUSTRY || picked.includes(OTHER_NEED);
  const names = picked.map((k) => (k === OTHER_NEED ? "custom solution" : k));
  const list =
    names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
  const who = industry === OTHER_INDUSTRY ? "your business" : `your ${industry.toLowerCase()} business`;
  const brief = picked.length ? `A ${list} for ${who}.` : "Pick at least one thing you need.";
  const weeks = picked.length ? Math.max(2, Math.ceil(Math.max(...picked.map((k) => needs[k])) * 0.8)) : 0;

  const send = () => {
    const lines = [`Project brief: ${brief}`];
    if (showIdea && idea.trim()) lines.push(`My idea: ${idea.trim()}`);
    window.dispatchEvent(new CustomEvent("milestone:brief", { detail: lines.join("\n") }));
  };

  return (
    <section id="plan" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <SectionHead
        eyebrow="Plan yours"
        title="Sketch your project."
        text="Choose your industry and what you need. We turn it into a first brief. If yours is not listed, tell us your idea."
      />
      <div className="grid gap-[clamp(28px,5vw,72px)] md:grid-cols-[1.1fr_1fr]">
        <Reveal className="min-w-0">
          <h3 className={label}>Your industry</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {industries.map((n) => (
              <Chip key={n} label={n} on={industry === n} onClick={() => setIndustry(n)} />
            ))}
          </div>
          <h3 className={label}>What do you need?</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {Object.keys(needs).map((n) => (
              <Chip key={n} label={n} on={picked.includes(n)} onClick={() => toggle(n)} />
            ))}
          </div>
          {showIdea && (
            <label className="grid gap-2 text-sm font-medium">
              Not on the list? Tell us your idea.
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                maxLength={400}
                placeholder="Describe it in a line or two. We read every idea."
                className="min-h-[92px] w-full resize-y rounded-[14px] border border-line bg-bg px-4 py-3 font-normal"
              />
            </label>
          )}
        </Reveal>
        <Reveal className="min-w-0 self-start">
          <div aria-live="polite" className="grid gap-4 rounded-3xl bg-soft p-[clamp(24px,3vw,36px)]">
            <small className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Your first brief</small>
            <div className="font-display text-[clamp(22px,2.6vw,30px)] font-light leading-[1.3]">{brief}</div>
            {weeks > 0 && (
              <div className="text-sm text-muted">Estimated first launch: about {weeks} weeks.</div>
            )}
            <a
              href="#contact"
              onClick={send}
              className="justify-self-start rounded-full bg-accent px-6.5 py-3 font-bold text-on-accent transition hover:brightness-110"
            >
              Send this brief to us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
