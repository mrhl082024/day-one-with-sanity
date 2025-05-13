import {defineType, defineField} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      type: 'string',
      title: 'Kunde Navn',
    }),
    defineField({
      name: 'customerReview',
      type: 'string',
      title: 'Kunde Omtale',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Omtale Dato',
      description: 'Skriv inn en dato',
      validation: (rule) => [rule.required().error('Du må skrive dato!')],
    }),
  ],
})
