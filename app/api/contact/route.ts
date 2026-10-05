import { NextResponse } from "next/server";

type Body = { name?: unknown; phone?: unknown; message?: unknown };

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const message = clean(body.message, 2000);

  if (!name || phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ error: "Please enter your name and a valid number." }, { status: 422 });
  }

  // TODO: deliver the lead. Examples: send an email (Resend, Nodemailer),
  // post to a CRM, or write to a database. For now it is logged on the server.
  console.log("New audit request", { name, phone, message });

  return NextResponse.json({ ok: true });
}
