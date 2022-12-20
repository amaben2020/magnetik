import type { GatsbyConfig } from "gatsby"
const path = require('path')



const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        // "components": path.join(__dirname, "src/components"),
        // "layouts": path.join(__dirname, "src/layouts"),
        // "templates": path.join(__dirname, "src/templates"),
        // "scss": path.join(__dirname, "src/scss"),
        // "types": path.join(__dirname, "src/types"),
        "@": path.join(__dirname, "src"),
        // "pages": path.join(__dirname, 'src/pages')
      }
    }

  ]
}

export default config


