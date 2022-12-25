import React from 'react';
import { graphql } from 'gatsby';
import { getContentfulPage } from './../../../base/bridge/getContentfulPage.js';
import { TPageTemplate } from './type.js';
import PageLayout from '../../../layouts/page-layout';
// import PageLayout from '@/layouts/page-layout/index.js';
import './../../../styles/main.scss';
import BlogCard from './../../elements/blog-card/index';

const PageTemplate = ({ data }: TPageTemplate) => {
  console.log(data);
  // pass title to layout
  return (
    <PageLayout title={data.page.title}>
      {data.page.sections.map(getContentfulPage)} <BlogCard />
    </PageLayout>
  );

  // return (
  //   <div>
  //     <h1>{data.page.title}</h1>
  //     <h3>
  //       {data?.page?.sections.map((section) => (
  //         <div>{section.title}</div>
  //       ))}
  //     </h3>
  //   </div>
  // );
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

        ... on ContentfulBlogPost {
          ...FragmentBlogPost
        }
      }
    }
  }
`;
