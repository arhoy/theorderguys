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

export const OurExtras1 = () => {
  return (
    <Container>
      <H2>Oh That's Nice!</H2>
      <div className="infosection infosection-1">
        <h3>Complimentary Extra Features</h3>
        <ul>
          <li>
            <span>Google My Business Optimization and Posts</span>
          </li>

          <li>
            <span>Free website or online business consultation</span>
          </li>
        </ul>
      </div>
      <br />

      <p>
        {' '}
        *Google By Business Optimization is a key component to local SEO. We
        will make a couple changes each month as we see fit to ensure that your
        local SEO gets optimized.
      </p>
      <br />
      <p>
        {' '}
        *If you have questions regarding how to get more website visitors,
        increase your online orders, run facebook ads or optimize your website,
        we will be happy to discuss with you. We can give suggestions but
        implimenting them will be an additional cost
      </p>
    </Container>
  );
};
