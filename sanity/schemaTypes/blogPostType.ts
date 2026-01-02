import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'BlogPost',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({ name: 'excerpt', type: 'text' }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
