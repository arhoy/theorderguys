import React from 'react';
import styled from '@emotion/styled';

import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H1 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';
import { DemoButton } from '../SectionDemo/DemoButton';

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-bottom: 10rem;

  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }

  & p {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const SubContainer = styled.div``;

const HeadingContainer = styled.div``;

const Heading = styled(H1)`
  text-align: left;
  font-weight: bold;

  color: ${props => props.theme.colors.white};
  & .primary,
  & .secondary {
    display: block;
    margin-bottom: 2rem;
  }
`;

const BlurbContainer = styled.div``;

const CallToActionContainer = styled.div`
  margin: 2rem 0;
  & > * {
    margin: 4px;
  }
`;

const CustomButton = styled(ButtonSweepToRight)`
  border-radius: 4px;
  padding: 1.4rem 2.5rem;

  color: ${props => props.theme.colors.white};
`;

export const HeroBlurb = () => {
  return (
    <Container>
      <SubContainer>
        <HeadingContainer>
          <Heading>
            <span className="primary">
              Online Ordering Made Easy <br />
            </span>
          </Heading>
          <p>
            Recieve <strong> instant online food orders </strong> straight from
            your website to your phone in{' '}
            <strong>real time and don't pay a dime!</strong>
          </p>
        </HeadingContainer>
      </SubContainer>

      <SubContainer>
        <BlurbContainer>
          <p>
            We work with you to set up the online ordering for your website
            regardless which online ordering app you decide to go with.{' '}
            <span>The Order Guys </span> will consult and help you pick and
            manage the online ordering app most suited to your business needs
            and budget.
          </p>
        </BlurbContainer>
        <CallToActionContainer>
          <NoStyleLink to="/contact">
            <CustomButton> Schedule Demo Today</CustomButton>
          </NoStyleLink>
          <DemoButton />
        </CallToActionContainer>
      </SubContainer>
    </Container>
  );
};
