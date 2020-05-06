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
      <H3>The Order Guys</H3>
      <Subtitle>Real-Time Restaurant Ordering</Subtitle>
      <Blurb>
        <p>
          We are here to get your restaurant noticed online and provide you with
          a cutting edge modern strategy to tackle the dynamic and ever-changing
          landscape.
        </p>
        <p>
          Real-Time Restaurant Ordering in Edmonton Alberta. We are to help you
          get started with your restaurants online orders and help with anything
          else for your restaurants online presence.
        </p>
      </Blurb>
    </Container>
  );
};
