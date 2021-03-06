module.exports = {
  siteMetadata: {
    title: `Blake Eriks`,
    description: `A fullstack developer ready to take your project to the next level`,
    author: `@blakeeriks`,
    siteUrl: `https://www.blakeeriks.dev`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: 'standalone',
        icon: 'src/images/icon.png',
      }
    },
    `gatsby-plugin-scroll-reveal`
  ]
};