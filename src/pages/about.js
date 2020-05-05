import React from 'react';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

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
    aboutImage1: file(relativePath: { eq: "_about/tower.jpg" }) {
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
        title="About Us | The Order Guys"
        description="Codepaper consists of a network of talented professionals & freelancers from Edmonton Alberta and around the world. We build custom websites from the ground up, provide white label SEO and advertising and much more. Our turn around is fast and our overhead is minimal. We guarantee our work and work with only the best"
        pathname="/about"
        image="https://res.cloudinary.com/dcb389szc/image/upload/v1588481585/theorderguys/SEO%20Images/pages/about_theorderguys.png"
      />
      <Fade bottom>
        <Section0 fluid={data.aboutImage1.childImageSharp.fluid} />
      </Fade>
      <Fade bottom>
        <Section1 />
      </Fade>
      <Fade bottom>
        <Section2 />
      </Fade>
      <Fade bottom>
        <Section3 />
      </Fade>
      <Fade bottom>
        <Section4 />
      </Fade>
      <Fade bottom>
        <Section5 fluid={data.aboutImage1.childImageSharp.fluid} />
      </Fade>
    </Layout>
  );
};

export default AboutPage;
