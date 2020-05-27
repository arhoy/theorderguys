import React from 'react';
import styled from '@emotion/styled';
import { H2 } from '../../../reusableStyles/typography/Typography';

const Container = styled.div`
& p {
    color: white;
    font-size:1.4rem;
}
  & h2 {
      color:white;
      text-transform:uppercase;
      text-align:center;
  }
  padding: 4rem 3rem;
  border-radius: 2rem;
  background: linear-gradient(#303030, black);
  @media (max-width: 600px) {
    padding: 4rem 1rem;
  }

& .infosection {
  display: flex;
  padding: 1rem;

  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  &.infosection-1 {

  }
  &.infosection-2 {
    flex-direction: row-reverse;
  }

  h3 {
    color: white;
    padding: 2rem;
    font-size:2.3rem;
    & .price {
      font-size:3rem;
    }
  }

  @media (max-width: 600px) {
    margin: 0rem 1rem;
  }
  & ul {
    list-style: none;
   
  }
  & li {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;


    & span {
      background: white;
      padding: 6px 15px;
      width: fit-content;
      border-radius: 6px;
      max-width: 90rem;
      & h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      & .italicsbold {
        padding: 0;
        font-weight: bold;
        font-style: italic;
      }
    }
  }
`;

export const SetupCost2 = () => {
  return (
    <Container>
      <H2>Setup Cost</H2>
      <div className="infosection infosection-1">
        <h3>Free Setup Commission Plan</h3>
        <ul>
          <li>
            <span>
              Includes running and setting up Facebook & Instagram Ads*
            </span>
          </li>
          <li>
            <span>Includes website and facebook page integration</span>
          </li>

          <li>
            <span>
              Includes using photos provided by restaurant for menu item
            </span>
          </li>

          <li>
            <span>Includes consultation and instruction on how it works</span>
          </li>
          <li>
            <span>Includes sending test orders to restaurant</span>
          </li>
        </ul>
      </div>

      <p>
        {' '}
        *Menu must be provided by restaurant. For restaurant menus with under
        100 items. For restaurants with complex menus or menus with over 100
        items please contact for direct setup quote{' '}
      </p>
      <br />
      <p> *Minimum monthly ad spend of $150 needed for setup.</p>
    </Container>
  );
};
