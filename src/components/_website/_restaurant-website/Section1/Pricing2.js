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

export const Pricing2 = () => {
  return (
    <Container>
      <H2>Our Pricing</H2>
      <div className="infosection infosection-1">
        <h3>Commission Plan</h3>
        <ul>
          <li>
            <span>7% Commission</span>
          </li>

          <li>
            <span>No Contracts or Cancelation Fees</span>
          </li>

          <li>
            <span>No Monthly Fee</span>
          </li>

          <li>
            <span>Free Setup</span>
          </li>
        </ul>
      </div>

      <p className="footnotes">
        *Restaurant must have website and facebook page. Must be on commission
        plan for at least one month. If switching to No Commission plan, menu
        set up fees will apply.
      </p>
      <br />
      <p className="footnotes">
        *A 7% commission does include merchant transaction fees.
      </p>
    </Container>
  );
};
