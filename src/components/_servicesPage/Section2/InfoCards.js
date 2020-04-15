import React from 'react';
import styled from '@emotion/styled';

import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

import facebook from '../../../../images/svg/services/facebook.svg';
import onlineshopping from '../../../../images/svg/services/online-shopping.svg';
import sushi from '../../../../images/svg/services/sushi.svg';
import deliveryTruck from '../../../../images/svg/services/delivery-truck.svg';
import crane from '../../../../images/svg/services/crane.svg';
import homeRun from '../../../../images/svg/services/home-run.svg';

const Card = styled.div`
  max-width: 40rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 2rem 0;
  }
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

const ImageContainer = styled.div`
  border: 4px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 50%;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  &.animation2 {
    &:hover {
      & img {
        transition: all 0.4s ease-in;
        transform: translateY(-2rem) rotateY(180deg);
      }
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  &.animation1 {
    transform: rotate(-15deg);
    transition: all 0.1s ease-in;
    &:hover {
      transform: rotate(0);
    }
  }

  &.animation3 {
    transition: all 0.1s ease-in;
    &:hover {
      transform: translateY(-5px);
    }
  }
  &.animation4 {
    transition: all 0.1s ease-in;
    &:hover {
      transform: translateX(5px);
    }
  }
  &.animation5 {
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
  &.animation6 {
    transform: rotate(0deg);
    transition: all 0.1s ease-in;
    &:hover {
      transform: rotate(15deg);
    }
  }
`;

export const Card1 = () => {
  return (
    <Card>
      <ImageContainer>
        <Img className="animation1" src={facebook} />
      </ImageContainer>

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
      <ImageContainer className="animation2">
        <Img src={onlineshopping} />
      </ImageContainer>

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
      <ImageContainer>
        <Img className="animation3" src={sushi} />
      </ImageContainer>

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
      <ImageContainer>
        <Img className="animation4" src={deliveryTruck} />
      </ImageContainer>
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
      <ImageContainer>
        <Img className="animation5" src={homeRun} />
      </ImageContainer>

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
      <ImageContainer>
        <Img className="animation6" src={crane} />
      </ImageContainer>

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
