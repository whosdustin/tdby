// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const pluralize = require('pluralize')

const postcssPlugins = [
  tailwind()
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

// Add new File here to use across the site
const fileTypes = ['Post', 'Eat']

const filePlugins = fileTypes.map(typeName => {
  const slug = pluralize.plural(typeName).toLowerCase()
  return {
    use: '@gridsome/source-filesystem',
    options: {
      typeName,
      baseDir: `./content/${slug}`,
      path: '**/*.md',
      route: `/${slug}/:slug`
    }
  }
});

module.exports = {
  siteName: 'Tuck Darby',
  plugins: [
    ...filePlugins,
    { use: `gridsome-plugin-netlify-cms` },
    { 
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        publicPah: '/admin',
        contentTypes: fileTypes
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
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
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
