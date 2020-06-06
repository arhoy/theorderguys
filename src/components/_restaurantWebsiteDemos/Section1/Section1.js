import React from 'react';

import styled from '@emotion/styled';
import { Examples } from './Examples';
import { SectionTitle } from '../../reusableStyles/titles/SectionTitle';

const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  min-height: 50vh;
  background: white;
  padding: 4rem 0;
  border-radius: 2rem;
  -webkit-box-shadow: 2px -1px 15px 1px rgba(61, 61, 61, 0.21);
  -moz-box-shadow: 2px -1px 15px 1px rgba(61, 61, 61, 0.21);
  box-shadow: 2px -1px 15px 1px rgba(61, 61, 61, 0.21);

  & p {
    text-align: center;
  }
`;

export const Section1 = () => {
  return (
    <Container>
      <SectionTitle title="Restaurant Websites" />
      <p>Custom Made to Order with your online ordering menu</p>
      <Examples />
    </Container>
  );
};
