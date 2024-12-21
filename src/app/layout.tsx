import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import NextThemeProviders from '@/components/providers/next-theme';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { ReactNode } from 'react';

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

export default function RootLayout({ children, }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex size-full h-screen flex-col', geistSans.variable)}>
        <NextThemeProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </NextThemeProviders>
      </body>
    </html>
  );
}
