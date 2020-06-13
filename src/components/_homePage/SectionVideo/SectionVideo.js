import React from 'react';
import styled from '@emotion/styled';
import Video from '../../youtube/Video';
import { H2 } from '../../reusableStyles/typography/Typography';
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  & iframe {
    width: 100%;
    min-height: 400px;
    max-height: auto;
    @media (max-width: 600px) {
      min-height: auto;
      max-height: auto;
    }
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionVideo = () => {
  return (
    <Container>
      <TitleContainer>
        <H2>Watch It In Action</H2>
      </TitleContainer>
      <Video
        videoSrcURL="https://www.youtube.com/watch?v=SaqOPpL_0ZI"
        videoTitle="The Order Guys How To Place An Order"
      />
    </Container>
  );
};
