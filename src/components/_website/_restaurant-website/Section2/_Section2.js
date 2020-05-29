import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Section } from '../../../reusableStyles/sections/Sections';
import { H2 } from '../../../reusableStyles/typography/Typography';
import { Content1, Content2, Content3, Content4 } from './Content';
import { ButtonStyle2 } from '../../../reusableStyles/buttons/Button';

const CustomSection = styled(Section)`
  padding-top: 10rem;
  margin-top: 4rem;
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
    max-width: 1000px;
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
    max-width: 70rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(ButtonStyle2)`
  font-weight: 500;
  background: transparent;
  color: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.primary};
  &:hover {
    font-weight: 500;
    color: ${props => props.theme.colors.white};
  }
  &.active {
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
  }
`;

export const Section2 = () => {
  const [item, setItem] = useState(1);

  return (
    <CustomSection>
      <Container>
        <TitleContainer>
          <h4>We help with setup on any other online ordering platform</h4>
          <H2>One Stop Solution</H2>
          <p>
            If there is another platform that is more suitable for your needs we
            will help set up and integrate it with your website
          </p>
        </TitleContainer>
        <ButtonContainer>
          <Button
            className={item === 0 ? 'active' : ''}
            onClick={() => setItem(0)}
          >
            Mobi2Go{' '}
          </Button>
          <Button
            className={item === 1 ? 'active' : ''}
            onClick={() => setItem(1)}
          >
            Ordering
          </Button>
          <Button
            className={item === 2 ? 'active' : ''}
            onClick={() => setItem(2)}
          >
            DoorDash
          </Button>
          <Button
            className={item === 3 ? 'active' : ''}
            onClick={() => setItem(3)}
          >
            RestoLabs
          </Button>
        </ButtonContainer>

        {item === 0 && <Content1 />}
        {item === 1 && <Content2 />}
        {item === 2 && <Content3 />}
        {item === 3 && <Content4 />}
      </Container>
    </CustomSection>
  );
};
