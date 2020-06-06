import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: max(100vw, 800px);
   z-index:10;
  fill: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  top:0px;




  color: ${props => props.theme.colors.white};
  }
`;

const BackgroundSvg = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 60.72"
  >
    <path
      d="M0,176.79l26.7,4.64c26.6,4.63,80.3,13.89,133.3,10.8,53.3-3,107-18.62,160-15.44,53.3,3.19,107,24.61,160,30.9,53.3,6.16,107-3.1,160-9.27,53.3-6.28,107-9.18,160-15.46,53.3-6.17,107-15.43,160-15.43,53.3,0,107,9.26,160,15.43,53.3,6.28,107,9.18,160,10.83,53.3,1.53,107,1.53,133,1.53h27V149H0Z"
      transform="translate(0 -149)"
    />
  </SVG>
);

export default BackgroundSvg;
