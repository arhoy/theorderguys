import React from 'react';

import { H2 } from '../../../reusableStyles/typography/Typography';

import { Container } from './Styles';

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
