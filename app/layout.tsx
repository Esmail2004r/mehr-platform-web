import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/layout/Navbar';
import { Footer } from '@/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MEHR - Global Professional Training Metaverse',
  description: 'Official platform for MEHR professional training metaverse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
