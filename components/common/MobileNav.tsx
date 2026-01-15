'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { NavMenu } from '@/components/common/NavMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-3 sm:hidden">
      <ThemeToggle />
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen} direction="right">
        <Drawer.Trigger asChild>
          <Button size="icon-lg" variant="outline">
            <MenuIcon size={16} />
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className="fixed top-0 right-0 bottom-0 z-30 flex w-full outline-none"
            style={
              {
                '--initial-transform': 'calc(100% + 8px)',
              } as React.CSSProperties
            }
          >
            <div className="dark:bg-background flex size-full grow flex-col bg-zinc-50">
              <div className="flex justify-between border-b p-4">
                <ThemeToggle />
                <Button onClick={() => setIsOpen(false)} size="icon-lg" className="self-end" variant="outline">
                  <XIcon />
                </Button>
              </div>
              <div className="">
                <NavMenu orientation="vertical" onItemClick={() => setIsOpen(false)} />
              </div>
              <div className="mt-auto flex items-center gap-3 p-4">
                <Avatar className="size-10">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/96500903" alt="@serhatunver" />
                  <AvatarFallback>SÜ</AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-foreground text-lg font-medium">Serhat Ünver</div>
                  <div className="text-sm">Full-Stack JavaScript Software Engineer</div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
