import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Nav from './Navigation/Nav';
import { Footer } from './Footer/Footer';

// React Slick CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// real global scss styles
import '../../scss/main.scss';

const theme = {
  colors: {
    primary: '#9D1F1F',
    primaryDark: '#7A0F0F',
    primaryLight: '#EA4753',
    primaryLight2: '#817AC6',
    secondaryVeryLight: '#FCBFBF',
    secondary: '#FF6565',
    lightgrey: 'rgb(240,240,240)',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#fff',
    whiteTrans9: 'rgba(255,255,255,0.9)',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
    blackTransparent2: 'rgba(41, 43, 46, 0.7)',
    grey: `#7D8589`,
    darkgrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    redDark: '#D10000',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',

    green: 'rgb(31, 90, 46)',
  },
  pageWidth: {
    fixed: '800px',
    fixedHome: '900px',
  },
  screenSize: {
    mobileL: '600px',
    mobileVS: '300px',
    fourFifty: '450px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
    oneThousandAndFifty: '1050px',
    twelveHundred: '1200px',
    twoThousand: '2000px',
    fourTwentyFive: '425px',
  },
};

const Div = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

const Layout = ({ children, full, backgroundLayer }) => {
  const white = '#fff';
  const primaryColor = 'rgb(92, 52, 145)';

  return (
    <>
      <Helmet>
        <script src={withPrefix('replain.js')} type="text/javascript" />
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e958deb8977e95f"
        ></script>

        <script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          defer
          async
        ></script>
      </Helmet>
      <Global
        styles={css`
          * {
            box-sizing: border-box;

            margin: 0;
          }

          body,
          html {
            position: relative;
            background: ${white};

            width: 100%;
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${primaryColor};
            font-family: Poppins;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout>
              <Nav />
            </FullNavLayout>

            <MainFull>{children}</MainFull>
            <FullFooterLayout>
              <Footer />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <DivFixed>
            <NavLayout>
              <Nav />
            </NavLayout>

            <Main>{children}</Main>
            <FooterLayout>
              <Footer />
            </FooterLayout>
          </DivFixed>
        </ThemeProvider>
      )}
    </>
  );
};
Layout.propTypes = {
  full: PropTypes.bool,
};
Layout.defaultProps = {
  full: true,
};

export default Layout;
