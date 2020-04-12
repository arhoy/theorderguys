import React from 'react';

import { Card } from './Card';

export const Card1 = ({ fluid, children }) => {
  return (
    <Card
      title={`Shopify Products`}
      subtitle={'Looking to sell more products?'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};

export const Card2 = ({ fluid, children }) => {
  return (
    <Card
      title={`Dashboard & Notebooks`}
      subtitle={'Dashboards and reporting done right'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};

export const Card3 = ({ fluid, children }) => {
  return (
    <Card
      title={`Design On Demand`}
      subtitle={'Customized Design for your Business'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};
