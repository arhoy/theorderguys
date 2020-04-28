import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import { H2 } from '../../reusableStyles/typography/Typography';
import { Card } from './Card';
import { Text1, Text2, Text3, Text4 } from './Texts';

const TitleContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
  & p {
    max-width: 60rem;
  }
`;

const CardContainer = styled(Container1000)``;
export const Section5 = () => {
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
        <H2> We Make Things Easy</H2>
        <p>
          We understand running a business is hard. That is why we want to do
          the online technical stuff for you, so you can focus on your core
          business.
        </p>
      </TitleContainer>

      <CardContainer>
        <Card
          title="We make websites that work for you"
          fluid={data.image1.childImageSharp.fluid}
        >
          <Text1 />
        </Card>
        <Card
          title="An Extended Business Partner"
          fluid={data.image2.childImageSharp.fluid}
          reverse={true}
        >
          <Text2 />
        </Card>
        <Card
          title="SSL Certificates and installs"
          blurb={`Our Data servers are ready for ddos and xss attacks on any network`}
          fluid={data.image3.childImageSharp.fluid}
        >
          <Text3 />
        </Card>
        <Card
          title="WordPress Installs and Migration"
          blurb={`Deploy to a redundant network of servers with built‑in continuous integration and HTTPS.`}
          fluid={data.image1.childImageSharp.fluid}
          reverse={true}
        >
          <Text4 />
        </Card>
      </CardContainer>
    </Section>
  );
};
