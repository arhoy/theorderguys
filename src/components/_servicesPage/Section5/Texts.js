import React from 'react';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Blurb = styled.div`
  color: ${props => props.theme.colors.grey};
  & span {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
`;

export const Text1 = () => {
  return (
    <Blurb>
      Any good investor will tell you to put your money to work. We want to do
      the same for your website and put it to work! Having a high quality
      website and online strategy provides additional marketing channels to your
      business and often serves as the <span>first customer touch point</span>
    </Blurb>
  );
};

export const Text2 = () => {
  return (
    <Blurb>
      Your online strategy is an investment in your business both short and long
      term. We want to partner with you so you can focus on your core business
      and unique value proposition. As a small business, you might often want to
      try and manage everything yourself but often that leads to neglicting some
      of the high potential marketing channels or website needs. We want you to
      leverage our expertise so you can focus 100% on the business you are good
      at.
    </Blurb>
  );
};

export const Text3 = () => {
  return (
    <Blurb>
      SSL Certificates and installs make your site secure and SEO friendly. No
      more "website not secure" warnings. Build trust for those browsing your
      website for only $39/year plus we will install it for you unlike
      providers.
    </Blurb>
  );
};

export const Text4 = () => {
  return (
    <Blurb>
      Do you have a WordPress site with lots of pages that you want to move to
      another domain? We will backup and migrate all your pages, images and
      content from your old wordpress theme to your new one and ensure it aligns
      with the style of your new website.
    </Blurb>
  );
};
