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

export const Features1 = () => {
  return (
    <Container>
      <H2>Features</H2>
      <div className="infosection infosection-1">
        <h3>Ordering On Your Site</h3>
        <ul>
          <li>
            <span>
              All orders go through your own website, not third party websites
            </span>
          </li>

          <li>
            <span>Reduce your pickup / takeout order fees</span>
          </li>

          <li>
            <span>
              Your restaurant phone/tablet becomes an ordering POS system
            </span>
          </li>

          <li>
            <span>Real-Time customer order confirmation</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h3>Reporting Dashboard</h3>
        <ul>
          <li>
            <span>
              Reporting dashboard shows orders and revenue placed via website
            </span>
          </li>

          <li>
            <span>Custom login dashboard</span>
          </li>

          <li>
            <span>Conversion and analytics funnel reports</span>
          </li>
          <li>
            <span>All customer orders go to your email and phone app</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-1">
        <h3>Sleak Modern Online Menu</h3>
        <ul>
          <li>
            <span>Versatile and Customizable Menu</span>
          </li>

          <li>
            <span>Mobile friendly and optimized</span>
          </li>

          <li>
            <span>Easy to manage, update and maintain</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
