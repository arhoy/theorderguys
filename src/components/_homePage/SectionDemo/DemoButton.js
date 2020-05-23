import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';

const CustomButton = styled(ButtonSweepToRight)`
  border-radius: 4px;
  padding: 1.4rem 2.5rem;
  background: white;
  color: ${props => props.theme.colors.black};
`;

export const DemoButton = () => {
  return (
    <CustomButton
      className="demo-order-button"
      data-glf-cuid="ab1f1475-0630-46d9-acad-01ad52fa87d4"
      data-glf-ruid="1a3856ff-681d-4ef4-80a3-6727617d5cbb"
    >
      View Demo Menu
    </CustomButton>
  );
};
