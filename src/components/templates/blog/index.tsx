import { graphql } from 'gatsby';
import React from 'react';

const BlogTemplate = (props: any) => {
  console.log('blog props', props);
  return <div>BlogTemplate</div>;
};

export default BlogTemplate;

// export const ContentfulPageQuery = graphql`
//   query ContentfulPageQuery($id: String!) {
//     page: contentfulPage(id: { eq: $id }) {
//       __typename
//       title
//       id
//       slug
//       sections {
//         # ... on ContentfulHero {
//         #   ...FragmentHero
//         # }

//         ... on ContentfulBlogPost {
//           ...FragmentBlogPost
//         }
//       }
//     }
//   }
// `;
