import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { NavMenu } from '@/components/common/NavMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export function DesktopNav() {
  return (
    <div className="hidden w-full justify-between sm:flex">
      {/* Navigation */}
      <div className="mx-auto">
        <NavMenu />
      </div>

      {/* Github + Theme toggle */}
      <div className="hidden gap-3 sm:flex">
        <Button variant="outline" size="icon-lg">
          <Link href="https://github.com/serhatunver" target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
