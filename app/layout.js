import './globals.css';

export const metadata = {
  title: 'AquaPulse | Precision Water Pump Solutions',
  description: 'AquaPulse delivers next-generation smart water pumping systems for industrial, agricultural, and residential applications.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
