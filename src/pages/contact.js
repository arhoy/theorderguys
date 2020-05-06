import React from 'react';

import { graphql } from 'gatsby';

import SEO from '../hooks/SEO';

import Layout from '../components/layouts/Layout';
import { Section0 } from '../components/_contactPage/Section0/Section0';
import { Section1 } from '../components/_contactPage/Section1/Section1';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
    imageCard1: file(relativePath: { eq: "_contact/procrast.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    googlePartnerProgram: file(
      relativePath: { eq: "_contact/google-partner-program.png" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Us | The Order Guys"
        description="At The Order Guys we are here to discuss your next website project or talk about how we can help your business with your SEO and online advertising needs. We are a network of freelancers and professionals looking to help you with your next project. If you are a small business or realtor we would love to hear from you"
        pathname="contact"
      />
      {/* Talk to our experts */}
      <Section0 />

      {/* Reach our Sales Team  */}
      <Section1 image1={data.googlePartnerProgram.childImageSharp.fluid.src} />

      {/* Our Stats */}
      {/* <Section2 /> */}

      {/* Netlify Card */}
      {/* <Section3 fluid={data.imageCard1.childImageSharp.fluid} /> */}
    </Layout>
  );
};

export default contact;
