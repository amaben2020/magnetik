import { graphql } from 'gatsby'

export const postFields = graphql`
fragment fragmentNavigationItem on ContentfulNavigationItem {
     title
      url
       links{
        title
        linkCategory{
          title
          url
          image{
            gatsbyImageData
          }
        }
      } 
  }
`