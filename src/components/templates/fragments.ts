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
  fragment FragmentBlogPost on ContentfulBlogPost {
    id
    title
    __typename
    body{
      raw
    }
    topic
    slug
    author{
      bio
		image{
      	gatsbyImageData(layout: FULL_WIDTH)
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
