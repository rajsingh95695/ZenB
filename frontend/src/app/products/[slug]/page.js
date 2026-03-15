const specs = [
  ['Brand', 'ZenB Essentials'],
  ['Warranty', '1 Year'],
  ['Delivery', '2-4 business days']
];

export default function ProductDetails() {
  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-2">
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-4 h-96 rounded-lg bg-slate-100" />
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 rounded-md bg-slate-100" />
          ))}
        </div>
      </div>
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Product title placeholder</h1>
        <p className="mt-2 text-sm text-slate-500">Seller: Verified Store • 4.7 ★ rating</p>
        <p className="mt-4 text-3xl font-bold text-indigo-700">₹2,499</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white">Add to cart</button>
          <button className="rounded-md border px-5 py-3 font-medium">Wishlist</button>
        </div>
        <h2 className="mt-8 text-lg font-semibold">Specifications</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {specs.map(([k, v]) => (
            <li key={k} className="flex justify-between rounded border p-2">
              <span className="text-slate-500">{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
