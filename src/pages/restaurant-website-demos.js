import React from 'react';

import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';

import SEO from '../hooks/SEO';
import { Section0 } from '../components/_restaurantWebsiteDemos/Section0/Section0';
import { Section1 } from '../components/_restaurantWebsiteDemos/Section1/Section1';

const RestaurantWebsiteDemos = () => {
  return (
    <Layout>
      <SEO
        title="The Order Guys online ordering platform, services and setup"
        description="We offer 0% commmision online ordering services and setup for restaurant businesses in Edmonton Alberta"
        path="/online-ordering"
      />
      <Section1 />
      <Section0 />
    </Layout>
  );
};

export default RestaurantWebsiteDemos;
