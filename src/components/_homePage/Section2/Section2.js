import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard1 from '../../reusableStyles/cards/netlifyCards/NetlifyCard1';

export const Section2 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard1
        title={`Get Customers to Order Online in Real-Time`}
        blurb={`At The Order Guys we partner with local restaurants to deliver real-time orders for pickup. No commission and unlimited orders on your website and Facebook page`}
        link={`Read More`}
        linkURL="/services"
        picture={fluid}
      />
    </Section>
  );
};
