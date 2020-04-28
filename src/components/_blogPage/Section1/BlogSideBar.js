import React from 'react';
import styled from '@emotion/styled';

import NoStyleLink from '../../Links/NoStyleLink';
import { SubscribeForm } from './SubscribeForm';

const Container = styled.div`
  margin: 1rem auto;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    display: none;
  }
`;

const SideBar = styled.div`
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 4rem;
`;

const PopularPosts = styled.div`
  background: ${props => props.theme.colors.white};
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  padding: 1.5rem;
  & ul {
    margin: 0 2rem;
  }
`;

const StyledLink = styled(NoStyleLink)``;

export const BlogSideBar = () => {
  return (
    <Container>
      <SideBar>
        <SubscribeForm />
        <PopularPosts>
          <h3>Featured Posts</h3>
          <ul>
            <li>
              <StyledLink to="/blog/a-website-checklist-for-realtors-in-2020">
                A Website Checklist for Realtors in 2020
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog/react-hook-intro">
                Intro to React Hooks
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog/building-an-ecommerce-site-with-gatsby-contentful-and-snipcart">
                Building An Ecommerce Site with Gatsby Contentful and Snipcart
              </StyledLink>
            </li>
          </ul>
        </PopularPosts>
      </SideBar>
    </Container>
  );
};
