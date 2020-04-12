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
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card = () => {
  return (
    <Container>
      <H3>Our Story</H3>
      <Subtitle>Constantly Striving for the Best</Subtitle>
      <Blurb>
        <p>
          At CodePaper we want to deliver the best results for you and your
          business every step of the way
        </p>
        <p>
          Our mission is the help small businesses grow online. We want to
          partner with them to provide amazing websites and effective online
          marketing solutions
        </p>
      </Blurb>
    </Container>
  );
};
