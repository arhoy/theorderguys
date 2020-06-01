import React from 'react';

import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';

import SEO from '../hooks/SEO';
import { Section0 } from '../components/_website/_restaurant-website/Section0/_Section0';

import { InfoTabs } from '../components/_website/_restaurant-website/Section1/InfoTabs';
import { Section2 } from '../components/_website/_restaurant-website/Section2/_Section2';
import { ReadyToGetStarted } from '../components/reusableComponents/general/ReadyToGetStarted';
import { SectionFAQ } from '../components/_website/_restaurant-website/SectionFAQ/SectionFAQ';
import { H2 } from '../components/reusableStyles/typography/Typography';

const Section = styled.div`
  margin: 4rem 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  & ${H2} {
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

const OnlineOrdering = () => {
  return (
    <Layout>
      <SEO
        title="The Order Guys online ordering platform, services and setup"
        description="We offer 0% commmision online ordering services and setup for restaurant businesses in Edmonton Alberta"
        path="/online-ordering"
      />

      <Section0 />

      <Section>
        <Container>
          <div className="demo-restaurant">
            <H2>
              We Help <br /> Restaurants with Ordering
            </H2>
          </div>
          <InfoTabs />
        </Container>
      </Section>

      <SectionFAQ />

      <Section2 />
      <ReadyToGetStarted />
    </Layout>
  );
};

export default OnlineOrdering;
