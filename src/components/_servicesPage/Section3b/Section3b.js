import React from 'react';

import styled from '@emotion/styled';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import {
  LinkCard1,
  LinkCard2,
  LinkCard3,
  LinkCard4,
  LinkCard5,
  LinkCard6,
} from './LinkCards';
import { H2 } from '../../reusableStyles/typography/Typography';

const CustomSection = styled(Section)`
  margin: 2rem;
  padding-left: 0;
  padding-top: 1rem;
  padding-right: 0;
`;

const Container = styled(Container1200)`
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  & p {
    max-width: 80rem;
  }
`;

const Subtitle = styled.h4`
  display: inline;
  color: ${props => props.theme.colors.black};
  opacity: 0.88;
  font-weight: 500;
  text-align: center;
  font-size: 2.2rem;
`;

export const Section3b = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <Subtitle>Affordable and Modern</Subtitle>
        <H2>Online Ordering System</H2>
        <p>
          The online ordering system is a great way to get restaurant orders in
          real time to your restaurant tablet or phone. Customers can pay
          online, callback or at the counter.
        </p>
      </TitleContainer>

      <Container>
        <LinkCard1 />
        <LinkCard2 />
        <LinkCard3 />
        <LinkCard4 />
        <LinkCard5 />
        <LinkCard6 />
      </Container>
    </CustomSection>
  );
};
