import React from 'react';
import { graphql } from 'gatsby';
import { getContentfulPage } from './../../base/bridge/getContentfulPage.js';

const Page = ({ data }: any) => {
  console.log('CTX', data);
  return <div> {data.page.sections.map(getContentfulPage)} </div>;
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
        ... on ContentfulHero {
          ...FragmentHero
        }
      }
    }
  }
`;
