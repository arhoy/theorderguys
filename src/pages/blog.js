import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_blogPage/Section0/_Section0';
import { Section1 } from '../components/_blogPage/Section1/_Section1';

export const query = graphql`
  {
    allButterPost(
      filter: { categories: { elemMatch: { name: { in: "The Order Guys" } } } }
    ) {
      nodes {
        summary
        categories {
          name
        }
        published
        meta_description
        author {
          first_name
          last_name
        }
        date
        featured_image
        featured_image_alt
        created(formatString: "ddd, MMM Do YYYY")
        slug
        id
        title
        tags {
          name
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Blog | The Order Guys"
        description="Welcome to our blog about web development and websites for realtors and small businesses in Edmonton"
        pathname="/blog"
        image="https://res.cloudinary.com/dcb389szc/image/upload/v1588481800/codepaper/SEO%20Images/pages/our_blog.png"
      />
      <Section0 />
      <Section1 posts={data.allButterPost.nodes} />
    </Layout>
  );
};

export default BlogPage;
