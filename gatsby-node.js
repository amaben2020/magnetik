const path = require('path');
const PageTemplate = path.resolve(`src/components/templates/page/index.tsx`);
const BlogTemplate = path.resolve(`src/components/templates/blog/index.tsx`);

const createContentfulPages = async (createPage, graphql, reporter) => {
  const pages = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              id
              slug
              __typename
            }
          }
        }
      }
    `
  );

  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  pages.data.allContentfulPage.edges.forEach(({ node }) => {
    const slug = node.slug;
    createPage({
      path: `/${slug}`,
      component: PageTemplate,
      context: {
        id: node.id,
        slug,
      },
    });
  });
};

const createContentfulBlogPost = async (createPage, graphql, reporter) => {
  const blogPost = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
              __typename
            }
          }
        }
      }
    `
  );

  if (blogPost.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  blogPost.data.allContentfulPage.edges.forEach(({ node }) => {
    const slug = node.slug;
    createPage({
      path: `/blog/${slug}`,
      component: BlogTemplate,
      context: {
        id: node.id,
        slug,
      },
    });
  });
};

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const pages = await createContentfulPages(createPage, graphql, reporter);
  const blogPosts = await createContentfulBlogPost(
    createPage,
    graphql,
    reporter
  );
  return Promise.all([pages, blogPosts]);
};
