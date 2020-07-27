const slug = require('rehype-slug');
const link = require('rehype-autolink-headings');

const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [
      slug,
      [
        link,
        {
          behavior: 'append',
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['header-link'] },
            children: [{type: 'text', value: '#'}],
          },
        },
      ],
    ],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
