import React from 'react';

import { H2 } from '../../../reusableStyles/typography/Typography';

import { Container } from './Styles';

export const SetupCost1 = () => {
  return (
    <Container>
      <H2>Setup Cost</H2>
      <div className="infosection infosection-1">
        <h3>
          Limited Time <span className="price"> $99</span> Setup Fee for
          restaurants*
        </h3>
        <ul>
          <li>
            <span>Includes website and facebook page integration</span>
          </li>

          <li>
            <span>
              Includes using photos provided by restaurant for menu item
            </span>
          </li>

          <li>
            <span>Includes consultation and instruction on how it works</span>
          </li>
          <li>
            <span>Includes sending test orders to restaurant</span>
          </li>
        </ul>
      </div>

      <p>
        {' '}
        *Menu must be provided by restaurant. For restaurant menus with under
        100 items. For restaurants with complex menus or menus with over 100
        items please contact for direct setup quote{' '}
      </p>
    </Container>
  );
};
