import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Container = styled.a`
  filter: grayscale(70%);
  text-decoration: none;
  transition: all 0.4s ease-in;
  &:hover {
    filter: grayscale(0%);
  }
  margin: 2rem;
  & .imageContainer {
    width: 50rem;
    @media (max-width: 600px) {
      width: 300px;
      overflow: hidden;
      max-width: 100%;
    }
  }
  & .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    color: #eaeaea;
    opacity: 0.9;
  }
  & h4 {
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Card = ({ fluid, title, url }) => {
  return (
    <Container href={url} target="_blank" rel="noopener nofollow noreferer">
      <div className="imageContainer">
        <StyledImage fluid={fluid} />
      </div>
      <div className="titleContainer">
        <h4>{title}</h4>
      </div>
    </Container>
  );
};
