import React from 'react';

import styled from '@emotion/styled';
import Layout from '../../components/layouts/Layout';
import SEO from '../../hooks/SEO';

const Container = styled.div`
  display: flex;
  min-height: 30rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  & h1 {
    text-align: center;
    font-size: 4rem;
  }
`;

const MarketingWebsite = () => {
  return (
    <Layout>
      <SEO
        title="Marketing Websites Websites"
        description="Marketing website design, web development and SEO in Edmonton Alberta. For all your small business website needs we are team of passionate marketers and web developers that are hungry for your business"
      />
      <Container>
        <h1>Coming Soon, Stay Tuned</h1>
      </Container>
    </Layout>
  );
};

export default MarketingWebsite;
