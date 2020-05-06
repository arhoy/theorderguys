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
      <Title>Weekly Content</Title>
      <Blurb>
        <p>
          This blog covers a range of local restaurant reviews and DIY website
          tips for restaurant owners from website functionalty to SEO and
          marketing.
        </p>
      </Blurb>
    </Container>
  );
};
