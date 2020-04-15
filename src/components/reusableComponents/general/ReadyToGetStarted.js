import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H2 } from '../../reusableStyles/typography/Typography';
import { SectionWhiteToGrey } from '../../reusableStyles/sections/Sections';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 1rem 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Title = styled(H2)``;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.grey};
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  font-size: 1.76rem;
  text-transform: uppercase;
  border-radius: 1rem;
`;

export const ReadyToGetStarted = () => {
  return (
    <SectionWhiteToGrey>
      <Container>
        <TitleContainer>
          <Title>Ready To Get Started?</Title>
          <Subtitle>
            Book a 15 minute meet & greet to see if we can help you meet your
            business goals
          </Subtitle>
        </TitleContainer>
        <NoStyleLink to="/contact">
          <Button>Contact Us</Button>
        </NoStyleLink>
      </Container>
    </SectionWhiteToGrey>
  );
};
