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
        <H2> Other Services Offered </H2>
      </TitleContainer>

      <CardContainer>
        <Card
          title="SSL Certificates"
          blurb={`Secure your website with SSL Certificates and free installation for half of GoDaddy prices`}
          fluid={data.image1.childImageSharp.fluid}
        />
        <Card
          title="WordPress and Shopify"
          blurb={`WordPress and Shopify Development including quick turn arounds, migration and robust solutions`}
          fluid={data.image2.childImageSharp.fluid}
          reverse={true}
        />
        <Card
          title="Reporting and Analytics"
          blurb={`We are a data driven company. We make decisions based on the numbers and we do the same for our clients as well`}
          fluid={data.image3.childImageSharp.fluid}
        />
      </CardContainer>
    </Section>
  );
};
