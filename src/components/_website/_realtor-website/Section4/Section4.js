import React from 'react';
import styled from '@emotion/styled';
import { PropertyGallery } from '../../../realestate/mls/PropertyGallery';

import properties from '../../../../../realtordata.json';
import { H2 } from '../../../reusableStyles/typography/Typography';

const Section = styled.div`
  margin: 2rem 0;
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

export const Section4 = () => {
  return (
    <Section>
      <TitleContainer>
        <h4>Rank For Your Own Website with </h4>
        <H2>Organic MLS Listings</H2>
      </TitleContainer>

      <PropertyGallery properties={properties.data} />
    </Section>
  );
};
