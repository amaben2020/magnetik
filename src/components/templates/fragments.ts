import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentHero on ContentfulHero {
    id
    title
    variant
    __typename
    image{
    #   file{
    #    url
    # }
    gatsbyImageData(layout: FULL_WIDTH)
  }
  }
`