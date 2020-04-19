import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h4`
  text-align: center;

  color: ${props => props.theme.colors.grey};
`;

const Blurb = styled.div`
  text-align: center;
  max-width: 50rem;
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card = () => {
  return (
    <Container>
      <H3>Custom Ecommerce Solution</H3>
      <Subtitle>Tailored Made Ecommerce Solution</Subtitle>
      <Blurb>
        <p>
          While most Ecommerce projects would involve one of the above,
          sometimes you might need a custom ecommerce solution. An example
          reason to do this is when you have an existing site that you need to
          add ecommerce to or you want a site where the primary focus is not
          ecommerce but you still want the ability of customers to checkout and
          pay on your site
        </p>
        <p>
          We do Stripe and Shopify CMS only integrations with your site. If you
          need something like this or not sure, please contact us and we will be
          happy to assist
        </p>
      </Blurb>
    </Container>
  );
};
