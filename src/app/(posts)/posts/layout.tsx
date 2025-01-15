import { RootProvider } from 'fumadocs-ui/provider';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootProvider>{children}</RootProvider>;
}
