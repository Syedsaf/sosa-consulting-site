import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const message = String(formData.get("message") || "");
  const at = new Date().toISOString();

  const payload = { name, email, phone, message, at };

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO || "syed@sosaconsult.com";
  if (key) {
    try {
      const resend = new Resend(key);
      await resend.emails.send({
        from: "Leads <onboarding@resend.dev>",
        to: [to],
        subject: `New Lead: ${name || "(no name)"}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\nTime: ${at}`,
      });
    } catch (e) {
      console.error("Resend error:", e);
    }
  } else {
    console.log("Lead (logging because RESEND_API_KEY not set):", payload);
  }

  return NextResponse.redirect(new URL("/thank-you", req.url));
}
