import React from 'react';
import Layout from '../../components/layouts/Layout';
import { Section0 } from '../../components/_website/_ecommerce-website/Section0/_Section0';
import { Section1 } from '../../components/_website/_ecommerce-website/Section1/Section1';
import { Section2 } from '../../components/_website/_ecommerce-website/Section2/Section2';
import { Section3 } from '../../components/_website/_ecommerce-website/Section3/Section3';
import { Section4 } from '../../components/_website/_ecommerce-website/Section4/Section4';

const EcommerceWebsites = () => {
  return (
    <Layout>
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default EcommerceWebsites;
