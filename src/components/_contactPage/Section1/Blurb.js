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

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CompanyImage = styled.img`
  width: 15rem;
  height: 100%;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
`;

export const Blurb = ({ image1 }) => {
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
      <ImageContainer>
        {/* Add in Google, Facebook, Shopify Partner Program here */}
        <CompanyImage src={image1} />
      </ImageContainer>
    </Container>
  );
};
