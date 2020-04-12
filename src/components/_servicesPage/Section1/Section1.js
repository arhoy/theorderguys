import React from 'react';
import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import svg1 from '../../../../images/svg/services/agreement.svg';
import svg2 from '../../../../images/svg/services/problem-solving.svg';
import svg3 from '../../../../images/svg/services/goal.svg';

import { Card } from './Card';

const Container = styled(Container1000)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const StyledArrow = styled(FaArrowRight)`
  opacity: 0.9;
  font-size: 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    transform: rotate(90deg);
  }
`;

export const Section1 = () => {
  return (
    <Section>
      <Container>
        <Card title={`Month To Month Contracts`} url={svg1} />
        <StyledArrow />
        <Card title={`Customized Solutions`} url={svg2} />
        <StyledArrow />
        <Card title={`Long Term Results`} url={svg3} />
      </Container>
    </Section>
  );
};
