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
      <H3>Alex Quasar</H3>
      <Subtitle>Founder & Developer</Subtitle>
      <Blurb>
        <p>
          I work with a group and network of other developers, designers and
          agencies to provide custom but cost effective agency services.
        </p>
        <p>
          Through this network we can provide custom solutions to your business
          at scale. We are looking to grow to and expand, and I believe right
          now is the ripe opportunity to do so
        </p>
        <p>
          I have worked with companies large and smale such as Go Auto, Finning
          Canada and Mindable in roles such as Analyst, Developer and Digital
          Marketing Expert.
        </p>
      </Blurb>
    </Container>
  );
};
