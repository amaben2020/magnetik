import React from 'react';
import { graphql } from 'gatsby';
import { getContentfulPage } from './../../../base/bridge/getContentfulPage.js';
import { TPageTemplate } from './type.js';
import PageLayout from '../../../layouts/page-layout';
import './../../../styles/main.scss';

const PageTemplate = ({ data }: TPageTemplate) => {
  console.log('Page Template', data);
  // pass title to layout
  return (
    <PageLayout title={data.page.title}>
      {data.page.sections.map(getContentfulPage)}
    </PageLayout>
  );
};

export default PageTemplate;

export const ContentfulPageQuery = graphql`
  query ContentfulPageQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      __typename
      title
      id
      slug
      sections {
        ... on ContentfulHero {
          ...FragmentHero
        }

        # ... on ContentfulBlogPost {
        #   ...FragmentBlogPost
        # }

        ... on ContentfulBlogs {
          ...FragmentBlogs
        }
      }
    }
  }
`;
