import './globals.css';
import { libre_franklin } from './fonts';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  title: '24 jours de Nativité',
  description:
    "Un calendrier de l'Avent où chaque jour une oeuvre inspirée par la Nativité est explorée."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${libre_franklin.className} h-full`}>
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
