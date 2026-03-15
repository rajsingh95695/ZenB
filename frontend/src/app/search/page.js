export default function SearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
        <input className="w-full rounded-md border p-3" placeholder="Search with AI suggestions..." />
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <aside className="rounded-xl bg-white p-4 shadow-sm">Filters: price, rating, category</aside>
        <section className="md:col-span-3 rounded-xl bg-white p-4 shadow-sm">Result listing + sorting</section>
      </div>
    </main>
  );
}
