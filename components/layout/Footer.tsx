import Link from 'next/link';
import type { Footer } from '@/types/content';
import { ICONS } from '@/lib/constants/icons';

export async function Footer({ footer }: { footer: Footer }) {
  return (
    <footer className="w-full flex flex-col space-y-6 mx-auto max-w-xl bg-background px-4 py-6 text-sm text-muted-foreground backdrop-blur-sm">
      <section>
        <div className="font-medium text-lg text-foreground">
          {footer.fullName}
        </div>
        <div>{footer.title}</div>
      </section>
      <section className="text-base">{footer.message}</section>
      <section>
        <nav className="flex flex-col sm:flex-row gap-3 mb-4">
          {footer.cta.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>
      <section className="flex flex-wrap items-center gap-2">
        {footer.contact.map((item) => {
          const { Icon } = ICONS[item.icon];
          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Icon className="size-3.5 text-foreground" />
              <span>{item.label}</span>
              <span className="text-muted-foreground/60">/</span>
            </Link>
          );
        })}
      </section>
      <section>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          shadcn/ui
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Tailwind CSS
        </a>
        , and{' '}
        <a
          href="https://www.sanity.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Sanity
        </a>
        .
      </section>
      <section className="text-base">
        © {new Date().getFullYear()} Serhat Ünver. All rights reserved.
      </section>
    </footer>
  );
}
