import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styled from '@emotion/styled';
import { Card } from './Card';
import { H2 } from '../../reusableStyles/typography/Typography';

import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { Section } from '../../reusableStyles/sections/Sections';
import BackgroundSvg5 from './BackgroundSvg5';
import NoStyleLink from '../../Links/NoStyleLink';

const CustomSection = styled(Section)`
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  background: linear-gradient(
    135deg,
    rgba(9, 22, 48, 1) 5%,
    rgba(9, 22, 48, 1) 24%,
    rgba(57, 51, 97, 1) 82%,
    rgba(65, 55, 105, 1) 91%,
    rgba(65, 55, 105, 1) 100%
  );

  width: 100%;
`;

const H2Centered = styled(H2)`
  text-align: center;
  color: inherit;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  z-index: 10;
  font-size: 1.7rem;
  text-transform: uppercase;
`;

const ExtraPaddingBottom = styled.div`
  width: 100%;
  height: 8rem;
`;

export const Section5 = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "cloud1.png" }) {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image2: file(relativePath: { eq: "pixalated-monitor.png" }) {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image3: file(relativePath: { eq: "cloud2.png" }) {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <CustomSection>
      <H2Centered> Other Services Include </H2Centered>
      <Container>
        <Card
          title="Web Development & Design"
          blurb="Are you spending countless hours each month trying to pull numbers from different sources and build reports? One area of expertise is automating reports to save you time so you can focus on your unique business and unique value proposition"
          fixed={data.image1.childImageSharp.fixed}
        />
        <Card
          title="SEO"
          blurb="Weekly content, social media posts, backlinks and Google My Business Optimization to make sure your site is performing up to speed and getting traffic. In addition, we will create featured restaurant reviews and articles on our site for your restaurant. "
          fixed={data.image2.childImageSharp.fixed}
        />
        <Card
          title="Advertising"
          blurb="We will run facebook and instagram ads for your business within your advertising budget. We can also run Google Ads for you as well so that when people search for your website keywords, Google will show your site"
          fixed={data.image3.childImageSharp.fixed}
        />
      </Container>
      <ButtonContainer>
        <NoStyleLink to="/contact">
          <Button>Learn More Today</Button>
        </NoStyleLink>
      </ButtonContainer>
      <ExtraPaddingBottom />
      <BackgroundSvg5 />
    </CustomSection>
  );
};
