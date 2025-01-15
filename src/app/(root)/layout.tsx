import { Navbar } from '@/components/layouts/navbar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex size-full h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-6">{children}</main>
    </div>
  );
}
