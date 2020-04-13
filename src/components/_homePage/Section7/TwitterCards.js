import React from 'react';

import styled from '@emotion/styled';

import { FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  border-radius: 8px;
  color: rgba(14, 30, 37, 0.8);
  -webkit-box-shadow: 0px 0px 16px 2px rgba(232, 255, 233, 0.79);
  box-shadow: 0px 0px 16px 2px rgba(232, 255, 233, 0.79);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 0.8rem;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  max-width: 50rem;
  padding: 2rem;
  margin: 0 1rem;
  position: relative;
  text-align: left;
  text-shadow: none;
  outline: none;
`;

const Blurb = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  & span {
    color: ${props => props.theme.colors.primaryLight};
    font-weight: 500;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  font-weight: bold;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;

  &.red {
    background: #ff7070;
  }
  &.green {
    background: #89ffb6;
  }
  &.blue {
    background: #89ccff;
  }
  &.purple {
    background: #9989ff;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  & h6 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & .profileSection {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
  }

  & .profileSubSection {
    display: flex;
    align-items: center;
  }
`;

const TwitterIcon = styled(FaTwitter)`
  font-size: 1.4rem;
  margin-right: 3px;
  color: ${props => props.theme.colors.grey};
`;

const TwitterCard1 = () => {
  return (
    <Container>
      <Blurb>
        Nice clean website, modern look and feel and super fast. Very happy to
        get started and build with {` `}
        <span>codepaper.dev</span>
      </Blurb>
      <ProfileContainer>
        <Circle className="red"> A </Circle>
        <div className="profileSection">
          <h6>Alex </h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @aquasar </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard2 = () => {
  return (
    <Container>
      <Blurb>
        Excellent Professional work done with great attention to details. Will
        <span> definitely work with again.</span> {` `}
        Highly Recommend
      </Blurb>
      <ProfileContainer>
        <Circle className="green"> C </Circle>
        <div className="profileSection">
          <h6>Claudine</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @claudine </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard3 = () => {
  return (
    <Container>
      <Blurb>
        When I ask clients how you heard about me and I hear the same response
        it really proves I still know how to pick my services and read people as
        good as I did in the 90’s. Great job at an amazing price
      </Blurb>
      <ProfileContainer>
        <Circle className="purple"> A </Circle>
        <div className="profileSection">
          <h6>Abdel</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @abdelh </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard4 = () => {
  return (
    <Container>
      <Blurb>
        <span>@Amazone </span> using <span> @CodePaper </span> to for our drone
        project, Thanks for parterning with us to make this project a reality
        and billions more to my wallet.
        <span>@CodePaperRocks!</span>
      </Blurb>
      <ProfileContainer>
        <Circle className="blue"> J </Circle>
        <div className="profileSection">
          <h6>Jeff Bayzos</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @beyzosunreal </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

export { TwitterCard1, TwitterCard2, TwitterCard3, TwitterCard4 };
