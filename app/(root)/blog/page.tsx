import { BlogPostCard } from '@/components/common/BlogPostCard';
import { Section } from '@/components/layout/Section';

export default function Blog() {
  return (
    <>
      <Section ariaLabel="Blog Section">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to my blog! Here are my latest posts.
        </p>
      </Section>
      <BlogPostCard />
    </>
  );
}
