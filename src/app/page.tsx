import Section from "@/components/Section";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{site.hero.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{site.hero.subtitle}</p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href={site.hero.ctaPrimary.href} className="rounded-xl px-6 py-3 bg-black text-white">
              {site.hero.ctaPrimary.label}
            </a>
            <a href={site.hero.ctaSecondary.href} className="rounded-xl px-6 py-3 border">
              {site.hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>

      <Section id="services" title="Services">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.services.map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how" title="How it works">
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.steps.map((s) => (
            <li key={s.title} className="rounded-2xl border p-6">
              <p className="font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pricing" title="Pricing">
        <div className="grid md:grid-cols-3 gap-6">
          {site.pricing.map((p) => (
            <div key={p.name} className="rounded-2xl border p-6">
              <p className="text-sm uppercase tracking-wide text-gray-500">{p.name}</p>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-xl border px-4 py-2">Get Started</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Results our clients love">
        <div className="grid md:grid-cols-2 gap-6">
          {site.testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border p-6 italic">
              “{t.quote}”
              <div className="mt-3 not-italic font-medium">— {t.name}</div>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Book a free consult">
        <form method="POST" action="/api/lead" className="grid gap-4 max-w-xl">
          <input className="border rounded-xl px-4 py-2" name="name" placeholder="Your name" required />
          <input className="border rounded-xl px-4 py-2" name="email" type="email" placeholder="Email" required />
          <input className="border rounded-xl px-4 py-2" name="phone" placeholder="Phone (optional)" />
          <textarea className="border rounded-xl px-4 py-2" name="message" placeholder="Tell us about your goal…" rows={4} />
          <button className="rounded-xl bg-black text-white px-4 py-2">Submit</button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Or reach us at <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          {site.contact.whatsapp && <> · <a className="underline" href={site.contact.whatsapp} target="_blank">WhatsApp</a></>}
        </div>
      </Section>
    </main>
  );
}
