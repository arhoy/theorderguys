import React from 'react';
import styled from '@emotion/styled';
import { Blogs } from './Blogs';

import { BlogSideBar } from './BlogSideBar';

const Section = styled.div`
  background: ${props => props.theme.colors.lightgrey};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 4rem;

  max-width: ${props => props.theme.screenSize.twelveHundred};
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-columns: 1fr;
  }
  margin: 0 auto;
`;

export const Section1 = ({ posts }) => {
  return (
    <Section>
      <Container>
        <Blogs posts={posts} />
        <BlogSideBar />
      </Container>
    </Section>
  );
};
