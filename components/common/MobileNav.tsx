'use client';

import { useState } from 'react';
import { Drawer } from 'vaul';
import { MenuIcon, XIcon } from 'lucide-react';
import { NavMenu } from '@/components/common/NavMenu';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden flex gap-3">
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
            className="right-0 top-0 bottom-0 fixed z-30 outline-none w-full flex"
            style={
              {
                '--initial-transform': 'calc(100% + 8px)',
              } as React.CSSProperties
            }
          >
            <div className="bg-zinc-50 dark:bg-background h-full w-full grow flex flex-col">
              <div className="flex justify-between border-b p-4">
                <ThemeToggle />
                <Button
                  onClick={() => setIsOpen(false)}
                  size="icon-lg"
                  className="self-end"
                  variant="outline"
                >
                  <XIcon />
                </Button>
              </div>
              <div className="">
                <NavMenu
                  orientation="vertical"
                  onItemClick={() => setIsOpen(false)}
                />
              </div>
              <div className="mt-auto flex items-center gap-3 p-4">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/96500903"
                    alt="@serhatunver"
                  />
                  <AvatarFallback>SÜ</AvatarFallback>
                </Avatar>

                <div>
                  <div className="font-medium text-lg text-foreground">
                    Serhat Ünver
                  </div>
                  <div className="text-sm">
                    Full-Stack JavaScript Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
