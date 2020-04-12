import React from 'react';

import styled from '@emotion/styled';
import { FaChartBar, FaCode, FaCodeBranch } from 'react-icons/fa';
import blobshape from '../../../../../images/svg/blob-shape-3.svg';
import CirclularNumbers from '../../numbers/CirclularNumbers';
import Blob3 from './blobShapes/BlobShap3';

const Container = styled.div``;

const SubContainer = styled.div`
  z-index: 0;
  background: url(${blobshape}) no-repeat center;
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 1rem 0;
`;

const CodeBlob = styled.div`
  border-radius: 1rem;
`;

const UL = styled.ul`
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.white};
    padding: 0.5rem 1rem;
    width: 18rem;
    margin: 1.3rem 0;
    box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
    border: 1px solid ${props => props.theme.colors.lightgrey2};
  }
`;

const ChartBarIcon = styled(FaChartBar)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CodeIcon = styled(FaCode)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CodeBranchIcon = styled(FaCodeBranch)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const NetlifyBlob3 = () => {
  return (
    <Container>
      <TitleContainer>
        <CirclularNumbers number={3} />
        <Title>SEO</Title>
      </TitleContainer>

      <SubContainer>
        <CodeBlob>
          <UL>
            <li>
              High Quality Backlinks <CodeIcon />
            </li>

            <li>
              Curated Weekly Content <ChartBarIcon />
            </li>

            <li>
              Social Media Posts <CodeBranchIcon />
            </li>
          </UL>
        </CodeBlob>
        <Blob3 />
      </SubContainer>
    </Container>
  );
};

export default NetlifyBlob3;
