import React from 'react';
import styled from '@emotion/styled';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  & p {
    border-left: 4px solid ${props => props.theme.colors.red};
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  & span {
    font-weight: 700;
    &.highlight {
      padding: 2px 4px;
      background-image: linear-gradient(
        180deg,
        transparent 50%,
        ${props => props.theme.colors.secondaryVeryLight} 50%
      );
    }
  }
`;

const Button = styled(ButtonStyle2)`
  border-radius: 0;
`;

export const Content1 = () => {
  return (
    <Container>
      <h3>Website Chat</h3>
      <p>
        Looking to get <span className="highlight">Live Chat</span> on your site
        integrated with facebook messenger or WhatsApp. Have may have heard of
        <span> Intercom</span> or <span>Front</span>, but don't want to pay
        $99/month for live chat integration on your site. Similar to those
        enterprise level services with unlimited operators we can set up Live
        Chat on your site for a <span>fraction of the cost </span> depending on
        your needs and requirements.
      </p>
      <NoStyleLink to="/contact">
        <Button>Learn More</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content2 = () => {
  return (
    <Container>
      <h3>Order Pickup Integration</h3>
      <p>
        If you are restaurant, you likely have thought of or already are using a
        service for order pickups and delivery. Services like{' '}
        <span>Doordash</span> and <span>Skip The Dishes </span> charge and take
        30% of revenues which makes it extremely hard for restaurants to turn a
        profit. We want to help you reduce your fees by integrating your site
        with an online ordering platform with{' '}
        <span className="highlight">Zero Commissions.</span> All website pickup
        orders go straight to your restaurant phone or tablet in real-time and
        we will set everything up for you
      </p>
      <NoStyleLink to="/contact">
        <Button>Learn More</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content3 = () => {
  return (
    <Container>
      <h3>Book More Website Calls</h3>
      <p>
        Optimize your site with SEO, Digital Ads, landing page optimizations and
        split testing to book more website calls and appointments. Custom
        contact forms on your site allow you to collect form leads or grow your
        subscriber list. If you are hair salon or spa create custom bookings
        online or integrate with services like
        <span className="highlight">Fresha</span> to help you book more
        appointments online.
      </p>
      <NoStyleLink to="/contact">
        <Button>Learn More</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content4 = () => {
  return (
    <Container>
      <h3>Blog Integration for Non Techies</h3>
      <p>
        Seemlessly and quickly integrate a blog with a{' '}
        <span className="highlight"> Headless CMS </span>solution that
        completely detaches your content from your website. This allows you to
        easily move your content from one site to another and lets marketers
        focus on writing content without going into the code or a poking around
        the backend of a WordPress site. There is reason why Headless CMS
        systems are being used my some of the largest <span>Fortune 500</span>{' '}
        companies today, and small businesses too can benefit
      </p>
      <NoStyleLink to="/contact">
        <Button>Learn More</Button>
      </NoStyleLink>
    </Container>
  );
};
