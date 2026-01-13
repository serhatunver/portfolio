// sanity/schemaTypes/iconType.ts
import { defineField, defineType } from 'sanity';
import { Code } from 'lucide-react';

export const iconType = defineType({
  name: 'icon',
  title: 'Icon',
  type: 'document',
  icon: Code,
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Simple Icons slug (e.g. "nextdotjs", "typescript")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      description:
        'Display name (optional). If empty, Simple Icons title will be used.',
    }),
    defineField({
      name: 'color',
      type: 'string',
      description:
        'Brand hex color without "#", e.g. "3178C6". Used for icon and badge styling.',
    }),
    defineField({
      name: 'invertColor',
      type: 'boolean',
      initialValue: false,
      description:
        'Enable if the icon color needs inversion for dark/light mode contrast (e.g. black or white logos).',
    }),
  ],
  preview: {
    select: {
      slug: 'slug.current',
      title: 'title',
    },
    prepare({ slug, title }) {
      return {
        title: title || slug,
      };
    },
  },
});
