import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailedDescription',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
