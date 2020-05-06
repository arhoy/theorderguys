import React from 'react';

import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import { Container1000, Section } from '../../reusableStyles/sections/Sections';
import { Card } from './Card';
import { H3 } from '../../reusableStyles/typography/Typography';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled(Container1000)`
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

const Button = styled(ButtonSweepToRight)`
  display: inline-block;
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Section4 = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "_about/Section1/ImageGrid/ladder.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(
        relativePath: { eq: "_about/Section1/ImageGrid/drone.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "_about/Section1/ImageGrid/code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section>
      <TitleContainer>
        <H3> Other Platform Services</H3>
      </TitleContainer>
      <Container>
        <Card title={`Websites`} fluid={data.image1.childImageSharp.fluid} />
        <Card title={`Seo`} fluid={data.image2.childImageSharp.fluid} />
        <Card title={`Advertising`} fluid={data.image3.childImageSharp.fluid} />
      </Container>
      <ButtonContainer>
        <NoStyleLink to="/services">
          <Button>Read More</Button>
        </NoStyleLink>
      </ButtonContainer>
    </Section>
  );
};
