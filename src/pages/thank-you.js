import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import styled from '@emotion/styled';
import { H1 } from '../components/reusableStyles/typography/Typography';

import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primaryDark};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

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
  & h1 {
    font-size: 3rem;
  }
  & p {
    font-size: 1.8rem;
    opacity: 0.8;
  }
  & span {
    color: ${props => props.theme.colors.red};
    font-size: 1.6rem;
  }
  & a {
    color: ${props => props.theme.colors.primaryDark};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="Thank You from The Order Guys"
        description="Thank you for contacting The Order Guys. We wil get back to you shortly"
      />
      <Container>
        <H1> Thank Your For Contacting Us </H1>
        <p>
          We will get back to your shortly
          <br />
          <StyledLink to="/">Return To Homepage</StyledLink>
          <br />
          <StyledLink to="/blog">View Our Weekly Blog</StyledLink>
          <br />
          <a href="https://www.facebook.com/theorderguys/?modal=admin_todo_tour">
            Like Us on Facebook
          </a>
        </p>
      </Container>
    </Layout>
  );
};

export default NotFound;
