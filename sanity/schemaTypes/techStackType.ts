import { Code } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const techStackType = defineType({
  name: 'techStack',
  title: 'TechStack',
  type: 'document',
  icon: Code,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
  ],
});
