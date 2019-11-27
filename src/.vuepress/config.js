const helpers = require('./helpers')

module.exports = {
  title: 'Python Mallorca',
  //base: '/web/',
  themeConfig: {
    nav: [
        { text: 'Inici', link: '/' },
        { text: 'Trobades', link: '/meetings/' },
        { text: 'Propostes', link: '/proposals/' },
        { text: 'Contacte', link: '/contact/' },
    ],
    sidebar: {
      '/proposals/': helpers.utils.genSidebarConfig(
        'Propostes',
        './src/proposals/',
        true,
      ),
      '/meetings/': helpers.utils.genSidebarConfig(
        'Trobades',
        './src/meetings/',
        true,
      )
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': './src'
      }
    }
  },
  plugins: [
  ]
}
