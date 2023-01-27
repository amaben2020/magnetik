import React from 'react';
import { graphql, Link } from 'gatsby';
import TagList from './../tag/index';
import PageLayout from './../../../layouts/page-layout';

export default function Tags({ pageContext, data }) {
  const { tag } = pageContext;
  const {
    allContentfulBlogPost: { edges },
  } = data;

  const nodes = edges.map((e) => e.node);
 

  return (
    <PageLayout>
      <div>
        <p>Posts tagged with {tag}</p>

        <p>Ok</p>
        {nodes.map(({ topic, title, slug }) => (
          <div>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <div>Render TagList or Blog Array Cards</div>
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query ($tag: String) {
    allContentfulBlogPost(
      limit: 20
      sort: { order: DESC, fields: title }
      filter: { topic: { eq: $tag } }
    ) {
      __typename
      edges {
        node {
          topic
          slug
          title
        }
      }
    }
  }
`;
