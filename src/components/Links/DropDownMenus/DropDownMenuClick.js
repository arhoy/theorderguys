import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import NoStyleLink from '../NoStyleLink';
import OutsideAlerter from '../../../utils/OutsideAlerter';

const Container = styled.div`
  z-index: 100;
  color: ${props => props.theme.colors.white};
  position: relative;
  display: inline-block;
  transform: translate(0, 1px);

  & .dropdown-content {
    margin-top:1rem;
    border-radius: 1rem;
    background: white;

    box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
    & h6 {
      color: ${props => props.theme.colors.grey};
      font-weight: 500;
      margin:1rem 2rem;
      font-size: 1.3rem;
      text-transform:uppercase;
    }
    & .demo-order-button {
      color:black;
    }
    & .bottomMargin {
      padding: width:100%;
      height:10px;
    }
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    min-width: 160px;
    z-index: 1;
    & ${NoStyleLink}, .demo-order-button {
      padding: 12px 16px;
      cursor:pointer;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: ${props => props.theme.colors.lightgrey};
      }
    }

  }

  }
`;

const Button = styled.div`
  overflow: hidden;
  display: inline;
  position: relative;
  cursor: pointer;
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

export const DropDownMenuClick = ({ title, children }) => {
  const [menu, setmenu] = useState(false);
  const menuHandler = () => {
    setmenu(prev => !prev);
  };

  return (
    <Container active={menu}>
      <Button onClick={menuHandler}>{title}</Button>
      {menu && (
        <OutsideAlerter menuhandler={menuHandler}>{children}</OutsideAlerter>
      )}
    </Container>
  );
};
