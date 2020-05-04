// import React from 'react';

// import styled from '@emotion/styled';

// import NoStyleLink from './NoStyleLink';

// const Container = styled.div`
//   z-index: 100;
//   color: ${props => props.theme.colors.white};
//   position: relative;
//   display: inline-block;
//   transform: translate(0, 1px);

//   &:hover {
//     & .dropdown-content {
//       display: block;
//     }
//   }

//   & .dropdown-content {
//     border-radius: 1rem;
//     background: ${props => props.theme.colors.red};
//     -webkit-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
//     -moz-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
//     box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
//     & h6 {
//       color: ${props => props.theme.colors.grey};
//       font-weight: 500;
//       margin:1rem 2rem;
//       font-size: 1.3rem;
//       text-transform:uppercase;
//     }
//     & .bottomMargin {
//       padding: width:100%;
//       height:10px;
//     }
//     display: none;
//     position: absolute;
//     min-width: 160px;
//     z-index: 1;
//     & a {
//       padding: 12px 16px;
//       text-decoration: none;
//       display: block;
//       &:hover {
//         background: rgba(236, 234, 234, 0.863);
//       }
//     }

//   }

//   }
// `;

// const Button = styled.div`
//   color: inherit;
//   transform: translateY(-1px);
//   font-size: 2rem;
//   text-decoration: none;
//   outline: none;
//   border: none;
//   background: transparent;
//   position: relative;
//   &:hover {
//     text-decoration: none;
//     color: inherit;
//   }
//   &:after {
//     margin-left: 5px;
//     font-size: 1.3rem;
//     transform: translate(-3px, 0px);
//     display: inline-block;
//   }
// `;

// export const DropDownHover = () => {
//   return (
//     <Container>
//       <Button>Services</Button>
//       <div className="dropdown-content">
//         <h6>Our Services</h6>

//         <NoStyleLink to="/services">All Services</NoStyleLink>
//         <NoStyleLink to="/websites">Websites</NoStyleLink>

//         <div className="bottomMargin" />
//       </div>
//     </Container>
//   );
// };
