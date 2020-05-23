import React from 'react';

import styled from '@emotion/styled';
import Layout from '../../components/layouts/Layout';

import SEO from '../../hooks/SEO';
import { Section0 } from '../../components/_website/_restaurant-website/Section0/_Section0';

import { InfoSection } from '../../components/_website/_restaurant-website/Section1/InfoSection';

const Section = styled.div`
  margin: 2rem 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  & h1 {
    text-align: center;
    font-size: 4rem;
  }

  & .demo-restaurant {
    padding: 2rem 0;
    margin: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
      margin: 2rem 0;
    }
    & h1 {
      color: ${props => props.theme.colors.black};
      opacity: 0.9;
    }

    & .demo-order-button {
      cursor: pointer;
      display: inline-block;
      background: ${props => props.theme.colors.primaryDark};
      padding: 1rem 2rem;
      color: white;
      border-radius: 1rem;
    }
  }
 
  }
`;

const RestaurantWebsite = () => {
  return (
    <Layout>
      <SEO
        title="Restaurant Website Online Pickup Orders Edmonton Alberta"
        description="Restaurants wanting to have an affordable online ordering pickup solution for there business need to look no further. We offer online order system that goes from your website to your mobile or restaurant table for all restaurants in Edmonton Alberta"
        path="/restaurant-website"
      />

      <Section0 />

      <Section>
        <Container>
          <div className="demo-restaurant">
            <h1>
              We Help <br /> Restaurants with Ordering
            </h1>
          </div>
          <InfoSection />
        </Container>
      </Section>
    </Layout>
  );
};

export default RestaurantWebsite;
