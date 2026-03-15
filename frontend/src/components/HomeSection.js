export function HomeSection({ title, items }) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-indigo-600">View all</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="rounded-lg border p-4">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-slate-500">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
