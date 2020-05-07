import React from 'react';

// import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import SEO from '../../hooks/SEO';
import { Section0 } from '../../components/_website/_realtor-website/Section0/_Section0';
import { Section1 } from '../../components/_website/_realtor-website/Section1/Section1';
import { Section2 } from '../../components/_website/_realtor-website/Section2/_Section2';
import { Section3 } from '../../components/_website/_realtor-website/Section3/_Section3';
import { Section4 } from '../../components/_website/_realtor-website/Section4/Section4';
import { ReadyToGetStarted } from '../../components/reusableComponents/general/ReadyToGetStarted';

export const query = graphql`
  {
    imageCard1: file(
      relativePath: {
        eq: "_websites/_realtor-websites/codepaper-real-estate-card-1.jpg"
      }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(
      relativePath: {
        eq: "_websites/_realtor-websites/edmonton-real-estate-card-1.jpg"
      }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const OrderingApp = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Realtor Websites Design and Web Development in Edmonton Alberta"
        description="We are a web development, SEO and digital marketing company that specializes in creating realtor websites"
        path="/realtor-website"
      />
      <Section0 />
      <Section1 />
      <Section4 />
      <Section2
        fluid1={data.imageCard1.childImageSharp.fluid}
        fluid2={data.image1.childImageSharp.fluid}
      />
      <Section3 />

      <ReadyToGetStarted />
    </Layout>
  );
};

export default OrderingApp;
