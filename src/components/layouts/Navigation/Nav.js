/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { MobileMenu } from './MobileMenu';
import NoStyleLink from '../../Links/NoStyleLink';
import { BurgerSVG3 } from './Burger3';
import { DropDownMenuClick } from '../../Links/DropDownMenus/DropDownMenuClick';
import logowhite from '../../../../images/svg/logowhite.svg';

const Header = styled.header`
  position: relative;
  padding: 3rem 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  text-transform: uppercase;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & img {
    width: 150px;

    justify-content: center;
    @media (max-width: 600px) {
      display: none;
    }
  }
  & ${LogoLink} {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 2.8rem;
    letter-spacing: 8px;
    color: ${props => props.theme.colors.white};
    @media (max-width: 600px) {
      font-size: 2rem;
      letter-spacing: 4px;
    }
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomLink = styled(NoStyleLink)`
  overflow: hidden;
  display: inline;
  position: relative;

  font-size: 2rem;
  color: ${props => props.theme.colors.white};
  margin: 1rem;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0px;
    background: ${props => props.theme.colors.white};
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

const BurgerIconContainer = styled.div`
  z-index: 100;
  cursor: pointer;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <Logo>
            <LogoLink to="/">The Order guys</LogoLink>
            <img src={logowhite} alt="logo the order guys" />
          </Logo>

          <MenuLinks>
            <CustomLink className="underline" to="/online-ordering">
              Ordering
            </CustomLink>
            <DropDownMenuClick
              title={'Services'}
              className="underline"
              to="/services"
            >
              <div className="dropdown-content">
                <h6>Our Services</h6>
                <NoStyleLink to="/online-ordering">Online Ordering</NoStyleLink>
                <NoStyleLink to="/restaurant-website-demos">
                  Websites
                </NoStyleLink>
                <NoStyleLink to="/services">All Services</NoStyleLink>

                <div className="bottomMargin" />
              </div>
            </DropDownMenuClick>

            <DropDownMenuClick
              title={'More'}
              className="underline"
              to="/services"
            >
              <div className="dropdown-content">
                <h6>Explore</h6>
                <NoStyleLink to="/about">About Us</NoStyleLink>
                <NoStyleLink to="/blog">Blog</NoStyleLink>

                <div className="bottomMargin" />
              </div>
            </DropDownMenuClick>

            <CustomLink
              style={{ transform: 'translateY(1px)' }}
              className="underline"
              to="/contact"
            >
              Contact
            </CustomLink>
          </MenuLinks>
          <BurgerIconContainer onClick={mobileMenuHandler}>
            <BurgerSVG3 open={mobileMenuOpen.toString()} />
          </BurgerIconContainer>
        </HeaderTop>
      </Header>
      {mobileMenuOpen && <MobileMenu />}
    </>
  );
};

export default Nav;
