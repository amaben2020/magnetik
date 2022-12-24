import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }: any) => {
  console.log('CTX', data);
  return <div> n </div>;
};

export default Page;

export const ContentfulPageQuery = graphql`
  query ContentfulPageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      __typename
      title
      id
      slug
      sections {
        id
        title
        variant
        __typename
      }
    }
  }
`;
