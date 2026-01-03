import { defineArrayMember, defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'cta',
          title: 'Call To Actions',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
                defineField({
                  name: 'type',
                  title: 'Button Type',
                  type: 'string',
                  options: {
                    list: [
                      'default',
                      'secondary',
                      'outline',
                      'ghost',
                      'destructive',
                      'link',
                    ],
                  },
                }),
                defineField({ name: 'icon', title: 'Icon', type: 'string' }),
                defineField({
                  name: 'target',
                  title: 'Target',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // About
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [defineArrayMember({ type: 'block' })],
        }),
      ],
    }),

    // Footer
    defineField({
      name: 'footer',
      title: 'Footer Section',
      type: 'object',
      fields: [
        defineField({ name: 'fullName', title: 'Full Name', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'message', title: 'Message', type: 'string' }),
        defineField({
          name: 'cta',
          title: 'Footer CTAs',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
                defineField({
                  name: 'type',
                  title: 'Button Type',
                  type: 'string',
                  options: {
                    list: [
                      'default',
                      'secondary',
                      'outline',
                      'ghost',
                      'destructive',
                      'link',
                    ],
                  },
                }),
                defineField({ name: 'icon', title: 'Icon', type: 'string' }),
                defineField({
                  name: 'target',
                  title: 'Target',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'contact',
          title: 'Contact Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: ['Linkedin', 'Github', 'Mail'],
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heroTitle: 'hero.title',
      aboutTitle: 'about.title',
      footerName: 'footer.fullName',
    },
    prepare(selection) {
      const { heroTitle, aboutTitle, footerName } = selection;
      const title = heroTitle || aboutTitle || footerName || 'Site Settings';
      const subtitle = [];

      if (heroTitle) subtitle.push('Hero Section');
      if (aboutTitle) subtitle.push('About Section');
      if (footerName) subtitle.push('Footer Section');

      return {
        title,
        subtitle: subtitle.join(' | '),
      };
    },
  },
});
