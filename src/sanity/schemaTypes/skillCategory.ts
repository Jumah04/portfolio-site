import { defineField, defineType } from 'sanity'

export const skillCategoryType = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})
