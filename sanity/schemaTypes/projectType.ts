import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'githubLink',
      type: 'string',
    }),
    defineField({
      name: 'demoLink',
      type: 'string',
    }),
    orderRankField({ type: 'project', newItemPosition: 'before' }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
