import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <Button>Get Started</Button>
    </div>
  );
}
