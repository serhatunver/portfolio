import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollProgressGlobal } from '@/components/ui/scroll-progress-global';
import { getFooter } from '@/lib/cms';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerData = await getFooter();

  return (
    <>
      <Header data={footerData} />
      <ScrollProgressGlobal className="sticky top-16.75 h-px bg-blue-500 dark:bg-blue-500" />
      <main className="mx-auto w-full max-w-xl px-4">{children}</main>
      <Footer data={footerData} />
    </>
  );
}
