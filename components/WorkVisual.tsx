import type { WorkKind } from "@/lib/content";

const stage: Record<WorkKind, string> = {
  app: "bg-ink",
  erp: "bg-accent",
  web: "bg-tint",
  shop: "bg-ink-2",
};

const chips: Record<WorkKind, [string, string]> = {
  app: ["Reminder sent", "Booked · 10:30"],
  erp: ["Low stock alert", "Order #1042 shipped"],
  web: ["Ranked #1 locally", "New enquiry"],
  shop: ["Paid via UPI", "Order shipped"],
};

const shadow = "shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)]";

function Phone() {
  return (
    <div
      className={`relative z-[1] grid aspect-[9/17] w-[min(190px,48%)] content-start gap-2.5 rounded-[30px] border-[6px] border-surface bg-bg px-3.5 pb-3.5 pt-[34px] motion-safe:animate-sway ${shadow}`}
    >
      <i className="absolute left-1/2 top-2.5 h-2 w-[50px] -translate-x-1/2 rounded bg-line" />
      {[0, 1, 2, 3].map((n) => (
        <div
          key={n}
          className={`flex items-center gap-2 rounded-xl p-2 ${n === 3 ? "bg-accent motion-safe:animate-blink" : "bg-soft"}`}
        >
          <b className={`size-[22px] flex-none rounded-full ${n === 3 ? "bg-on-accent" : "bg-ink-2"}`} />
          <u className={`h-2 flex-1 rounded ${n === 3 ? "bg-white/60" : "bg-line"}`} />
        </div>
      ))}
      <div className="absolute -right-3.5 bottom-[30px] grid size-10 place-items-center rounded-full bg-[#25a85a] font-bold text-white motion-safe:animate-pop">
        ✓
      </div>
    </div>
  );
}

function Dashboard() {
  const bars = [35, 60, 45, 80, 65, 95, 75];
  return (
    <div className={`relative z-[1] grid w-[min(380px,84%)] gap-3 rounded-[20px] bg-surface px-4 pb-[18px] pt-3.5 ${shadow}`}>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((n) => (
          <i key={n} className="size-[9px] rounded-full bg-line" />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["Orders", "248"], ["In stock", "1,930"], ["Dispatched", "96%"]].map(([k, v]) => (
          <div key={k} className="grid rounded-xl bg-soft px-2.5 py-2">
            <small className="text-[11px] text-muted">{k}</small>
            <b className="font-display text-[22px] font-semibold">{v}</b>
          </div>
        ))}
      </div>
      <div className="flex h-[110px] items-end gap-2">
        {bars.map((h, n) => (
          <i
            key={n}
            style={{ "--h": `${h}%`, height: `${h}%`, animationDelay: n % 2 ? "-1.1s" : "0s" } as React.CSSProperties}
            className={`flex-1 rounded-t-[5px] motion-safe:animate-grow ${n === 3 || n === 5 ? "bg-accent" : "bg-ink-2"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Browser() {
  return (
    <>
      <div className={`relative z-[1] grid w-[min(380px,84%)] gap-3 rounded-[20px] bg-surface px-3.5 pb-[18px] pt-3 ${shadow}`}>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((n) => (
            <i key={n} className="size-[9px] rounded-full bg-line" />
          ))}
          <em className="ml-2.5 rounded-full bg-soft px-3 py-0.5 text-[11px] font-bold not-italic text-muted">
            yourproperty.in
          </em>
        </div>
        <div className="h-[84px] rounded-xl bg-gradient-to-br from-ink-2 to-ink" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              style={{ animationDelay: `${n * 0.5}s` }}
              className="h-[62px] rounded-[10px] bg-soft motion-safe:animate-blink"
            />
          ))}
        </div>
      </div>
      <span
        aria-hidden
        className="absolute left-[55%] top-[58%] z-[3] size-0 -rotate-[25deg] border-x-[9px] border-b-[18px] border-x-transparent border-b-fg motion-safe:animate-cursor"
      />
    </>
  );
}

function Shop() {
  return (
    <div className={`relative z-[1] grid w-[min(380px,84%)] gap-3.5 rounded-[20px] bg-surface px-4 pb-[18px] pt-3.5 ${shadow}`}>
      <div className="flex items-center justify-between">
        <em className="font-display font-bold uppercase not-italic tracking-[0.06em]">spice·store</em>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold">
          Cart
          <b className="grid size-[22px] place-items-center rounded-full bg-accent text-on-accent motion-safe:animate-pop">3</b>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[["₹249", "bg-tint"], ["₹399", "bg-soft"], ["₹180", "bg-ink-2"]].map(([p, c], n) => (
          <div key={p} className="grid gap-1.5">
            <i
              style={{ animationDelay: `${n * 0.6}s` }}
              className={`h-[92px] rounded-xl ${c} motion-safe:animate-blink`}
            />
            <u className="text-[13px] font-bold no-underline">{p}</u>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkVisual({ kind }: { kind: WorkKind }) {
  return (
    <div
      aria-hidden
      className={`relative grid min-h-[300px] place-items-center overflow-hidden md:min-h-[340px] ${stage[kind]}`}
    >
      <span className="absolute aspect-square w-[140%] rounded-full border border-white/20 shadow-[0_0_0_60px_rgba(255,255,255,0.05),0_0_0_120px_rgba(255,255,255,0.04)]" />
      {kind === "app" && <Phone />}
      {kind === "erp" && <Dashboard />}
      {kind === "web" && <Browser />}
      {kind === "shop" && <Shop />}
      <span className="absolute right-[8%] top-[14%] z-[2] whitespace-nowrap rounded-[14px] bg-surface px-3.5 py-2 text-[13px] font-bold text-fg shadow-lg motion-safe:animate-float">
        {chips[kind][0]}
      </span>
      <span
        style={{ animationDelay: "-2s" }}
        className="absolute bottom-[14%] left-[8%] z-[2] whitespace-nowrap rounded-[14px] bg-surface px-3.5 py-2 text-[13px] font-bold text-fg shadow-lg motion-safe:animate-float"
      >
        {chips[kind][1]}
      </span>
    </div>
  );
}
