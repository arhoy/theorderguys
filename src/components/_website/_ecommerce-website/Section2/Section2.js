import React from 'react';
import styled from '@emotion/styled';
import {
  SectionGrey,
  Container1000,
} from '../../../reusableStyles/sections/Sections';

import { Card } from './Card';
import { Blob } from './Blob';

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const SubContainer1 = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-row: 2/-1;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer2 = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-row: 1/2;
  }
`;

export const Section2 = () => {
  return (
    <SectionGrey>
      <Container1000>
        <Container>
          <SubContainer1>
            <Blob />
          </SubContainer1>
          <SubContainer2>
            <Card />
          </SubContainer2>
        </Container>
      </Container1000>
    </SectionGrey>
  );
};
