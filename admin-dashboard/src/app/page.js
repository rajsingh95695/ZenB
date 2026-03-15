const cards = [
  'Users',
  'Sellers',
  'Products',
  'Categories',
  'Orders',
  'Payments',
  'Refunds',
  'Reports',
  'Revenue Tracking',
  'Commission Settings'
];

export default function AdminHome() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1>ZenB Admin Control Center</h1>
      <p>Approve sellers, manage catalog, track revenue, and view analytics.</p>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 20 }}>
        {cards.map((card) => (
          <article key={card} style={{ background: 'white', padding: 16, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            {card}
          </article>
        ))}
      </section>
    </main>
  );
}
