import { ThemeToggle } from '@/components/ThemeToggle';
import { NavMenu } from '@/components/NavMenu';

export function Header() {
  return (
    <div className="w-full border-b">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <NavMenu />
        <ThemeToggle />
      </header>
    </div>
  );
}
