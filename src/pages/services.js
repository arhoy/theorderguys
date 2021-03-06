import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_servicesPage/Section0/Section0';
import { Section1 } from '../components/_servicesPage/Section1/Section1';
import { Section2 } from '../components/_servicesPage/Section2/Section2';
import { Section3 } from '../components/_servicesPage/Section3/Section3';
import { Section3b } from '../components/_servicesPage/Section3b/Section3b';
import { Section4 } from '../components/_servicesPage/Section4/Section4';
import { Section5 } from '../components/_servicesPage/Section5/Section5';
import { Section6 } from '../components/_servicesPage/Section6/Section6';
import { Section7 } from '../components/_servicesPage/Section7/Section7';

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

const ServicesPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="The Order Guys Services"
        description="The Order Guys set up real-time, 0% commission unlimited orders for restaurants"
        pathname="/services"
      />
      <Section0 />
      <Section1 />
      <Section3b />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      >
      <Section6 />
      <Section7 />
    </Layout>
  );
};

export default ServicesPage;
