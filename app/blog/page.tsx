import { BlogPostCard } from '@/components/common/BlogPostCard';

export default function Blog() {
  return (
    <div className="flex w-full flex-col justify-center space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to my blog! Here are my latest posts.
        </p>
      </div>
      <BlogPostCard />
    </div>
  );
}
