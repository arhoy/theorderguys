import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: max(100vw, 800px);
   z-index:10;
  fill: ${props => props.theme.colors.lightgrey};
  position: absolute;
  left: 0;
  bottom:0px;

  color: ${props => props.theme.colors.white};
  }
`;

const BackgroundSvg = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 113.51"
  >
    <path
      d="M0,282.16l26.7,2.09c26.6,2.25,80.3,6.19,133.3,8.44,53.3,2.08,107,2.08,160-6.31,53.3-8.55,107-25.11,160-33.66,53.3-8.4,107-8.4,160,2.13,53.3,10.36,107,31.65,160,25.22,53.3-6.18,107-40.08,160-46.27,53.3-6.42,107,14.86,160,23.14,53.3,8.27,107,4.33,160-6.31,53.3-10.64,107-27.19,133-35.75l27-8.39V320H0Z"
      transform="translate(0 -206.49)"
    />
  </SVG>
);

export default BackgroundSvg;
