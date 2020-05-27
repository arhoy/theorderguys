import React from 'react';
import styled from '@emotion/styled';
import { H2 } from '../../../reusableStyles/typography/Typography';

const Container = styled.div`
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
    font-size:2.4rem;
    max-width:40rem;
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

export const StandardPlan = () => {
  return (
    <Container>
      <H2>What We Offer</H2>
      <div className="infosection infosection-1">
        <h3> Here is what we offer</h3>
        <ul>
          <li>
            <span>Real Time Restaurant Ordering for unlimited orders</span>
          </li>
          <li>
            {' '}
            <span>Online menu creation and maintenance</span>{' '}
          </li>
          <li>
            {' '}
            <span>Website and Facebook Integration</span>
          </li>
        </ul>
      </div>

      <div className="infosection infosection-2">
        <h3> In Addition we will</h3>
        <ul>
          <li>
            <span>
              Create test orders and explain how you can take orders through the
              app
            </span>
          </li>
          <li>
            <span>
              Create a seperate email for you take all your restaurant orders
            </span>
          </li>
          <li>
            <span>Offer free website advice and consultation anytime</span>
          </li>
        </ul>
      </div>

      <div className="infosection infosection-1">
        <h3>What We Will Need From You To Get Started Right Away</h3>
        <ul>
          <li>
            <span>
              Your website login and password to place the code on your site.
            </span>
          </li>

          <li>
            <span>Sign a simple contractor form to get started.</span>
          </li>

          <li>
            <span>
              No contracts or initiation fees. Our pricing is transparent.
            </span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
