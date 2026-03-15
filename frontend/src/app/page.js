import { HomeSection } from '../components/HomeSection';
import { homeSections } from '../lib/mockData';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6">
      <section className="rounded-2xl bg-gradient-to-r from-indigo-700 to-blue-500 p-10 text-white">
        <p className="mb-2 text-sm uppercase tracking-widest">zenb.in marketplace</p>
        <h1 className="text-4xl font-bold">Premium Multi-Vendor Shopping + Dropshipping</h1>
        <p className="mt-3 max-w-2xl text-indigo-100">
          Discover top products from verified sellers, flash deals, AI recommendations, and lightning-fast checkout.
        </p>
      </section>

      <HomeSection title="Shop by Category" items={homeSections.categories} />
      <HomeSection title="Trending Products" items={homeSections.trending} />
      <HomeSection title="Flash Deals" items={homeSections.flashDeals} />
    </main>
  );
}
