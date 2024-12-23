import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import NextThemeProviders from '@/components/providers/next-theme';
import { TooltipProvider } from '@/components/ui/tooltip';
import { createMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistSansMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = createMetadata({
  icons: 'https://api.iconify.design/fluent-emoji:potted-plant.svg',
  canonical: '/',
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex size-full h-screen flex-col',
          geistSans.variable,
          geistSansMono.variable,
        )}
      >
        <NextThemeProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </NextThemeProviders>
      </body>
    </html>
  );
}
