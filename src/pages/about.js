import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_aboutPage/Section0/Section0';
import { Section1 } from '../components/_aboutPage/Section1/Section1';
import { Section2 } from '../components/_aboutPage/Section2/Section2';
import { Section3 } from '../components/_aboutPage/Section3/Section3';
import { Section4 } from '../components/_aboutPage/Section4/Section4';
import { Section5 } from '../components/_aboutPage/Section5/Section5';

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "_about/towerred.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="About The Order Guys"
        description="The Order Guys deliver online ordering services and setup for local restaurants."
        pathname="/about"
        image="https://res.cloudinary.com/dcb389szc/image/upload/v1588481585/codepaper/SEO%20Images/pages/about_codepaper.png"
      />

      <Section0 fluid={data.aboutImage1.childImageSharp.fluid} />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 fluid={data.aboutImage1.childImageSharp.fluid} />
    </Layout>
  );
};

export default AboutPage;
