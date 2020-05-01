import React from 'react';

import styled from '@emotion/styled';
import Layout from '../../components/layouts/Layout';
import Helmet from 'react-helmet';

const Section = styled.div`
  margin: 2rem 0;
`;

const Container = styled.div`
  & h1 {
    text-align: center;
    font-size: 4rem;
  }

  & .demo-restaurant {
    padding: 2rem 0;
    margin: 2rem;
    background: ${props => props.theme.colors.red};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
      margin: 2rem 0;
    }
    & h1 {
      color: ${props => props.theme.colors.white};
      opacity: 0.9;
    }

    & .demo-order-button {
      cursor: pointer;
      display: inline-block;
      background: ${props => props.theme.colors.primary};
      padding: 1rem 2rem;
      color: white;
      border-radius: 1rem;
    }
  }

  & .infosection {
    background: ${props => props.theme.colors.black};
    h2 {
      color: white;
    }
    padding: 2rem;
    margin: 2rem;
    @media (max-width: 600px) {
      margin: 2rem 0;
    }
    & ul {
      list-style: none;
      margin: 2rem;
    }
    & li {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      @media (min-width: 600px) {
        &:hover {
          transform: translateX(0.5rem);
          cursor: pointer;
        }
      }

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
  }
`;

const RestaurantWebsite = () => {
  return (
    <Layout>
      <Helmet>
        <script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          defer
          async
        ></script>
      </Helmet>
      <Section>
        <Container>
          <div className="demo-restaurant">
            <h1>
              Try Out Our <br /> Demo Restaurant
            </h1>
            <h2> Sushi Code</h2>
            <span
              className="demo-order-button"
              data-glf-cuid="ab1f1475-0630-46d9-acad-01ad52fa87d4"
              data-glf-ruid="1a3856ff-681d-4ef4-80a3-6727617d5cbb"
            >
              Open Menu & Order
            </span>
          </div>
          <div className="infosection infosection2">
            <h2> Here is what we offer for restaurants and cafes</h2>
            <ul>
              <li>
                <span>
                  Custom coded websites hand crafted and designed from the
                  ground up
                </span>
              </li>
              <li>
                {' '}
                <span>
                  Website design and branding specifically for restuarants
                </span>
              </li>
              <li>
                {' '}
                <span>Custom logos and animation</span>{' '}
              </li>
              <li>
                {' '}
                <span>
                  Online Real Time App Ordering Integration with your website
                </span>{' '}
              </li>
              <li>
                {' '}
                <span>unlimited orders with zero order fees.</span>{' '}
              </li>
            </ul>
          </div>
          <div className="infosection">
            <h2> Premium Online Ordering System</h2>
            <ul>
              <li>
                <span>
                  <h4>Turn our website into an online ordering machine</h4>
                  Use our customizable tailored ordering technology to drive
                  your online orders and get them straight to your phone in real
                  time. Regardless of how much your business grows you can lock
                  in{' '}
                  <span className="italicsbold">
                    unlimited orders with zero order fees.
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="infosection">
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
                  Customers will be able to order straight from your website
                  with the premium* option to pay on your site as well before
                  placing on order
                </span>
              </li>
              <li>
                <span>
                  Once an order is placed on the website, both you and the
                  customer will get instant feedback and an alert to you will be
                  made on your restaurant phone or tablet.
                </span>
              </li>
              <li>
                <span>
                  You will be able to see all the details of your order and the
                  expected pick up time ( we can customize minimum pick up
                  times, ie. ½ hour in advance)
                </span>
              </li>
            </ul>
          </div>
          <div className="infosection">
            <h2>
              {' '}
              No Fancy Ordering Device Needed. <br />
              Just your regular phone or tablet will do
            </h2>
            <ul>
              <li>
                <span>
                  We will send you a code which will install app onto your
                  device and you will be ready to go
                </span>
              </li>
              <li>
                <span>
                  We will set up the menu on your website so customers can place
                  the order. The menu can be the current restaurant menu item or
                  whatever you decide.
                </span>
              </li>
            </ul>
          </div>
          <div className="infosection">
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
                <span>
                  $ 100 menu setup fee with website and app integration
                </span>
              </li>
              <li>
                <span>No contracts or initiation fees</span>
              </li>
            </ul>
          </div>
          <div className="infosection">
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
        </Container>
      </Section>
    </Layout>
  );
};

export default RestaurantWebsite;
