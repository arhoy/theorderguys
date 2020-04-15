import React from 'react';

import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H1 } from '../../reusableStyles/typography/Typography';
import background from '../../../../images/svg/pattern-gradient.svg';

const CustomSection = styled(Section)`
  height: 100%;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
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

  &::before {
    background: ${props => props.theme.colors.white};
  }
  &:hover {
    color: ${props => props.theme.colors.black};
  }
`;

export const Section0 = () => {
  return (
    <CustomSection>
      <Container>
        <CustomH1>A great website is an investment</CustomH1>
        <Blurb>
          A highend website is often the first customer touch point for your
          business
        </Blurb>
      </Container>
      <ButtonContainer>
        <Button> Get Started Today </Button>
      </ButtonContainer>
    </CustomSection>
  );
};
