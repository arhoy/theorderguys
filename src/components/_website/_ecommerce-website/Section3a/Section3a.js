import React from 'react';
import styled from '@emotion/styled';

import NetlifyCard1 from '../../../reusableStyles/cards/netlifyCards/NetlifyCard1';
import { Section } from '../../../reusableStyles/sections/Sections';

const Padding = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const Section3a = ({ data }) => {
  return (
    <Section>
      <NetlifyCard1
        title={`Dress Code Africa`}
        blurb={`A Shopify Powered Ecommerce Store with thousands of products ranging from fashion to electronics, health and beauty, vitamins and much more`}
        link={`Visit Store`}
        href="https://dresscodeafrica.com?referral=theorderguys.com"
        picture={data.imageCard1.childImageSharp.fluid}
      />
      <Padding />
      <NetlifyCard1
        title={`Fast Fashion`}
        blurb={`Gatsby and Contentful CMS Powered Store with SnipCart. Fast full functional demo online store with an array of fashion products`}
        link={`Visit Store`}
        href="https://fashiontwo.netlify.app/demos/fashion-six"
        picture={data.imageCard2.childImageSharp.fluid}
      />
    </Section>
  );
};
