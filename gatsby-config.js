/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `OffRange`,
    author: `Davis Wolfermann`,
    siteUrl: `https://offrange.github.io`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logos/icon.jpg"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/",
        alias: "images"
      },
      __key: "images"
    }, `gatsby-plugin-resolve-src`]
};