import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_blogPage/Section0/_Section0';
import { Section1 } from '../components/_blogPage/Section1/_Section1';

export const query = graphql`
  {
    allButterPost(sort: { fields: created, order: DESC }) {
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
        title="Blog | CodePaper"
        description="Welcome to our blog about web development and websites for realtors and small businesses in Edmonton"
        pathname="/blog"
      />
      <Section0 />
      <Section1 posts={data.allButterPost.nodes} />
    </Layout>
  );
};

export default BlogPage;
