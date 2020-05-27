import React from 'react';

import styled from '@emotion/styled';
import { H4, H5 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  & p {
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    opacity: 0.9;
  }
  & span {
    font-weight: 700;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  opacity: 0.6;
  font-weight: bold;
  color: ${props => props.theme.colors.grey};
`;

export const Blurb = () => {
  return (
    <Container>
      <H4>Lets Discuss</H4>
      <p>
        At the Order Guys, we are ready to help you get your website and online
        ordering system up and running. We can run through some demos and case
        studies for you. We have <span>no long term contracts</span> so there is
        no risk for you
      </p>
      <H5>We've got your back</H5>
      <p>
        Need to grow your restaurant? No problem. Our effective SEO and online
        advertising strategy will be custom tailored for your business every
        step of the way.
      </p>
      <LogoContainer>
        {/* Add in Google, Facebook, Shopify Partner Program here */}
        <Logo> Google Ads Certified </Logo>
        <Logo> Shopify Partner </Logo>
        <Logo> Shopify Certified </Logo>
      </LogoContainer>
      <br />
      <H5>Our Partners</H5>
      <Logo> Mobi2Go </Logo>
      <Logo> GlobalFoodSoft </Logo>
      <Logo> GreenGeeks </Logo>
    </Container>
  );
};
