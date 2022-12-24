const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
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

  console.log('Result', result);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(
    `src/components/templates/page/page.tsx`
  );
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    console.log('NODE', node);
    const slug = node.slug;
    createPage({
      path: `/${slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        slug,
      },
    });
  });
};
