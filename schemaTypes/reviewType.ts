import {defineType, defineField} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  groups: [],
  fields: [
    defineField({
      name: 'your_name',
      type: 'string',
    }),
  ],
})
