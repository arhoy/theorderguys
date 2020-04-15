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
      <H4>Lets Discuss Websites</H4>
      <p>
        Premium high quality websites. We want to make the next website for you
        unlike many agencies we don't cut corners but build custom websites from
        the ground up.
      </p>
      <H5>We've got your back</H5>
      <p>
        Need to grow your business? No problem. Our effective SEO and online
        advertising strategy will be custom tailored for your business every
        step of the way.
      </p>
      <LogoContainer>
        {/* Add in Google, Facebook, Shopify Partner Program here */}
        <Logo> Google Ads Certified </Logo>
        <Logo> Shopify Partner </Logo>
      </LogoContainer>
    </Container>
  );
};
