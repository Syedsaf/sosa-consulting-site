export default function Section({
  id, title, subtitle, children
}: { id?: string; title?: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
