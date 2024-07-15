// ./schemas/comment.js
export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email(),
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
      title: 'Post',
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      description: 'Comments will not show on the site without approval',
      default: false,
    },
  ],
};
