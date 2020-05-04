import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../../../reusableStyles/sections/Sections';
import NetlifyCard1 from '../../../reusableStyles/cards/netlifyCards/NetlifyCard1';

const MarginExtra = styled.div`
  width: 100%;
  margin: 6rem 0;
`;

export const Section2 = ({ fluid1, fluid2 }) => {
  return (
    <Section>
      <NetlifyCard1
        title={`Case Study: Austin Dundiel`}
        blurb={`Austin Dundiel is an example realtor site in Edmonton Alberta. A blazingly fast, easily searchable and customized site integrated with WordPress CRM and MLS listings.`}
        link={`Read More`}
        href="https://realtoryeg.netlify.app/"
        picture={fluid1}
      />
      <MarginExtra />
      <NetlifyCard1
        title={`Case Study: Live Treo`}
        blurb={`Live Treo is a community of rental properties with many locations across Edmonton Alberta. We integrated their Buidium and Lift System sites to a custom one each with the its own community`}
        link={`Read More`}
        href="https://rentalyeg.com"
        picture={fluid2}
      />
    </Section>
  );
};
