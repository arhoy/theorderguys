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
              <StyledLink to="/blog/">How to Order on Facebook</StyledLink>
            </li>
            <li>
              <StyledLink to="/blog/">
                How to do Google Ads for your Business
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog/">
                How to do SEO for your restaurant
              </StyledLink>
            </li>
          </ul>
        </PopularPosts>
      </SideBar>
    </Container>
  );
};
