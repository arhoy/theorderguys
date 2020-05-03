import React from 'react';
import Layout from '../components/layouts/Layout';
import { Section0 } from '../components/_website/Section0/Section0';
import { Section1 } from '../components/_website/Section1/Section1';
import { Section2 } from '../components/_website/Section2/Section2';
import { Section3 } from '../components/_website/Section3/Section3';
import SEO from '../hooks/SEO';

const WebsitesPage = () => {
  return (
    <Layout>
      <SEO
        title="Website Development and Website Design in Edmonton Alberta"
        description="Websites for realtors, restaurants, construction companies and small businesses. We offer website solutions for all businesses"
        path="/websites"
      />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
};

export default WebsitesPage;
