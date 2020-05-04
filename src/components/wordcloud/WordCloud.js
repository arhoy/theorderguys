import React from 'react';
import styled from '@emotion/styled';
import ReactWordcloud from 'react-wordcloud';

import words from './words';

const Container = styled.div``;

export const WordCloud = () => {
  const options = {
    colors: ['#1f77b4', '#1A2243', '#355AED', '#0D8BA5', '#9467bd', '#1A2243'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'Poppins',
    fontSizes: [12, 65],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };

  return (
    <Container>
      <ReactWordcloud words={words} options={options} />
    </Container>
  );
};
