import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { getFooter } from '@/lib/cms';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = await getFooter();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-xl px-4">{children}</main>
      <Footer footer={footer} />
    </>
  );
}
