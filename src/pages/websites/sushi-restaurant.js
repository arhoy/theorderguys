import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import { Section0 } from '../../components/_website/_ecommerce-website/Section0/_Section0';
import { Section1 } from '../../components/_website/_ecommerce-website/Section1/Section1';
import { Section2 } from '../../components/_website/_ecommerce-website/Section2/Section2';
import { Section3 } from '../../components/_website/_ecommerce-website/Section3/Section3';
import { Section4 } from '../../components/_website/_ecommerce-website/Section4/Section4';
import { Section3a } from '../../components/_website/_ecommerce-website/Section3a/Section3a';
import SEO from '../../hooks/SEO';

export const query = graphql`
  {
    imageCard1: file(
      relativePath: { eq: "_websites/_ecommerce-websites/dresscodeafrica.png" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageCard2: file(
      relativePath: { eq: "_websites/_ecommerce-websites/fastfashion.png" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const EcommerceWebsites = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Ecommerce Websites Edmonton Alberta"
        description="Ecommerce website design and web development in Edmonton Alberta. Shopify, Woocommerce and ecommerce websites custom created and tailored for you. We are a team of developers that are keen to help you with your web development needs. "
        path="/ecommerce-websites"
      />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section3a data={data} />
      <Section4 />
    </Layout>
  );
};

export default EcommerceWebsites;
