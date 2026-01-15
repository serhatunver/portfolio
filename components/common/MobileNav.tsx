'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Drawer } from 'vaul';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { MailLink } from '@/components/common/MailLink';
import { NavMenu } from '@/components/common/NavMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { urlFor } from '@/lib/cms/image';
import { FooterType } from '@/types/content';

export function MobileNav({ data }: { data: FooterType }) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="flex gap-3 sm:hidden">
      {!open && <ThemeToggle />}

      <Drawer.Root
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) {
            triggerRef.current?.focus();
          }
        }}
        direction="right"
      >
        <Drawer.Trigger asChild>
          <Button ref={triggerRef} size="icon-lg" variant="outline" aria-label="Open navigation menu">
            <MenuIcon size={16} />
          </Button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />

          <Drawer.Content
            className="fixed inset-y-0 right-0 z-50 flex w-full outline-none"
            style={
              {
                '--initial-transform': 'calc(100% + 8px)',
              } as React.CSSProperties
            }
          >
            <VisuallyHidden>
              <Drawer.Title>Mobile navigation</Drawer.Title>
              <Drawer.Description>Navigation menu and user information</Drawer.Description>
            </VisuallyHidden>

            <div className="bg-background flex size-full flex-col">
              <div className="flex h-17 items-center justify-between border-b px-4">
                <ThemeToggle />

                <Drawer.Close asChild>
                  <Button size="icon-lg" variant="outline" aria-label="Close navigation menu">
                    <XIcon />
                  </Button>
                </Drawer.Close>
              </div>

              <nav>
                <NavMenu orientation="vertical" onItemClick={() => setOpen(false)} />
              </nav>

              <section className="text-muted-foreground mx-auto flex flex-wrap justify-center gap-2 p-4">
                {data.contact.map((item, index) => {
                  const isLast = index === data.contact.length - 1;
                  return (
                    <span key={item.label} className="flex gap-2">
                      {item.href.startsWith('mailto:') ? (
                        <MailLink item={item} />
                      ) : (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                          {item.icon && (
                            <Image
                              src={urlFor(item.icon).url()}
                              alt=""
                              width={12}
                              height={12}
                              className="size-3 dark:invert"
                            />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      )}
                      {!isLast && <span>{'/'}</span>}
                    </span>
                  );
                })}
              </section>

              <div className="mt-auto flex items-center gap-3 border-t p-4">
                <Avatar className="size-10">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/96500903" alt="Serhat Ünver" />
                  <AvatarFallback>SÜ</AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-foreground text-lg font-medium">Serhat Ünver</div>
                  <div className="text-muted-foreground text-sm">Full-Stack JavaScript Software Engineer</div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
