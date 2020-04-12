import React from 'react';
import styled from '@emotion/styled';

import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

import chipSVG from '../../../../images/svg/services/chip.svg';
import dataStorageSVG from '../../../../images/svg/services/database-storage.svg';
import settingsSVG from '../../../../images/svg/services/settings.svg';
import robotSVG from '../../../../images/svg/services/industrial-robot.svg';

const Card = styled.div`
  width: 40rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(H3)`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.black};
  opacity: 0.9;
  font-weight: 500;
`;

const Img = styled.img`
  border: 4px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 50%;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export const Card1 = () => {
  return (
    <Card>
      <Img src={chipSVG} />
      <Title> Marketing Website</Title>
      <Blurb>
        Custom, high converting marketing website leading to more calls and
        messages. Custom contact forms integrated with your email, website chat
        or other features as needed
      </Blurb>
    </Card>
  );
};

export const Card2 = () => {
  return (
    <Card>
      <Img src={dataStorageSVG} />
      <Title>Ecommerce</Title>
      <Blurb>
        Looking to sell products online? We will discuss your business and help
        you decide what Ecommerce platform is best for you and then build it
        whether that is on Shopify, WooCommerce or a custom Stripe solution
      </Blurb>
    </Card>
  );
};

export const Card3 = () => {
  return (
    <Card>
      <Img src={settingsSVG} />
      <Title>Restaurant Website</Title>
      <Blurb>
        Restaurant and coffee shops looking for effective and profitable online
        solutions for takeout/pickup and delivery. Avoid greedy Skip The Dishes/
        DoorDash fees with an unlimited, realtime, zero commission ordering
        platform.
      </Blurb>
    </Card>
  );
};

export const Card4 = () => {
  return (
    <Card>
      <Img src={robotSVG} />
      <Title>Service Website</Title>
      <Blurb>
        Are you a salon, spa, massage place or barbershop? Book people through
        your website today, with a highly optimized checkout process and low
        fees. Make payments online with no monthly fees.
      </Blurb>
    </Card>
  );
};

export const Card5 = () => {
  return (
    <Card>
      <Img src={robotSVG} />
      <Title>Realtor Website</Title>
      <Blurb>
        As real estate agent, you want every competitive advantage you can get.
        It is not suprising that many real estate agents spend up to $1500/year
        maintaining and managing their website, and top marketing agents will
        spend a whole lot more. Lets work together to attract top tier clients
        so that you can sell more houses in any market
      </Blurb>
    </Card>
  );
};

export const Card6 = () => {
  return (
    <Card>
      <Img src={robotSVG} />
      <Title>Construction Website</Title>
      <Blurb>
        With tough times looming ahead in Alberta, it is a better time now more
        than ever to invest long term and build up your online business presence
        and website. If you are construction company in Canada, learn about or
        special rates and discount services from web design and development, SEO
        and online advertising.
      </Blurb>
    </Card>
  );
};
