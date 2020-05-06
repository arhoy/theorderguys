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
      <Title>Talk To Our Order Experts</Title>
      <Blurb>
        <p>
          Let's discuss your online restaurant strategy or talk to us about your
          current business needs
        </p>
      </Blurb>
    </Container>
  );
};
