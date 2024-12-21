import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-6">{children}</main>
      <Footer /></>
  );
}
