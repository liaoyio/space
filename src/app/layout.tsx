import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
import NextThemeProviders from '@/components/providers/next-theme';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: 'https://api.iconify.design/fluent-emoji:potted-plant.svg',
  title: {
    template: '%s - Liaoyi',
    default: 'Liaoyi 的数字花园',
  },
  description: "Liaoyi's digital garden",
  authors: [{ name: 'Liaoyi' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'overflow-x-clip scroll-smooth',
          'flex size-full flex-col antialiased',
          'bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-100',
          geistSans.variable,
        )}
      >
        <NextThemeProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 py-10">{children}</main>
          <Footer />
        </NextThemeProviders>
      </body>
    </html>
  );
}
