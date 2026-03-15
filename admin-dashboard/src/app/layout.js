export const metadata = { title: 'ZenB Admin Dashboard' };

export default function Layout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: 'Inter, sans-serif', background: '#f8fafc' }}>{children}</body>
    </html>
  );
}
