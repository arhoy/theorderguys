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
      <H3>Shopify Powered Ecommerce</H3>
      <Subtitle>Custom Shopify Stores</Subtitle>
      <Blurb>
        <p>
          Shopify is one of the world's most powerful and popular ecommerce
          platforms. We offer Shopify Powered solutions or integrations with
          your existing website
        </p>
        <p>
          While Shopify can be a powerful do it yourself platform, as a Shopify
          Partner we have the experience with setting up Shopify Stores and will
          take care of everything for you.
        </p>
        <p>
          If you are have products or need products to sell we will handle and
          upload all of that for you. Once your store is live we will give you a
          step by step instruction on how to manage your store and will be able
          to help you anytime.
        </p>
      </Blurb>
    </Container>
  );
};
