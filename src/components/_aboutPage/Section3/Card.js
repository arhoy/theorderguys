import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h4`
  text-align: center;

  color: ${props => props.theme.colors.grey};
`;

const Blurb = styled.div`
  text-align: center;
  max-width: 50rem;
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card = () => {
  return (
    <Container>
      <H3>Tech Stack</H3>
      <Subtitle>Divide and Conquer</Subtitle>
      <Blurb>
        <p>
          Knowing technologies such as React, Vue or GraphQL is one thing, but
          being able to identify which tool, service or platform to use in a
          cost effective way for the right job is another.
        </p>
        <p>
          Depending on your business requirements, budget and potential future
          needs we will use the right technology for you and provide you with a
          cost effective business solution.
        </p>
      </Blurb>
    </Container>
  );
};
