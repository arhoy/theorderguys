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
              <p> Aquasar Inc </p>
              <p> Codepaper </p>
              <p> Devebyte Marketing </p>
              <p> Green Geeks </p>
            </Container>
          )}
        </TickerContainer>
      )}
    </PageVisibility>
  );
};

export default MyCompanyTicker;
