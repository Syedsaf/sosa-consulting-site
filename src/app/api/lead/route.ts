import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO || "syed@sosaconsult.com";

  if (key) {
    const resend = new Resend(key);
    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: [to],
      subject: `New Lead from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
  } else {
    console.log("Lead logged:", { name, email, phone, message });
  }
  return NextResponse.redirect(new URL("/thank-you", req.url));
}
