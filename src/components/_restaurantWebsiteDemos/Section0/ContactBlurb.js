import React from 'react';
import styled from '@emotion/styled';

import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H1 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 4rem;
  position: relative;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 10rem;

  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer = styled.div``;

const HeadingContainer = styled.div`
  & p {
    font-weight: bold;
  }
`;

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

const BlurbContainer = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

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
              Your Amazing Restaurant Website is Just A Click Away! <br />
            </span>
          </Heading>
        </HeadingContainer>
      </SubContainer>

      <SubContainer>
        <BlurbContainer>
          <p>
            Make a great first impressionwith a brand new amazing restaurant
            website! Custom designed restaurant websites with{' '}
            <strong> online ordering</strong> functionality
          </p>
        </BlurbContainer>
        <CallToActionContainer>
          <NoStyleLink to="/contact">
            <CustomButton>Get Yours Today</CustomButton>
          </NoStyleLink>
        </CallToActionContainer>
      </SubContainer>
    </Container>
  );
};
