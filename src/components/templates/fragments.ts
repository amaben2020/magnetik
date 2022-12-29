
import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentHero on ContentfulHero {
    id
    title
    variant
    __typename
    image{
    gatsbyImageData(layout: FULL_WIDTH)
  }
  }


  fragment FluidImage on File {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
          original {
            width
          }
        }
    }

  fragment FragmentBlogPost on ContentfulBlogPost {
    id
    title
    __typename
    
    body{
      raw
    }
    topic
    slug
    description
    author{
      bio
		image{
      	gatsbyImageData(layout: FULL_WIDTH)
    }
    }
    image{
        gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  fragment FragmentBlogs on ContentfulBlogs {
      id,
      __typename
      blogs{
        # title
        # topic
        # slug

         ... on ContentfulBlogPost {
          ...FragmentBlogPost
        }
      }
    
  }
`
// export const blogPostQuery = graphql`
//  fragment FragmentBlog on ContentfulBlogPost {
//     id
//     title
//     body{
//       raw
//     }
//     topic
//     slug
//     author{
//       bio
// 		image{
//       	gatsbyImageData(layout: FULL_WIDTH)
//     }
//     }
//   }
// `
