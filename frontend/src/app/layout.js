import './globals.css';

export const metadata = {
  title: 'ZenB - Multi Vendor Ecommerce',
  description: 'Amazon/Flipkart style marketplace for zenb.in'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
