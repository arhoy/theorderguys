import React from 'react';

import { H2 } from '../../../reusableStyles/typography/Typography';
import { Container } from './Styles';
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
