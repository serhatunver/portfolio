import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col">
        <Header />
        <div className="m-auto flex flex-col items-center justify-center space-y-6 p-4">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Welcome to Next.js!
          </h1>
          <Button variant="default">Get Started</Button>
        </div>
      </main>
    </div>
  );
}
