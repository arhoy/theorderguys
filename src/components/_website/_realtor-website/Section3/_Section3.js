import React from 'react';
import styled from '@emotion/styled';
import { WordCloud } from '../../../wordcloud/WordCloud';
import { H2 } from '../../../reusableStyles/typography/Typography';

const Section = styled.div`
  margin: 2rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  & ${H2} {
    margin: 1rem 0;
    background-image: linear-gradient(
      145deg,
      ${props => props.theme.colors.secondaryVeryLight} 50%,
      transparent 50%
    );
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  & p {
    max-width: 80rem;
  }
`;

export const Section3 = () => {
  return (
    <Section>
      <TitleContainer>
        <h4>Start Building Your Online Presence </h4>
        <H2>We Are Here to Help</H2>
      </TitleContainer>
      <WordCloud />
    </Section>
  );
};
