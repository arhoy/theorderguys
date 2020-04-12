import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H2 } from '../../reusableStyles/typography/Typography';
import { SectionWhiteToGrey } from '../../reusableStyles/sections/Sections';

const CustomSection = styled(SectionWhiteToGrey)`
  padding-bottom: 12rem;
`;

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

export const Section7 = () => {
  return (
    <CustomSection>
      <Container>
        <TitleContainer>
          <Title>Ready For Start?</Title>
          <Subtitle>
            Book a 15 minute meet & greet to see if we can help you meet your
            business goals{' '}
          </Subtitle>
        </TitleContainer>
        <Button>Contact Us</Button>
      </Container>
    </CustomSection>
  );
};
