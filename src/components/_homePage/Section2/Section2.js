import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard1 from '../../reusableStyles/cards/netlifyCards/NetlifyCard1';

export const Section2 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard1
        title={`Delivering results for companies large and small`}
        blurb={`No matter how big or small your company is, we treat all our clients with the same of level of quality craftsmanship and customer service.`}
        link={`Read More`}
        linkURL="/services"
        picture={fluid}
      />
    </Section>
  );
};
