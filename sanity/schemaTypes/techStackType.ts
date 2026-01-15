import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { Code } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const techStackType = defineType({
  name: 'techStack',
  title: 'TechStack',
  type: 'document',
  icon: Code,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'icon' }] }],
      validation: (rule) => rule.required(),
    }),

    orderRankField({ type: 'project', newItemPosition: 'before' }),
  ],
});
