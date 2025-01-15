import { ReactNode } from 'react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import NextThemeProviders from '@/components/providers/next-theme';
import { TooltipProvider } from '@/components/ui/tooltip';
import { createMetadata } from '@/lib/seo/metadata';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata = createMetadata({
  icons: 'https://api.iconify.design/fluent-emoji:potted-plant.svg',
  alternates: { canonical: '/' },
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
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
