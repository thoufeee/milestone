export const site = {
  name: "Milestone",
  url: "https://milestone.in",
  description:
    "Milestone builds mobile apps, websites, ERP, e-commerce, automation and SEO for every industry.",
  whatsapp: "https://wa.me/", // add the number, e.g. https://wa.me/91XXXXXXXXXX
  phone: "+91 00000 00000",
  email: "hello@milestone.in",
};

export const nav = [
  { href: "#services", label: "What we build" },
  { href: "#work", label: "Our works" },
  { href: "#plan", label: "Plan yours" },
  { href: "#customers", label: "Customers" },
  { href: "#faq", label: "FAQ" },
];

export const services = [
  { title: "Mobile apps", text: "Android and iPhone apps for customers, staff and field teams." },
  { title: "Websites", text: "Fast company sites and portals that bring in enquiries." },
  { title: "ERP", text: "Sales, stock, accounts and HR in one system built around your process." },
  { title: "SEO", text: "Be found first when people nearby search for what you offer." },
  { title: "E-commerce", text: "Online shops with payments, shipping and reorders." },
  { title: "Automation and support", text: "Reminders, billing and reports that run themselves, backed by ongoing care." },
];

export type WorkKind = "app" | "erp" | "web" | "shop";

export const works: {
  kind: WorkKind;
  type: string;
  industry: string;
  title: string;
  text: string;
  tags: string[];
  metric: { value: string; label: string };
}[] = [
  {
    kind: "app",
    type: "Mobile app",
    industry: "Healthcare",
    title: "Clinic booking app",
    text: "Patients book, get reminders and see reports from one app.",
    tags: ["Android", "iOS", "Reminders"],
    metric: { value: "-42%", label: "missed appointments" },
  },
  {
    kind: "erp",
    type: "ERP",
    industry: "Manufacturing",
    title: "Factory stock and orders",
    text: "Raw material, production and dispatch tracked in one place.",
    tags: ["Stock", "Production", "Dispatch"],
    metric: { value: "3x", label: "faster dispatch" },
  },
  {
    kind: "web",
    type: "Website",
    industry: "Real estate",
    title: "Property listing portal",
    text: "Search, filters and enquiry capture, ranked on page one locally.",
    tags: ["Search", "Filters", "SEO"],
    metric: { value: "+180%", label: "enquiries" },
  },
  {
    kind: "shop",
    type: "E-commerce",
    industry: "Retail",
    title: "Spice and snacks store",
    text: "Online shop with UPI, shipping labels and repeat-order reminders.",
    tags: ["UPI", "Shipping", "Reorders"],
    metric: { value: "2.4x", label: "online sales" },
  },
];

export const industries = [
  "Healthcare", "Education", "Retail", "Real estate", "Hospitality", "Logistics",
  "Manufacturing", "Fitness", "Finance", "Agriculture", "NGOs", "Government", "Not listed",
];

/** Rough first-launch weeks per need. Used by the plan builder. */
export const needs: Record<string, number> = {
  "Mobile app": 6,
  Website: 3,
  ERP: 10,
  SEO: 4,
  "E-commerce": 6,
  Automation: 2,
  Dashboard: 3,
  "Something else": 4,
};

export const steps = [
  { title: "Free audit", text: "We study how you work today and find what to build first." },
  { title: "Plan and quote", text: "A short plan with scope, timeline and a fixed price." },
  { title: "Design and build", text: "You see working versions every week and steer as we go." },
  { title: "Launch and support", text: "We train your team, go live together and stay on call." },
];

export const stats = [
  { value: "40+", label: "customers" },
  { value: "12", label: "industries" },
  { value: "92%", label: "come back" },
  { value: "4.9", suffix: "/5", label: "average rating" },
];

export const quotes = [
  { text: "They did not sell us a tool. They looked at how we work and built the app, the site and the back office to match.", who: "Owner, retail group" },
  { text: "Our bookings went online in two weeks and the phone stopped ringing all day.", who: "Director, clinic chain" },
  { text: "One team did the app, the website and the search work. Nothing got lost between vendors.", who: "Founder, online store" },
];

export const faqs = [
  { q: "Do you only work with certain industries?", a: "No. We build for any industry. If your business has customers, staff or stock to manage, we can build for it." },
  { q: "Can you handle everything, from app to SEO?", a: "Yes. Design, mobile apps, websites, ERP, e-commerce, automation and SEO are all done by our own team." },
  { q: "Is the audit really free?", a: "Yes. We review how you work, tell you what is worth building first, and give you a short written plan." },
  { q: "Can the product work in my language?", a: "Yes. Apps, websites and messages can run in any language you need, or several at once." },
  { q: "What happens after launch?", a: "We host, back up, update and support what we build, and we train your team before go-live." },
];
