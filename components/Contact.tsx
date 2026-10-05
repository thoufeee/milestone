"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-[14px] border border-line bg-bg px-4 py-3 font-normal";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // The plan builder sends its brief here.
  useEffect(() => {
    const onBrief = (e: Event) => setMessage((e as CustomEvent<string>).detail);
    window.addEventListener("milestone:brief", onBrief);
    return () => window.removeEventListener("milestone:brief", onBrief);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-[clamp(72px,10vw,128px)]">
      <div className="grid gap-[clamp(32px,6vw,88px)] md:grid-cols-2">
        <Reveal className="min-w-0">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Contact</p>
          <h2 className="font-display text-[clamp(28px,4.4vw,48px)] font-light uppercase leading-[1.12] tracking-[0.04em] text-balance">
            Tell us what you want to build.
          </h2>
          <div className="mt-7 grid gap-3.5 text-muted">
            <p>We reply on WhatsApp within one working day.</p>
            <p><b className="font-medium text-fg">WhatsApp</b><br />{site.phone}</p>
            <p><b className="font-medium text-fg">Email</b><br />{site.email}</p>
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          {status === "sent" ? (
            <div role="status" className="rounded-3xl bg-soft p-8">
              <h3 className="mb-2 font-display text-2xl font-semibold">Thank you.</h3>
              <p className="text-muted">We have your request and will reply on WhatsApp within one working day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4.5">
              <label className="grid gap-1.5 text-sm font-medium">
                Your name
                <input name="name" required autoComplete="name" className={input} />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                WhatsApp number
                <input name="phone" type="tel" required autoComplete="tel" className={input} />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                What would you like to build?
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${input} min-h-[110px] resize-y`}
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="justify-self-start rounded-full bg-accent px-6.5 py-3 font-bold text-on-accent transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request free audit"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
