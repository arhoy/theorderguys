import React from 'react';
import styled from '@emotion/styled';
import { SectionTitle } from '../../reusableStyles/titles/SectionTitle';

const Section = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-weight: 300;
  & p {
    font-style: Helvetica;

    line-height: 2.8rem;
    padding: 2rem 1rem;
  }
  & ul {
    font-size: 1.5rem;
    list-style: none;
    padding: 0 2rem;
  }
  & li {
    padding: 3px 0;
    font-weight: 400;
    &::before {
      content: '-';

      margin-right: 1rem;
    }
  }
`;

const Mission = styled.div`
  border-left: 1rem solid ${props => props.theme.colors.primaryLight};
  margin: 1rem 1rem;

  & p {
    margin-left: 1rem;
    font-style: italic;
    font-size: 1.8rem;
  }
  & span {
    font-weight: bold;
  }
`;

const Mission2 = styled(Mission)`
  border-right: 1rem solid ${props => props.theme.colors.primaryLight};
  border-left: none;
`;

const Blurb = styled.div``;

export const SectionMissionStatement = () => {
  return (
    <Section>
      <SectionTitle title="Our Mission" />
      <Mission>
        <p>
          <span>The Order Guys</span> help restaurants create and set up online
          ordering for their website and Facebook business page.
        </p>
      </Mission>
      <Blurb>
        <p>
          The Order Guys help restaurants create and set up online ordering for
          their website and Facebook business page. We will help grow and
          increase your digital presence organically with SEO and through target
          focused online ads.
        </p>

        <ul>
          <li>
            Unlike competitors we offer a full white label 0% commission
            solution
          </li>
          <li>
            We work with you to integrate it with your website and provide local
            SEO and online advertising to get you more online orders.
          </li>
          <li>We offer setup and website integration starting at only $99</li>
        </ul>

        <p>
          In addition, we are here to help you decide what the best ordering
          platform is for your business. We have tested and reached out to
          dozens of ordering platforms and are partners with many. We will
          assist you in the setup phase and support you every step of the way.
        </p>

        <p>
          We are committed to help your business grow online organically with
          our custom white label SEO plans, copywriting, Google Maps
          optimizations and content writing. Last of all, we have experience
          with online advertising and I have personally managed millions in ad
          spend on the Google and Facebook Ad platforms over the years for
          various clients and companies.
        </p>
        <Mission2>
          <p>
            We will help grow and increase your digital presence organically
            with SEO and through target focused online ads.
          </p>
        </Mission2>
        <p>
          What are you waiting for? Your phone lines are jammed and your
          customers are hungry. We are confident we will be able to deliver and
          exceed your expectations.
        </p>
      </Blurb>
    </Section>
  );
};
