import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'projectType', title: 'Project Type', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'impact', title: 'Impact', type: 'text' }),
    defineField({ name: 'context', title: 'Context', type: 'text' }),
    defineField({ name: 'challenge', title: 'Challenge', type: 'text' }),
    defineField({ name: 'keyQuestions', title: 'Key Questions', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'approach', title: 'Approach', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'outcomes', title: 'Outcomes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'takeaways', title: 'Takeaways', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tools', title: 'Tools', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'customSections',
      title: 'Custom Sections',
      description: 'Add any extra custom sections (optional - will not appear if left empty).',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'customSection',
          title: 'Custom Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Description / Content',
              type: 'text',
              description: 'Text explanation for this section (optional)',
            },
            {
              name: 'items',
              title: 'Bullet Points',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Optional bullet points list',
            },
          ],
        },
      ],
    }),
  ],
})
