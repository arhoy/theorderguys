import React from 'react';
import Img from 'gatsby-image';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.colors.lightgrey},
    ${props => props.theme.colors.white}
  );
  height: 25rem;
  width: 25rem;
  margin: 0 auto;
`;

const Image = styled(Img)`
  background: ${props => props.theme.colors.white};
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const CircularImage = ({ fluid }) => {
  return (
    <Container>
      <Image fluid={fluid} />
    </Container>
  );
};
