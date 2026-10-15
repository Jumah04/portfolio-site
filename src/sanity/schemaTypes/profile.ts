import { defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroHighlight', title: 'Hero Highlight', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text' }),
    defineField({ name: 'aboutHeadline', title: 'About Headline', type: 'string' }),
    defineField({ name: 'aboutSummary', title: 'About Summary', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
  ],
})
