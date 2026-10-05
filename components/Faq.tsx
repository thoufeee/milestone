import { faqs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionHead eyebrow="FAQ" title="Common questions." />
      <Reveal className="max-w-[760px]">
        {faqs.map((f) => (
          <details key={f.q} className="group border-t border-line last:border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5.5 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-[22px] leading-none text-accent group-open:hidden">+</span>
              <span className="hidden text-[22px] leading-none text-accent group-open:inline">–</span>
            </summary>
            <p className="max-w-[60ch] pb-5.5 text-muted">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
