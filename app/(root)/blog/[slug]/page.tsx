import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';

import { getBlogPosts } from '@/lib/cms';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

import { ArrowLeft } from 'lucide-react';

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-bold mt-8 mb-4">{children}</h2>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-500 underline"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
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
        <Button
          asChild
          variant="link"
          size="sm"
          className="has-[>svg]:px-0 px-0"
        >
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
          {blogPost.body && (
            <PortableText value={blogPost.body} components={components} />
          )}
        </div>
      </Section>
    </Section>
  );
}
