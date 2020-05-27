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

export const Benefits1 = () => {
  return (
    <Container>
      <H2>Benefits</H2>
      <div className="infosection infosection-1">
        <h3>Restaurant Owner Benefits</h3>
        <ul>
          <li>
            <span>Save money from commissions</span>
          </li>

          <li>
            <span>
              Instant notifications to both customer and restaurant staff
            </span>
          </li>

          <li>
            <span>Increase online orders and online presence</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h3>Customer Benefits</h3>
        <ul>
          <li>
            <span>No more waiting for busy landlines</span>
          </li>

          <li>
            <span>Can order online via phone without calling</span>
          </li>
          <li>
            <span>Can view full menu and click to order</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
