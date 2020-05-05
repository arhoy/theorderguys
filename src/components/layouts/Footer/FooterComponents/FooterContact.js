import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-right: 2rem;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
`;

const TelephoneLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const LinkDescription = styled.p`
  color: inherit;
`;

export const FooterContact = () => {
  return (
    <Container>
      <LinkHeaders>Contact Us</LinkHeaders>
      <LinkDescription>theorderguys.com@gmail.com</LinkDescription>
      <TelephoneLink href="tel:587-501-7726">587.501.7726</TelephoneLink>
    </Container>
  );
};
