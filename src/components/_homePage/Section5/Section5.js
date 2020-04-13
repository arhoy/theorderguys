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
      <H2Centered> A Better Way to Automate </H2Centered>
      <Container>
        <Card
          title="Reporting"
          blurb="Are you spending countless hours each month trying to pull numbers from different sources and build reports? One area of expertise is automating reports to save you time so you can focus on your unique business and unique value proposition"
          fixed={data.image1.childImageSharp.fixed}
        />
        <Card
          title="Dashboards"
          blurb="Building business dashboards using tools like Google Data Studio, Tableau, SQL and Power BI. We have built executive business dashboard for large companies and provided easy ways to generate monthly reports to view important business KPIs "
          fixed={data.image2.childImageSharp.fixed}
        />
        <Card
          title="Ecommerce Products"
          blurb="Are you looking to get hundreds or even thousands of products into a Shopify Store or WordPress site? We can help you with product uploads and data scraping product information from sites like Amazon.com, Kohls, Walmart and much more "
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
