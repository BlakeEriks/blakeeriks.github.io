module.exports = {
  siteMetadata: {
    title: `Blake Eriks`,
    description: `A full stack developer building the future of our interactions with technology.`,
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