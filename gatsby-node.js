const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Blog post template
  const blogPost = path.resolve(`./src/templates/BlogPost.js`);

  //customer case study template
  //   const customerCaseStudy = path.resolve(
  //     `./src/templates/customer-case-study.js`,
  //   );

  let posts;
  try {
    posts = await graphql(`
      {
        allButterPost(
          filter: {
            categories: { elemMatch: { name: { in: "The Order Guys" } } }
          }
        ) {
          edges {
            node {
              id
              seo_title
              slug
              categories {
                name
                slug
              }
              author {
                first_name
                last_name
                email
                slug
                profile_image
              }
              body
            }
          }
        }
      }
    `);
  } catch (error) {
    console.error(`Error Running Querying Posts`, error);
  }

  posts = posts.data.allButterPost.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    // Create blog posts pages.
    createPage({
      path: `/blog/${post.node.slug}`,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
