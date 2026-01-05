import { Section } from '@/components/layout/Section';
import { BlogPostCard } from '../common/BlogPostCard';
import { getBlogPosts } from '@/lib/cms';

type BlogPostsSectionProps = {
  limit?: number;
  seeAllLink?: string;
};

export async function BlogPostsSection({
  limit,
  seeAllLink,
}: BlogPostsSectionProps) {
  const blogPosts = await getBlogPosts();
  return (
    <Section>
      {blogPosts.map((post) => (
        <BlogPostCard key={post._id} blogPost={post} />
      ))}
    </Section>
  );
}
