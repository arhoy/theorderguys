import React from 'react';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Blurb = styled.div`
  color: ${props => props.theme.colors.grey};
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
`;

export const Text1 = () => {
  return (
    <Blurb>
      We can help with finding and uploading hundreds of even thousands of
      products to your Shopify store with <Link to="/#"> API uploads </Link>
    </Blurb>
  );
};

export const Text2 = () => {
  return (
    <Blurb>
      Tableau business dashboards built right. No more confusing dashboards or
      hours fiddling with spreadsheets and data entry
    </Blurb>
  );
};

export const Text3 = () => {
  return (
    <Blurb>
      Are you looking for amazing <Link to="/#"> designs </Link> for your next
      marketing campaigns or need some graphics for your website on a regular
      basis?
    </Blurb>
  );
};
