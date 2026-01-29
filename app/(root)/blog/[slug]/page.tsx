import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { Section } from '@/components/layout/Section';
import { getBlogPosts } from '@/lib/cms';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getBlogPosts();
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="mt-8 mb-4 text-lg font-bold">{children}</h2>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    link: ({ children, value }) => (
      <a href={value.href} className="text-blue-500 underline" target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function BlogPostDetailsPage({ params }: Props) {
  const blogPosts = await getBlogPosts();
  const { slug } = await params;
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <Section ariaLabel={`${blogPost.title} details page`}>
      {/* Back link */}
      <div className="mb-6">
        <Button asChild variant="link" size="sm" className="px-0 has-[>svg]:px-0">
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            Back to all posts
          </Link>
        </Button>
      </div>

      {/* Main content */}
      <Section title={blogPost.title}>
        <div className="space-y-6">
          {/* Description */}
          {blogPost.body && <PortableText value={blogPost.body} components={components} />}
        </div>
      </Section>
    </Section>
  );
}
