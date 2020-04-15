import React from 'react';
import styles from '../../scss/hover-drop-downs/hoverdropdown1.module.scss';
import styled from '@emotion/styled';

import NoStyleLink from './NoStyleLink';

const Container = styled.div`
  z-index: 100;
  color: ${props => props.theme.colors.white};
`;

const Navlink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.primary};
  font-size: inherit;
`;

const Button = styled.div`
  color: inherit;
  transform: translateY(-1px);
  font-size: 2rem;
  text-decoration: none;
  outline: none;
  border: none;
  background: transparent;
  position: relative;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
  &:after {
    margin-left: 5px;
    font-size: 1.3rem;
    transform: translate(-3px, 0px);
    display: inline-block;
  }
`;

const DropDownContent = styled.div`

  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  -webkit-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
  -moz-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
  box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
  & h6 {
    color: ${props => props.theme.colors.grey};
    font-weight: 500;
    margin: 1rem 2rem;
    font-size: 1.7rem;
  }
  & .bottomMargin {
    padding: width:100%;
    height:10px;
  }
`;
const DropDownMenu1 = () => {
  return (
    <Container className={`${styles.dropdown}`}>
      <Button>Services</Button>
      <DropDownContent className={styles.dropdownContent}>
        <h6> Our Services</h6>

        <Navlink to="/services">All Services</Navlink>
        <Navlink to="/websites">Websites</Navlink>

        <div className="bottomMargin" />
      </DropDownContent>
    </Container>
  );
};

export default DropDownMenu1;
