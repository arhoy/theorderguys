import React from 'react';
import styled from '@emotion/styled';

import { Section } from '../../../reusableStyles/sections/Sections';
import BackgroundSvg from './BackgroundSvg';
import { HeroBlurb } from './HeroBlurb';

const CustomSection = styled(Section)`
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryLight}
  );
  width: 100%;
`;

const ExtraPaddingBottom = styled.div`
  width: 100%;
  height: 10rem;
`;

export const Section0 = () => {
  return (
    <CustomSection>
      <HeroBlurb />
      <ExtraPaddingBottom />
      <BackgroundSvg />
    </CustomSection>
  );
};
