import React from 'react';
import Layout from '../components/layouts/Layout';
import { Section0 } from '../components/_website/Section0/Section0';
import { Section1 } from '../components/_website/Section1/Section1';
import { Section2 } from '../components/_website/Section2/Section2';

const WebsitesPage = () => {
  return (
    <Layout>
      <Section0 />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default WebsitesPage;
