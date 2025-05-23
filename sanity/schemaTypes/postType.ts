import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'titleImage', type: 'image'}),
    defineField({name: 'smallDescription', type: 'text'}),
    defineField({name: 'content', type: 'array', of: [{type: 'block'}]}),
  ],
})
