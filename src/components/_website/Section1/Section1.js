import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import { Container1200 } from '../../reusableStyles/sections/Sections';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
} from '../../_servicesPage/Section2/InfoCards';
import { H2 } from '../../reusableStyles/typography/Typography';

const Container = styled(Container1200)`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1rem;
`;

const CustomSection = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
`;

const TitleContainer = styled.div`
  display: flex;
  & ${H2} {
    margin: 1rem 0;
    background-image: linear-gradient(
      145deg,
      ${props => props.theme.colors.secondaryVeryLight} 50%,
      transparent 50%
    );
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  & p {
    max-width: 80rem;
  }
`;

export const Section1 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <h4>Branding. Design. Development. </h4>
        <H2>Tailored Highend Websites</H2>
        <p>
          From wireframes and branding to content management solutions, website
          chat and ecommerce we provide an array of web design and web
          development services customized to your business. No cookie cutter one
          fit all solutions.
        </p>
      </TitleContainer>
      <Container>
        <Fade left>
          <Card1 />
        </Fade>

        <Fade right delay={500}>
          <Card2 />
        </Fade>
        <Fade top delay={500}>
          <Card3 />
        </Fade>
        <Fade bottom>
          <Card4 />
        </Fade>
        <Fade left>
          <Card5 />
        </Fade>
        <Fade bottom delay={500}>
          <Card6 />
        </Fade>
      </Container>
    </CustomSection>
  );
};
