import { BriefcaseBusiness } from 'lucide-react';
import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: BriefcaseBusiness,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
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
      title: 'Currently Working Here',
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
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
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
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    orderRankField({ type: 'project', newItemPosition: 'before' }),
  ],
});
