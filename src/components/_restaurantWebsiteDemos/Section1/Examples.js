import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import { Card } from './Card';

const Section = styled.div`
  margin: 4rem 0;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Examples = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "restaurant-demos/pregopasta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "restaurant-demos/tempuraqueen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Container>
        <Card
          url="https://pregopasta.com"
          fluid={data.image1.childImageSharp.fluid}
          title="ITALIAN"
        />
        <Card
          url="https://tempuraqueen.com"
          fluid={data.image2.childImageSharp.fluid}
          title="JAPANESE "
        />
      </Container>
    </Section>
  );
};
