'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(
      theme === 'system'
        ? systemTheme === 'dark'
          ? 'light'
          : 'dark'
        : theme === 'dark'
          ? 'light'
          : 'dark',
    );
  };

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-0 overflow-hidden"
    >
      <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 duration-300" />
      <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 duration-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
