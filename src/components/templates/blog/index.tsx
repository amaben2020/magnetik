import { graphql } from 'gatsby';
import React from 'react';

const BlogTemplate = ({ data }: any) => {
  console.log(data.blogPost);

  const {
    blogPost: { title, author },
  } = data;

  return (
    <div>
      <h1>{title}</h1>

      <div>
        <h3>{author.name}</h3>
      </div>
    </div>
  );
};

export default BlogTemplate;

export const ContentfulBlogPostQuery = graphql`
  query ContentfulBlogPostQuery($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      __typename
      title
      id
      slug
      author {
        id
        name
        bio
        position
      }
      body {
        raw
      }
    }
  }
`;
