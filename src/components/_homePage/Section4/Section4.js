import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import { H2 } from '../../reusableStyles/typography/Typography';
import Card from './Card';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const CardContainer = styled(Container1000)``;

export const Section4 = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "computers.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "clouds.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "data.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section>
      <TitleContainer>
        <H2> Online Ordering Platform </H2>
      </TitleContainer>

      <CardContainer>
        <Card
          title="No Commissions"
          blurb={`No Commission on unlimited orders. For pickup our pricing starts at $29/month flat fee. No commission and unlimited menu customizations`}
          fluid={data.image1.childImageSharp.fluid}
        />
        <Card
          title="Website & Facebook Integration"
          blurb={`Get your restaurant live on your website and on Facebook so your customers can order online before and avoid waiting times before they pickup.`}
          fluid={data.image2.childImageSharp.fluid}
          reverse={true}
        />
        <Card
          title="Real Time Alerts"
          blurb={`Alert will be sent to your restaurant phone or tablet in real-time. Once you accept the order will be confirmed and the customer will know their order is getting ready`}
          fluid={data.image3.childImageSharp.fluid}
        />
      </CardContainer>
    </Section>
  );
};
