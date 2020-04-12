import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.oneThousand};
  margin: 0 auto;
`;

const Title = styled(H1)`
  color: inherit;
`;

const Blurb = styled.div`
  opacity: 0.9;
  max-width: 50rem;
  & p {
  }
`;

export const ContactBlurb = () => {
  return (
    <Container>
      <Title>Our Blog</Title>
      <Blurb>
        <p>
          Our blog covers a range of topics for developers, entreprenurs, web
          enthusiasts and small business owners. We are constantly looking to
          expand our curated content. If you would like to write for us please
          give us a shout out!
        </p>
      </Blurb>
    </Container>
  );
};
