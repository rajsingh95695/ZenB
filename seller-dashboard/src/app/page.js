const cards = [
  'Store Profile',
  'Product Upload',
  'Inventory',
  'Order Management',
  'Sales Analytics',
  'Payouts',
  'Reviews'
];

export default function SellerHome() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1>ZenB Seller Studio</h1>
      <p>Manage products, fulfil orders, monitor sales, and sync dropshipping catalog.</p>
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
