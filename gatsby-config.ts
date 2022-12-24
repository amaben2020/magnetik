import type { GatsbyConfig } from "gatsby"
const paths = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "@": paths.join(__dirname, "src"),
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`
  ]
}

export default config


