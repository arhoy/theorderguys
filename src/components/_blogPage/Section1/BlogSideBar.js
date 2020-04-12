import React from 'react';
import styled from '@emotion/styled';

import { MailChimpFooter } from '../../layouts/Footer/FooterComponents/MailChimpFooter';

const Container = styled.div`
  margin: 1rem auto;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    margin: 2rem;
`;

const PopularPosts = styled.div`
  & ul {
    margin: 0 2rem;
  }
`;

export const BlogSideBar = () => {
  return (
    <Container>
      <MailChimpFooter />
      <PopularPosts>
        <h3>Featured Posts</h3>
        <ul>
          <li>Could Covid Stop or Save the Economy</li>
          <li>Digital Marketing Efforts in A Covid Area</li>
          <li>Now is a great time to get a website up</li>
        </ul>
      </PopularPosts>
    </Container>
  );
};
