import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 4rem;

  color: ${props => props.theme.colors.black};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 3.4rem;
  }
`;

const H2 = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.primaryDark};
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;

const Li = styled.li`
  color: ${props => props.theme.colors.black};
  margin: 2rem 0;
`;

const Ul = styled.ul`
  margin: 1rem 0;
  margin-left: 2rem;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Span = styled.span``;

const P = styled.p``;

export { H1, H2, A, Li, Ul, Span, Bold, P };
