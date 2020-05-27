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

export const Pricing1 = () => {
  return (
    <Container>
      <H2>Our Pricing</H2>
      <div className="infosection infosection-1">
        <h3>Standard Basic Plan I</h3>
        <ul>
          <li>
            <span>
              $29 / Month unlimited orders no fees + 100% support and menu
              edits*
            </span>
          </li>

          <li>
            <span>No Contracts or Cancelation Fees</span>
          </li>

          <li>
            <span>Customer pays during pickup</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h3>Our Premium Pricing</h3>
        <ul>
          <li>
            <span>$79 / month unlimited orders</span>
          </li>

          <li>
            <span>
              customers can or must pay online before a online order is made
            </span>
          </li>

          <li>
            <span>
              Merchant/banking transaction fees (ie. Stripe ~2.9% per
              transaction)
            </span>
          </li>
          <li>
            <span>Set up and get paid with Stripe or Paypal easily</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-1">
        <h3>What We Will Need From You To Get Started Right Away</h3>
        <ul>
          <li>
            <span>
              Your website login and password to place the code on your site
            </span>
          </li>

          <li>
            <span>User contract agreement</span>
          </li>

          <li>
            <span>
              No contracts or initiation fees. Our pricing is transparent.
            </span>
          </li>
        </ul>
      </div>

      <p className="footnotes">
        *Menu Edits includes small edits here, not entire menu overhauls.
        Examples including uploading a new photo, adding a new menu item or
        making pricing changes. We offer support for larger changes at nominal
        fees in case your restaurant menu changes
      </p>
      <br />
      <p className="footnotes">
        *Initial menu setup fees may vary.{`  `}Menu setup pricing starts at $99
      </p>
    </Container>
  );
};
