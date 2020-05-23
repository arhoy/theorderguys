import React from 'react';

import styled from '@emotion/styled';
import { H2 } from '../../reusableStyles/typography/Typography';
import Ticker from './Ticker';

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 10rem;
  display: grid;
  justify-content: center;
`;

const Title = styled(H2)`
  text-align: center;

  padding: 2rem;
`;

export const SectionPartners = () => {
  return (
    <Container>
      <Title>Our Partner Network</Title>
      <Ticker />
    </Container>
  );
};
