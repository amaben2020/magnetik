import { graphql } from 'gatsby';
import React from 'react';

const BlogTemplate = (props: any) => {
  console.log(props.data.blogPost);
  return (
    <div>
      <h1>{props.data.blogPost.title}</h1>

      <div>
        <h3>{props.data.blogPost.author.name}</h3>
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
