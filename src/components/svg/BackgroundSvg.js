import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  z-index: -1;
  width: 100vw;
  &.fullWidth {
    @media (max-width: ${props => props.theme.screenSize.twoThousand}) {
      display: none;
    }
  }
  &.mobile {
    @media (min-width: ${props => props.theme.screenSize.twoThousand}) {
      display: none;
    }
  }
`;

const BackgroundSvg = () => (
  <>
    <SVG
      className="fullWidth"
      width="100vw"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024.75 351.47"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="rgb(22, 61, 120)"
            d="M11.77,350.47c.79-.08,1.59-.19,2.38-.26h.1l.13,0c1.83-.34,3.67-.6,5.49-.95a168.36,168.36,0,0,0,23.86-6.52c3.57-1.24,7.09-2.6,10.58-4,.2-.11,3.64-1.6,4.12-1.81,1.74-.79,3.46-1.6,5.18-2.42,15.27-7.28,29.89-15.82,44.37-24.53,29-17.41,58.35-37.08,91-47.08,34.33-10.51,72.55-12.36,108.12-8.69,20.38,2.11,40.05,7.12,59.87,12.1,20.39,5.13,41.13,8.4,61.55,13.41s40.34,11.58,60.89,15.68c5.25,1.05,10.52,2,15.8,2.78q3.46.53,6.93,1c.76.1,2.31.31,4.42.57,10.83,1.37,21.71,2.35,32.53,3.8,21.33,2.87,41.05,5.95,62.82,7.68,10.48.83,21,1.34,31.51,1.36,5.27,0,10.54-.08,15.8-.54,1.21-.1,2.41-.23,3.61-.36l1.47-.21q2.75-.44,5.48-1a160.64,160.64,0,0,0,25.08-7.19l4-1.56,1.46-.6q2.38-1,4.74-2.13c3.91-1.81,7.77-3.74,11.58-5.74,15.36-8.09,30-17.51,44.66-26.74C796,244.74,832.14,224.89,865,200.33c7.61-5.69,13.86-10.64,21.82-17,7.6-6,15.17-12.09,22.82-18.05,16.35-12.75,33-24.84,50.54-35.94,20.51-13,42.33-23.51,64.23-33.87V.38H.38V351.09C4.18,351,8,350.84,11.77,350.47Z"
          />
        </g>
      </g>
    </SVG>
    <SVG
      className="mobile"
      width="2000"
      height="35rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024.75 351.47"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="rgb(22, 61, 120)"
            d="M11.77,350.47c.79-.08,1.59-.19,2.38-.26h.1l.13,0c1.83-.34,3.67-.6,5.49-.95a168.36,168.36,0,0,0,23.86-6.52c3.57-1.24,7.09-2.6,10.58-4,.2-.11,3.64-1.6,4.12-1.81,1.74-.79,3.46-1.6,5.18-2.42,15.27-7.28,29.89-15.82,44.37-24.53,29-17.41,58.35-37.08,91-47.08,34.33-10.51,72.55-12.36,108.12-8.69,20.38,2.11,40.05,7.12,59.87,12.1,20.39,5.13,41.13,8.4,61.55,13.41s40.34,11.58,60.89,15.68c5.25,1.05,10.52,2,15.8,2.78q3.46.53,6.93,1c.76.1,2.31.31,4.42.57,10.83,1.37,21.71,2.35,32.53,3.8,21.33,2.87,41.05,5.95,62.82,7.68,10.48.83,21,1.34,31.51,1.36,5.27,0,10.54-.08,15.8-.54,1.21-.1,2.41-.23,3.61-.36l1.47-.21q2.75-.44,5.48-1a160.64,160.64,0,0,0,25.08-7.19l4-1.56,1.46-.6q2.38-1,4.74-2.13c3.91-1.81,7.77-3.74,11.58-5.74,15.36-8.09,30-17.51,44.66-26.74C796,244.74,832.14,224.89,865,200.33c7.61-5.69,13.86-10.64,21.82-17,7.6-6,15.17-12.09,22.82-18.05,16.35-12.75,33-24.84,50.54-35.94,20.51-13,42.33-23.51,64.23-33.87V.38H.38V351.09C4.18,351,8,350.84,11.77,350.47Z"
          />
        </g>
      </g>
    </SVG>
  </>
);

export default BackgroundSvg;
