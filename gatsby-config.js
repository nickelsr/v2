/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nick Lazaga`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Personal portfolio of software developer Nick Lazaga`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@hooks": "src/hooks",
          "@config": "src/config",
          "@styles": "src/styles",
          "@icons": "src/components/icons",
        },
        extensions: [
          "js", "css"
        ]
      }
    },
  ],
}
