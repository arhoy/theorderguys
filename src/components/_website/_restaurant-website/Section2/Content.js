import React from 'react';
import styled from '@emotion/styled';
import { ButtonStyle2 } from '../../../reusableStyles/buttons/Button';
import NoStyleLink from '../../../Links/NoStyleLink';

const Container = styled.div`
  & p {
    border-left: 4px solid ${props => props.theme.colors.primary};
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
  & a {
    color: ${props => props.theme.colors.primary};
  }
`;

const Button = styled(ButtonStyle2)`
  border-radius: 0;
`;

export const Content1 = () => {
  return (
    <Container>
      <h3>Mobi2go</h3>
      <p>
        Mobi2go offers very clean customizable menus with many different POS
        integrations. If you are looking to create a customized feel for your
        restaurant that is on-point with your branding and integrates with your
        POS system this is a good choice. Mobi2Gos pricing is currently
        $58/month + 3% commission. If you are looking for help with setup we can
        do for you starting at $249.
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://www.mobi2go.com/"
        >
          <ButtonStyle2>Vist Site </ButtonStyle2>
        </a>
        <br />
        Examples of restaurants with Mobi2go:{' '}
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://japonaisbistro.ca/order/"
        >
          Japonais Bistro
        </a>
      </p>
      <NoStyleLink to="/contact">
        <Button>Schedule a setup</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content2 = () => {
  return (
    <Container>
      <h3>Ordering</h3>
      <p>
        Ordering.co is a great solution if you have many locations or you are a
        franchise. They are also a no commission based platform, but there
        pricing starts at USD $299/month for ordering website and app. They
        boast to have clients like Starbucks and Dominos and are brand
        themselves as the "Tesla for online ordering". They are truly the most
        flexible and customizable solution and they come at a cost. If you are
        interested in setting this up for your business we can set it up for up
        to 50% discount on setup fees compare to what they charge.
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://ordering.co"
        >
          <ButtonStyle2>Vist Site </ButtonStyle2>
        </a>
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://orderingweb.ordering.co/search/type/delivery/address/40.7539143,-73.9810162?hsCtaTracking=2154d933-6026-411e-801b-c0a4cdd3acc9%7C68f0c72f-f964-45ee-bc4f-8714604ffbe1"
        >
          Examples of their mutlistore demo.
        </a>
      </p>
      <NoStyleLink to="/contact">
        <Button>Schedule a setup</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content3 = () => {
  return (
    <Container>
      <h3>DoorDash</h3>
      <p>
        DoorDash is one of the "Big Three" online ordering and pickup services.
        During the pandamic DoorDash has offered much more incentives compare to
        Skip The Dishes. As a result many people or moving away from Skip and
        towards DoorDash for delivery. If you need help with this transition we
        would be happy to assist with this for a nominal fee depending on your
        menu size and requirements.
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://www.doordash.com/e"
        >
          <ButtonStyle2>Vist Site</ButtonStyle2>
        </a>
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://www.doordash.com/store/cactus-club-cafe-edmonton-894735/en-US"
        >
          Example: Cactus Club Downtown Edmonton
        </a>
      </p>
      <NoStyleLink to="/contact">
        <Button>Schedule a setup</Button>
      </NoStyleLink>
    </Container>
  );
};

export const Content4 = () => {
  return (
    <Container>
      <h3>RestoLabs</h3>
      <p>
        Restolabs offers an online ordering system for restaurants that offers
        unlimited orders starting at $45 USD/month. For Facebook ordering, the
        price is almost double. They offer most of the standard features of the
        other order system solutions at a slightly better price. They offer some
        customization, but ordering does not happen on your webiste domain. If
        you like their demos we offer setup starting at $129 CDN.
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="restolabs.com"
        >
          <ButtonStyle2>Vist Site</ButtonStyle2>
        </a>
        <br />
        <a
          target="_blank"
          rel="noreferral nofollow noopener"
          href="https://app1.restolabs.com/onlineorder/italiano#/onlineorder"
        >
          Example: Italiano
        </a>
      </p>
      <NoStyleLink to="/contact">
        <Button>Schedule a setup</Button>
      </NoStyleLink>
    </Container>
  );
};
