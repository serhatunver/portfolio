import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollProgressGlobal } from '@/components/ui/scroll-progress-global';
import { getFooter } from '@/lib/cms';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const footerData = await getFooter();

  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-clip [--header-height:68px]">
      <div
        aria-hidden="true"
        className="
          before:bg-border/64
          after:bg-border/64
          pointer-events-none absolute inset-0 z-45 container
          before:absolute before:inset-y-0 before:-left-3 before:w-px
          after:absolute after:inset-y-0 after:-right-3 after:w-px
        "
      />
      <div
        aria-hidden="true"
        className="
          before:border-border before:bg-popover
          after:border-border after:bg-background
          pointer-events-none fixed inset-0 z-45 container
          before:absolute before:top-[calc(var(--header-height)-4.5px)] before:-left-[11.5px] before:z-1 before:-ml-1
          before:size-2 before:rounded-[2px] before:border before:bg-clip-padding before:shadow-xs
          after:absolute after:top-[calc(var(--header-height)-4.5px)] after:-right-[11.5px] after:z-1 after:-mr-1
          after:size-2 after:rounded-[2px] after:border after:bg-clip-padding after:shadow-xs
          dark:before:bg-clip-border
          dark:after:bg-clip-border
        "
      />
      <Header data={footerData} />
      {/* <ScrollProgressGlobal className="sticky top-16.75 z-99 h-px bg-blue-500 dark:bg-blue-500" /> */}
      <main className="container">{children}</main>
      <Footer data={footerData} />
    </div>
  );
}
