import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 28rem;
`;

const Link = styled(NoStyleLink)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  & span {
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled(FaAngleDoubleRight)`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
  opacity: 0.8;
`;

export const LinkCard1 = () => {
  return (
    <Container>
      <Link to="#">
        Expand Your <span> Facebook Reach</span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard2 = () => {
  return (
    <Container>
      <Link to="#">
        Increase <span> Instagram Engagement</span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard3 = () => {
  return (
    <Container>
      <Link to="#">
        Get <span> More </span> Messages
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard4 = () => {
  return (
    <Container>
      <Link to="#">
        Reduce <span> Wasted </span> Ad Spend
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard5 = () => {
  return (
    <Container>
      <Link to="#">
        Optimize Google Search <span> Keywords </span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard6 = () => {
  return (
    <Container>
      <Link to="#">
        Effective Converting<span> Ad Copy </span>
      </Link>
      <Icon />
    </Container>
  );
};
