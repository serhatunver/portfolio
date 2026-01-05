import { GraduationCap } from 'lucide-react';
import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: GraduationCap,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isCurrent',
      title: 'Currently Stuyding Here',
      type: 'boolean',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      hidden: ({ parent }) => parent?.isCurrent === true,
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gpa',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'institutionLogo',
      title: 'Institution Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
    }),
    orderRankField({ type: 'project', newItemPosition: 'before' }),
  ],
});
