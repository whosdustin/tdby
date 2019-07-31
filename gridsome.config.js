// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        path: '*.md',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Eat',
        baseDir: './content/eats',
        path: '*.md',
        route: '/eats/:slug'
      }
    },
    { use: `gridsome-plugin-netlify-cms` },
    { 
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        publicPah: '/admin',
        contentTypes: ['Post', 'Eat'] // Same as declared above
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
