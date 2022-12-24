import React from 'react';
import { graphql } from 'gatsby';
import { getContentfulPage } from '@/base/bridge/getContentfulPage.js';
import { TPageTemplate } from './type.js';
import PageLayout from '../../../layouts/page-layout';
// import PageLayout from '@/layouts/page-layout/index.js';
import './../../../styles/main.scss';

const Page = ({ data }: TPageTemplate) => {
  return <PageLayout> {data.page.sections.map(getContentfulPage)} </PageLayout>;
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
