import React from 'react';

import { H2 } from '../../../reusableStyles/typography/Typography';

import { Container } from './Styles';

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
