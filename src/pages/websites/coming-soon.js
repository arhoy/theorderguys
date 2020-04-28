import React from 'react';

import styled from '@emotion/styled';
import Layout from '../../components/layouts/Layout';

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

const ComingSoon = () => {
  return (
    <Layout>
      <Container>
        <h1>Coming Soon, Stay Tuned</h1>
      </Container>
    </Layout>
  );
};

export default ComingSoon;
