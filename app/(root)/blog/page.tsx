import { Section } from '@/components/layout/Section';
import { BlogPostsSection } from '@/components/sections/BlogPostsSection';

export const metadata = {
  title: 'Blog',
};

export default function Blog() {
  return (
    <Section ariaLabel="Blog Section">
      <div>
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2">Welcome to my blog! Here are my latest posts.</p>
      </div>
      <BlogPostsSection />
    </Section>
  );
}
