import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;

  & p {
    margin-right: 3rem;
    opacity: 0.85;
    font-size: 2.5rem;
    width: max-content;
    text-transform: uppercase;
    color: ${props => props.theme.colors.grey};
  }
`;

const TickerContainer = styled(Ticker)``;
const MyCompanyTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible);
  };

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <TickerContainer speed={3}>
          {({ index }) => (
            <Container>
              <p>Dash-Intel</p>
              <p>Soul 2 Soul</p>
              <p>Dress Code Africa</p>
              <p>Neverland Tea</p>
              <p>New Image Cosmetic</p>
              <p>New Barber</p>
              <p>Sumo Sumo Sushi</p>
              <p>A&J Driving School</p>
              <p>Crystal Glass</p>
              <p>Point Green Gardening</p>
              <p>Royal Dragon Vodka</p>
              <p>Rental YEG</p>
              <p>Aquasar Inc</p>
            </Container>
          )}
        </TickerContainer>
      )}
    </PageVisibility>
  );
};

export default MyCompanyTicker;
