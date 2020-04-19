import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../../../reusableStyles/typography/Typography';

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.oneThousand};
  margin: 0 auto;
`;

const Title = styled(H1)`
  color: inherit;
`;

const Blurb = styled.div`
  opacity: 0.9;
  max-width: 50rem;
  & p {
  }
`;

export const ContactBlurb = () => {
  return (
    <Container>
      <Title>Ecommerce Done Right</Title>
      <Blurb>
        <p>
          Whether you are looking for a simple one product ecommerce page or a
          full fledged Shopify Store with 1000's of products, we got you
          covered.
        </p>
      </Blurb>
    </Container>
  );
};
