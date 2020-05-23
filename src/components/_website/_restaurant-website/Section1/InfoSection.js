import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`

  
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

  h2 {
    color: white;
    padding: 2rem;
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

export const InfoSection = () => {
  return (
    <Container>
      <div className="infosection infosection-1">
        <h2> Here is what we offer for restaurants and cafes</h2>
        <ul>
          <li>
            <span>One to one consultation</span>
          </li>
          <li>
            {' '}
            <span>Manage and training for on ordering app</span>
          </li>
          <li>
            {' '}
            <span>
              Helping choose ordering app that is best for the restaurant
            </span>{' '}
          </li>
          <li>
            {' '}
            <span>
              Setting up restaurant menu from excel file or from another website
            </span>{' '}
          </li>
          <li>
            {' '}
            <span>Website and fb integration depending on the site</span>{' '}
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h2> Premium Online Ordering System</h2>
        <ul>
          <li>
            <span>
              <h4>Turn our website into an online ordering machine</h4>
              Use our customizable tailored ordering technology to drive your
              online orders and get them straight to your phone in real time.
              Regardless of how much your business grows you can lock in{' '}
              <span className="italicsbold">
                unlimited orders with zero order fees.
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-1">
        <h2> How It Works</h2>
        <ul>
          <li>
            <span>
              We will build out an online custom menu based on the items you
              currently have in your restaurant
            </span>
          </li>
          <li>
            <span>
              Customers will be able to order straight from your website with
              the premium* option to pay on your site as well before placing on
              order
            </span>
          </li>
          <li>
            <span>
              Once an order is placed on the website, both you and the customer
              will get instant feedback and an alert to you will be made on your
              restaurant phone or tablet.
            </span>
          </li>
          <li>
            <span>
              You will be able to see all the details of your order and the
              expected pick up time ( we can customize minimum pick up times,
              ie. ½ hour in advance)
            </span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h2>
          {' '}
          No Fancy Ordering Device Needed. <br />
          Just your regular phone or tablet will do
        </h2>
        <ul>
          <li>
            <span>
              We will send you a code which will install app onto your device
              and you will be ready to go
            </span>
          </li>
          <li>
            <span>
              We will set up the menu on your website so customers can place the
              order. The menu can be the current restaurant menu item or
              whatever you decide.
            </span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-1">
        <h2>Our Standard Pricing</h2>
        <ul>
          <li>
            <span>
              customer pays for online order during pickup or phone callback
            </span>
          </li>
          <li>
            <span>
              $29 / month unlimited orders no fees + 100% support and menu
              upgrades
            </span>
          </li>

          <li>
            <span>$ 100 menu setup fee with website and app integration</span>
          </li>
          <li>
            <span>No contracts or initiation fees</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-2">
        <h2>Our Premium Pricing</h2>
        <ul>
          <li>
            <span>
              customers can or must pay online before a online order is made
            </span>
          </li>

          <li>
            <span>$79 / month unlimited orders</span>
          </li>

          <li>
            <span>
              Only merchant/banking transaction fees (ie. Stripe ~2.9% per
              transaction)
            </span>
          </li>
          <li>
            <span>Set up and get paid with Stripe or Paypal easily</span>
          </li>
        </ul>
      </div>
      <div className="infosection infosection-1">
        <h2>What We Will Need From You To Get Started Right Away</h2>
        <ul>
          <li>
            <span>
              Your website login and password to place the code on your site
            </span>
          </li>

          <li>
            <span>Sign a simple developer contractor form to get started</span>
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
