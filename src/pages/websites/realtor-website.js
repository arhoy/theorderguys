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

const RealtorWebsite = () => {
  return (
    <Layout>
      <SEO
        title="Realtor Websites Design and Web Development in Edmonton Alberta"
        description="We are a web development, SEO and digital marketing company that specializes in creating realtor websites "
      />
      <Container>
        <h1>Some or our examples include</h1>
        <a
          href="https://realtoryeg.netlify.app/"
          target="_blank"
          rel="noreferral nofollow noopener"
        >
          Example
        </a>
      </Container>
    </Layout>
  );
};

export default RealtorWebsite;
