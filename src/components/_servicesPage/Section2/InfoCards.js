import React, { useState } from 'react';
import styled from '@emotion/styled';

import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

import facebook from '../../../../images/svg/services/facebook.svg';
import onlineshopping from '../../../../images/svg/services/online-shopping.svg';
import sushi from '../../../../images/svg/services/sushi.svg';
import deliveryTruck from '../../../../images/svg/services/delivery-truck.svg';
import crane from '../../../../images/svg/services/crane.svg';
import homeRun from '../../../../images/svg/services/home-run.svg';

const Title = styled(H3)`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.black};
  opacity: 0.9;
  font-weight: 500;
  & span {
    font-weight: 700;
  }
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

const Card = styled(NoStyleLink)`
  max-width: 40rem;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 2rem 0;
  }
  transition: all 0.5s ease-in;
  &:hover {
    background: ${props => props.theme.colors.lightgrey};
    border-radius: 10%;
  }
`;

export const Card1 = () => {
  const [text, setText] = useState('Italian Restaurant');

  return (
    <Card
      onMouseEnter={() => setText('Click To Learn More')}
      onMouseLeave={() => setText('Italian Restaurant')}
      to="/websites/italian-restaurant"
    >
      <ImageContainer>
        <Img className="animation1" src={facebook} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Italian restaurants for pick up and on the go! People don't want to wait
        for pizza, pasta and Italian Wedding Soup.
      </Blurb>
    </Card>
  );
};

export const Card2 = () => {
  const [text, setText] = useState('Pizza Place');
  return (
    <Card
      onMouseEnter={() => setText('Start Selling Fast')}
      onMouseLeave={() => setText('Pizza Place')}
      to="/websites/pizza-restuarant"
    >
      <ImageContainer className="animation2">
        <Img src={onlineshopping} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Pizza restaurants are a great candidate for pickup orders. Although lots
        of people typically think of pizza as delivery, why not offer customers
        an easy and affordable pickup option as well
      </Blurb>
    </Card>
  );
};

export const Card3 = () => {
  const [text, setText] = useState('Coffee Shop');
  return (
    <Card
      onMouseEnter={() => setText('Online Menu and Orders')}
      onMouseLeave={() => setText('Coffee Shop')}
      to="/websites/restaurant-website"
    >
      <ImageContainer>
        <Img className="animation3" src={sushi} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Coffee shops often serve more than just coffee! That is why we think
        coffee shops are a great candidate for a online ordering website. During
        busy hours, get more people in and out faster my getting them to order
        online and have them pickup and pay at the front
      </Blurb>
    </Card>
  );
};

export const Card4 = () => {
  const [text, setText] = useState('Donair Restuarant');
  return (
    <Card
      onMouseEnter={() => setText('Donair Restuarant')}
      onMouseLeave={() => setText('Donair Restuarant')}
      to="/websites/donair-restaurant"
    >
      <ImageContainer>
        <Img className="animation4" src={deliveryTruck} />
      </ImageContainer>
      <Title>{text}</Title>
      <Blurb>
        Donair restaurants are in and out. No customer wants to wait for a
        donair or gyros. Get them to order online and pay at the counter or
        securly online.
      </Blurb>
    </Card>
  );
};

export const Card5 = () => {
  const [text, setText] = useState('Greek Restaurant');
  return (
    <Card
      onMouseEnter={() => setText('Greek Restaurant')}
      onMouseLeave={() => setText('Greek Restaurant')}
      to="/websites/greek-restaurant"
    >
      <ImageContainer>
        <Img className="animation5" src={homeRun} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Ahh the greek salad, the Pita and Hummus, Amygdalota, Baklava and much
        more. The Greeks have a lot of food they are know for. Unless you count
        OPA Greek Fast Food is not Fast Food. Which is why Greek restaurants can
        benefit with online pick up orders
      </Blurb>
    </Card>
  );
};

export const Card6 = () => {
  const [text, setText] = useState('Sushi Restaurant');
  return (
    <Card
      onMouseEnter={() => setText('Sushi Restaurant')}
      onMouseLeave={() => setText('Sushi Restaurant')}
      to="/websites/sushi-restaurant"
    >
      <ImageContainer>
        <Img className="animation6" src={crane} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Sushi Restaurants are a great candidate for pickup orders. There is a
        growing number of sushi places in the city and having a streamlined
        delivery process and online presence can make all the difference. With
        so many roles and combinations marketing a Sushi Restaurant is a no
        brainer
      </Blurb>
    </Card>
  );
};
