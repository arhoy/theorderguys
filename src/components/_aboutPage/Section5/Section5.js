import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard2 from '../../reusableStyles/cards/netlifyCards/NetlifyCard2';

export const Section5 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard2
        title={`Our Blog`}
        subtitle={`New Content Every Week`}
        blurb={`Whether you are developer, small business owner or entreprenuer we just might have something of interest to you`}
        link={`Read More`}
        linkURL="/blog"
        picture={fluid}
      />
    </Section>
  );
};
