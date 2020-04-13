import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { A } from '../../../reusableStyles/typography/Typography';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  padding-top: 3rem;
  font-size: 1.5rem;
`;

const Creator = styled.div`
  text-align: center;
  opacity: 0.7;
  width: 100%;
`;

const ExternalLink = styled(A)`
  color: ${props => props.theme.colors.primary};
`;

const StyledImage = styled(Img)`
  width: 14rem;
`;

const Attriubtion = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  font-size: 1.3rem;
  & .linkcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 50rem;
    padding: 0 1rem;
  }
  & h6 {
    font-size: 1.4rem;
    text-align: center;
    opacity: 0.6;
    font-weight: 400;
  }

  & ${A} {
    margin-right: 4px;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottom = () => {
  const data = useStaticQuery(graphql`
    {
      butter: file(relativePath: { eq: "footer/butter-cms.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  console.log('data is', data);
  return (
    <Container>
      <Creator>
        Created By
        <ExternalLink href="https://aquasar.io/"> Aquasar.io </ExternalLink>
      </Creator>
      <Attriubtion>
        <h6>Special Thanks To</h6>
        <div className="linkcontainer">
          <A
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Flaticon.com
          </A>

          <A
            href="https://www.svgbackgrounds.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            SvgBackgrounds.com
          </A>
          <A
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Netlify
          </A>
          <A
            href="https://react-icons.netlify.com/#/icons/fa"
            target="_blank"
            rel="noreferrer noopener"
          >
            React-Icons
          </A>
          <A
            href="https://replain.cc/"
            target="_blank"
            rel="noreferrer noopener"
          >
            RePlain
          </A>
          <StyledImage fluid={data.butter.childImageSharp.fluid} />
        </div>
      </Attriubtion>
    </Container>
  );
};
