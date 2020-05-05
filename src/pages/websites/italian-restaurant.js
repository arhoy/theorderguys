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

const ConstructionWebsite = () => {
  return (
    <Layout>
      <SEO
        title="Construction Websites | Custom Construction Website Development and Design in Edmonton Alberta"
        description="Construction website design, web development and SEO in Edmonton Alberta. This includes construction facebook ads, SEO and construction related google ads for your business"
        path="/construction-websites"
      />
      <Container>
        <h1>Coming Soon, Stay Tuned</h1>
      </Container>
    </Layout>
  );
};

export default ConstructionWebsite;
