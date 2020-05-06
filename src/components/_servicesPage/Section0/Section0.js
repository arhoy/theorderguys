import React from 'react';

import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H1 } from '../../reusableStyles/typography/Typography';
import background from '../../../../images/svg/mountainbcg.svg';

const CustomSection = styled(Section)`
  background: linear-gradient(
      180deg,
      ${props => props.theme.colors.primary} 0%,
      white 100%
    ),
    url(${background});
  background-size: contain;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    background-size: cover;
    background-position: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
`;

const CustomH1 = styled(H1)`
  color: inherit;
  text-align: center;
  line-height: 4rem;
`;

const Blurb = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;
`;

export const Section0 = () => {
  return (
    <CustomSection>
      <Container>
        <CustomH1>We Provide Custom</CustomH1>
        <Blurb>
          Highend Performance Websites, White Label SEO & Effective Online
          Advertising
        </Blurb>
      </Container>
      <ButtonContainer>
        <Button> Get Started Today </Button>
      </ButtonContainer>
    </CustomSection>
  );
};
