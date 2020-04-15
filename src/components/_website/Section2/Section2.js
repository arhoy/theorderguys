import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Section } from '../../reusableStyles/sections/Sections';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import { H2 } from '../../reusableStyles/typography/Typography';
import { Content1, Content2, Content3, Content4 } from './Content';

const CustomSection = styled(Section)`
  padding-top: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & ${H2} {
    margin: 1rem 0;
    background-image: linear-gradient(
      145deg,
      ${props => props.theme.colors.secondaryVeryLight} 50%,
      transparent 50%
    );
  }
  color: ${props => props.theme.colors.black};
  & h3 {
    color: inherit;
    margin-bottom: 1rem;
  }
  & p {
    color: inherit;
    max-width: 800px;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Section2 = () => {
  const [item, setItem] = useState(0);

  return (
    <CustomSection>
      <Container>
        <TitleContainer>
          <h4>Business Problem Solvers</h4>
          <H2>We Provide</H2>
          <p>
            Features we provide for minimal setup costs. We work with you to
            ensure the right technology is used for your business website every
            step of the way
          </p>
        </TitleContainer>
        <ButtonContainer>
          <ButtonStyle2 onClick={() => setItem(0)}>Live Chat </ButtonStyle2>
          <ButtonStyle2 onClick={() => setItem(1)}>
            Order Delivery Apps{' '}
          </ButtonStyle2>
          <ButtonStyle2 onClick={() => setItem(2)}>
            Custom Contact Forms
          </ButtonStyle2>
          <ButtonStyle2 onClick={() => setItem(3)}>
            CMS Integration
          </ButtonStyle2>
        </ButtonContainer>

        {item === 0 && <Content1 />}
        {item === 1 && <Content2 />}
        {item === 2 && <Content3 />}
        {item === 3 && <Content4 />}
      </Container>
    </CustomSection>
  );
};
