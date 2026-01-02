import type { BlogPost } from '@/types/content';

import type { PortableTextBlock } from '@portabletext/types';

export function convertStringToPortableText(
  content: string,
): PortableTextBlock[] {
  return [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: content,
          marks: [],
        },
      ],
    },
  ];
}

export const blogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Post 1',
    slug: 'post-1',
    excerpt: 'excerpt content',
    publishedAt: '01-01-2025',
    body: convertStringToPortableText('Example Content 1'),
    tags: ['tag-1', 'tag-2'],
    categories: [
      {
        title: 'category-1',
      },
      {
        title: 'category-2',
      },
    ],
  },
  {
    _id: '2',
    title: 'Post 2',
    slug: 'post-2',
    excerpt: 'excerpt content',
    publishedAt: '01-01-2026',
    body: convertStringToPortableText('Example Content 1'),
    tags: ['tag-1', 'tag-2'],
    categories: [
      {
        title: 'category-1',
      },
      {
        title: 'category-2',
      },
    ],
  },
];
