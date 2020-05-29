import React from 'react';
import styled from '@emotion/styled';
import { H2 } from '../../../reusableStyles/typography/Typography';

import { Container } from './Styles';

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
