import React from 'react';
import styled from '@emotion/styled';

import { ButtonSweepToRight } from '../../../reusableStyles/buttons/Button';
import { H1 } from '../../../reusableStyles/typography/Typography';
import NoStyleLink from '../../../Links/NoStyleLink';

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

export const ContactBlurb = () => {
  return (
    <Container>
      <SubContainer>
        <HeadingContainer>
          <Heading>
            <span className="primary">
              Affordable Online Ordering for less than $1 / day <br />
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
            You pay <strong>0% commission</strong> for all pickup or in-house
            delivery online orders
          </p>
          <br />
          <p>
            No third party websites or platforms. Customers stay on your website
            the entire time!
          </p>
        </BlurbContainer>
        <CallToActionContainer>
          <NoStyleLink to="/contact">
            <CustomButton> Get Set Up Today</CustomButton>
          </NoStyleLink>
        </CallToActionContainer>
      </SubContainer>
    </Container>
  );
};
