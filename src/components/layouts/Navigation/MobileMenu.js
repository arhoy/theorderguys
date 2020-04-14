import React from 'react';

import styled from '@emotion/styled';
import { MdPermPhoneMsg } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import NoStyleLink from '../../Links/NoStyleLink';
import { A } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: linear-gradient(
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryLight}
  );
  z-index: 99;

  color: ${props => props.theme.colors.white};
`;

const MenuLinks = styled.ul`
  margin-top: 100px;
  list-style: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Link = styled(NoStyleLink)`
text-transform:uppercase;
  color: inherit;
  font-size: 2.4rem;
  margin: 0.5rem 0;
  font-weight;
  &:hover {
      border-bottom:2px solid #fff;
  }
`;

const Blurb = styled.div`
  & .light {
    text-align: center;
    font-weight: 300;
    opacity: 0.8;
    margin: 2rem 0;
    font-style: italic;
  }
  & address {
    font-style: normal;
    text-align: center;
  }
  & ${A} {
    font-style: normal;
    text-align: center;
    color: inherit;
  }
  & .address,
  .phone {
    display: flex;
    max-width: 30rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

const PhoneIcon = styled(MdPermPhoneMsg)`
  color: 'white';
  font-size: 2rem;
  margin-right: 10px;
`;

const AddressIcon = styled(FaMapMarkerAlt)`
  color: 'white';
  font-size: 2rem;
  margin-right: 10px;
`;

export const MobileMenu = () => {
  return (
    <Container>
      <MenuLinks>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </MenuLinks>
      <Blurb>
        <p className="light"> Blazingly Fast Cusom Websites</p>
        <p className="light">We've managed millions in ad spend</p>
        <div className="address">
          <AddressIcon /> <address> Edmonton AB, CANADA </address>
        </div>

        <div className="phone">
          <PhoneIcon /> <A href="tel:587-501-7726">587 501 7726</A>
        </div>
      </Blurb>
    </Container>
  );
};
