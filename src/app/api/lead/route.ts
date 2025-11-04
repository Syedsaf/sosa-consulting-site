import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    message: String(formData.get("message") || ""),
    at: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO || "syed@sosaconsult.com";

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Leads <leads@yourdomain.com>",
        to: [to],
        subject: `New Lead: ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\nMessage:\n${payload.message}\n\nTime: ${payload.at}`,
      }),
    });
    if (!res.ok) {
      console.error("Resend send failed", await res.text());
    }
  } else {
    console.log("Lead (no email configured):", payload);
  }

  return NextResponse.redirect(new URL("/thank-you", req.url));
}
