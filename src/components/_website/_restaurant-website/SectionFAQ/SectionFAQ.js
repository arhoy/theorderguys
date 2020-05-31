import React from 'react';
import styled from '@emotion/styled';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { SectionTitle } from '../../../reusableStyles/titles/SectionTitle';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  & p {
    margin: 2rem 1rem;
    max-width: 700px;
    line-height: 2.6rem;
    font-family: Montserrat;
  }
  & ul {
    padding: 1rem;
    margin-left: 2rem;
  }
  & li {
    margin: 1rem 0;
  }
`;

export const SectionFAQ = () => {
  return (
    <Container>
      <SectionTitle title="FAQs" />
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will customers leave my website when they go to order online?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No they will remain on your website the entire time when they are
              ordering for pickup or delivery through the app.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I track pickup orders coming into from my website
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Both you and the customer will receive a notification in real time
              as soon as the order is placed.
            </p>
            <p>
              You will need to confirm that order on your restaurant phone or
              tablet in real time.
            </p>
            <p>You will be able to see all online orders via the app.</p>
            <p>You will also get orders to your email address</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to print out these orders?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, you can connect this app to your thermal printer (connected
              to multiple Epson and Star thermal printers which are widely used
              in many restaurants).
            </p>
            <ul>
              <li>
                LAN (Ethernet) - the thermal printer is connected by network
                cable to a WiFi router and accesses the same WiFi network as the
                order taking device does;
              </li>
              <li>
                WLAN (WiFi) - the thermal printer connects wirelessly to the
                same WiFi network that’s used by the order taking device;
              </li>
              <li>
                Bluetooth - the thermal printer connects directly to the order
                taking device via Bluetooth.
              </li>
            </ul>

            <p>
              To add a printer, open the order taking app and select Thermal
              printer from the menu. The app will guide you through adding a
              LAN, WiFi or Bluetooth printers
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to see my customers and orders?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes you will be able to see your customers name, email, phone
              number and order detail on the app. These order information will
              also be sent to your email.
            </p>
            <p>
              Order information will include the price of each line item
              ordered, the pickup time and payment method.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to edit the menu and make changes if I need to
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes you will have access to this via your restaurant login
              dashboard online
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to get a report of my orders and revenue?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes you will have access to this via your restaurant login
              dashboard online
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will menu edits and changes be extra?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Once the menu is up and running, we can help you make edits if
              needed such as price changes, adding new photos or changing
              category options and add ons.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              If an item is sold out, will that show on the menu?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You will have the option to hide that item manually if it is sold
              out in your restaurant dashboard. You also have the option to hide
              certain items or categories during certain times of the day. This
              is not recommended if elect to have the “order ahead” option.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to get a report of my orders and revenue?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes you will have access to this via your restaurant login
              dashboard online
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is the ringtone automatic when an order comes in.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes the ring tone is automatic, you will receive that during each
              order.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will I be able to get a report of my orders and revenue?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes you will have access to this via your restaurant login
              dashboard online
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              When a customer pre orders we would still have to accept it first
              right when we turn the tablet on
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. If a customer “pre orders” during restaurant closing hours,
              you will have an email notification. You will have to accept that
              order once your restaurant is live again.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I have to use the app to take orders?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. The reason for this is to provide the best customer user
              experience. Taking orders via email or fax results in a poor
              online ordering experience for the customer as they cannot receive
              order confirmations by the restaurant in real-time.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What does the message "We're currently not taking orders online
              right now..." mean
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The online order app checks to make sure there is a connection
              with the restaurant phone or tablet. If there is a connection
              error due to wifi or low battery you could be seeing this message.
            </p>
            <p>
              Please check to see if you are logged in the order-taking app on
              your mobile device, and if you have an active data plan or wifi
              connection. Also make sure you don’t have any app blocker or
              battery-saving applications installed.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can customers order on Facebook with their phone?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, this is possible. To make sure this button is clearly visible
              to users browsing Facebook on their phone, the order menu button
              needs to be placed as the main call to action button on your
              Facebook business page.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Will customers be able to pay directly online?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, this is possible and is part of the deluxe/premium plan. We
              recommend paypal integration and will need you to provide your
              paypal API key. Funds will be directly deposited into your
              bank/paypal account and ~2.9% transaction fees will apply on each
              order.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What if I get no orders?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you get no online orders for your restaurant, then you have a
              larger issue around online marketing and getting traffic to your
              website. We also do monthly Google My Business Optimizations for
              restaurants as part of the deluxe and standard plan.
            </p>
            <p>
              If you are struggling to get traction online we offer full service
              SEO and online advertising as an add ons starting at $300/month.
            </p>
            <p>
              In addition, if you are just starting out and have no orders we
              may be able to work out a month to month commission plan with you
              until your restaurant orders pick up.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How much is menu setup?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We are currently offering menu setup and website integration
              starting $99. For large or complex menus with over 80 items the
              setup fee will cost slightly more. and online advertising as an
              add ons starting at $300/month.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              If I wanted to do delivery would you help with that as well?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. If you are doing in house delivery, the customer will see
              that option when they order online from the menu. You will be able
              to set up different delivery zones for you.
            </p>
            <ul>
              <li>
                You can charge different rates for different delivery zones
              </li>
              <li>Specify minimum order amounts by zone.</li>
            </ul>

            <p>
              Customers will also have the option to choose what type of
              delivery that they want
            </p>

            <ul>
              <li>In person delivery</li>
              <li>Meet driver outside</li>
              <li>No Contact delivery (leave at my doorstep)</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Delivery Tracking solutions?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We can integrate with delivery tracking providers like QuestTag
              and OrderLord. This will be an extra setup cost and fees will be
              based on the provider used.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I still use Skip The Dishes or DoorDash in addition to this
              app?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. We can set up on your website in any way you like so that
              Pickup Orders will go through your new online menu and delivery
              will go to a delivery order platform of your choice.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How to get started?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We will need access to your website/wordpress and your restaurant
              menu/items.
            </p>
            <p>
              Will schedule a quick setup call to get some additional info like
              the phone number to use and your company address, name etc.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
