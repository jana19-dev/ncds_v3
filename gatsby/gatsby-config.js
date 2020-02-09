module.exports = {
  siteMetadata: {
    title: 'Nainativu CDS',
    description: 'Nainativu Canadian Development Society',
    author: 'Jana Rajakumar',
    siteUrl: 'https://nainativucds.org'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8crwkfsj',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ncds',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
