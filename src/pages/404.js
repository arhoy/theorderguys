import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  min-height: 30rem;
  justify-content: center;
  align-items: center;
  & h4 {
    margin-bottom: 2rem;
  }
  & p {
    font-size: 1.8rem;
    opacity: 0.8;
  }
  & span {
    color: ${props => props.theme.colors.red};
    font-size: 1.6rem;
  }
`;
const NotFound = props => {
  console.log('props are', props);
  return (
    <Layout>
      <SEO
        title="NOT FOUND PAGE"
        description="The page you are looking for has returned 404 not found"
      />
      <Container>
        <h4> 404 page not found...Spooky! </h4>
        <p>
          The page you are looking for <br />
          <span> {`https://theorderguys.com${props.location.pathname}`} </span>
          <br />
          may have moved or does not exist!
        </p>
      </Container>
    </Layout>
  );
};

export default NotFound;
