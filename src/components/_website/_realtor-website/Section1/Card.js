import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../../reusableStyles/typography/Typography';

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
      <H3>Our Motive</H3>
      <Subtitle>Giving Realtors the Extra Advantage</Subtitle>
      <Blurb>
        <p>
          At CodePaper we want to deliver the best results for you as a realtor.
          We believe we can help grow your online brand identity through an
          amazing website and a online ads and SEO strategy.
        </p>
      </Blurb>
    </Container>
  );
};
