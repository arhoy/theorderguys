/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

import Layout from '../components/layouts/Layout';
import NoStyleLink from '../components/Links/NoStyleLink';
import SEO from '../hooks/SEO';

const Container = styled.div`
  max-width: 1200px;

  margin: 5rem auto;
  padding: 2rem 1rem;
  & .comments {
    max-width: 800px;
  }
  @media (max-width: ${props => props.theme.screenSize.twelveHundred}) {
    padding: 4rem;
  }
  @media (max-width: ${props => props.theme.screenSize.fourFifty}) {
    padding: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .category {
    color: ${props => props.theme.colors.red};
    font-size: 1.8rem;
    font-weight: bold;
  }
  & h1 {
    font-weight: 700;
    font-size: 4rem;
    color: ${props => props.theme.colors.primaryLight};
  }
  & .content__top {
    & p {
      font-family: DecimaMono, Consolas, Monaco, monospace;
      border-bottom: 4px solid ${props => props.theme.colors.black};
      padding-bottom: 1rem;
    }
  }
  & .content__bottom {
    border-bottom: 1px solid ${props => props.theme.colors.black};
    & .row {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .summary {
      border-left: 4px solid ${props => props.theme.colors.red};
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
    & .author,
    & time {
      font-family: DecimaMono, Consolas, Monaco, monospace;
    }
    & .author {
      margin-right: 1rem;
      & span {
        font-weight: bold;
      }
    }
    & time {
      font-size: 1.4rem;
    }
  }

  & .heroImage {
    width: 100%;
    padding: 3rem;
    transform: rotate(10deg);
    min-width: 50rem;
    object-fit: cover;

    @media (max-width: 900px) {
      min-width: 40rem;
    }
    @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
      grid-template-columns: 1fr;
      min-width: 100%;
    }
  }
`;

const Body = styled.article`
  font-family: Montserrat;
  line-height: 3.2rem;
  font-weight: 500;
  max-width: 800px;
  margin: 4rem 0;
  & h2 {
    display: inline-block;
    text-align: center;
    padding: 0;
    font-size: 3rem;
    background-image: linear-gradient(
      145deg,
      ${props => props.theme.colors.secondaryVeryLight} 50%,
      transparent 50%
    );
    margin-top: 3rem;
  }

  & p {
    opacity: 0.87;
    padding: 1rem 0;
  }
  & img {
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  & pre {
    background: ${props => props.theme.colors.lightgrey};
    overflow: auto;
    padding: 2rem;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  & ul,
  & ol {
    padding: 2rem;
  }
`;

const Navigation = styled.div`
  max-width: 800px;
  & h3 {
    display: inline-block;
    text-align: center;
    padding: 0;
    font-size: 3rem;
    background-image: linear-gradient(145deg, #ccedff 50%, transparent 50%);
    margin-top: 3rem;
  }
  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  & li {
    margin: 1rem;
    padding: 2px 8px;
    &.previous {
      &:hover {
        background-image: linear-gradient(45deg, transparent 20%, #ffd6d8 20%);
      }
    }
    &.next {
      &:hover {
        background-image: linear-gradient(145deg, #d6ffe4 80%, transparent 20%);
      }
    }
  }
`;

export const query = graphql`
  query getBlog($slug: String!) {
    post: butterPost(slug: { eq: $slug }) {
      id
      slug
      title
      seo_title
      created(formatString: "ddd, MMM Do YYYY")
      featured_image
      featured_image_alt
      categories {
        name
      }
      published
      body
      author {
        first_name
        last_name
      }
      featured_image
      featured_image_alt
      summary
      seo_title
      tags {
        name
      }
    }
    getSiteData: site {
      siteMetadata {
        url
      }
    }
  }
`;

const BlogPost = props => {
  const { post, getSiteData } = props.data;

  const { previous, next } = props.pageContext;
  const siteUrl = getSiteData.siteMetadata.url;
  let disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `${siteUrl}/blog/${post.slug}`,
      identifier: post.id,
      title: post.title,
    },
  };

  return (
    <Layout>
      <SEO
        title={post.seo_title || post.title}
        description={post.summary}
        pathname={`/blog/${post.slug}`}
        image={post.featured_image}
      />
      <Container>
        <TitleContainer>
          <div className="content">
            <div className="content__top">
              <p>
                Filed Under: {` `}
                <span className="category">
                  {post.categories[0] && post.categories[0].name}
                </span>
              </p>

              <h1> {post.title} </h1>
            </div>
            <div className="content__bottom">
              <div className="row">
                <p className="summary">{post.summary}</p>
              </div>
              <div className="row">
                <div className="author">
                  By {` `}{' '}
                  <span>{`${post.author.first_name} ${post.author.last_name}`}</span>{' '}
                </div>
                <time>{post.created}</time>
              </div>
            </div>

            <CommentCount {...disqusConfig} />
          </div>
          <div className="picture">
            <img
              className="heroImage"
              src={post.featured_image}
              alt={post.featured_image_alt}
            />
          </div>
        </TitleContainer>
        <Body dangerouslySetInnerHTML={{ __html: post.body }} />
        <DiscussionEmbed className="comments" {...disqusConfig} />

        <Navigation>
          <h3> Continue Reading</h3>
          <ul>
            <li className="previous">
              {previous && (
                <NoStyleLink to={`/blog/${previous.slug}`} rel="prev">
                  ← {previous.seo_title}
                </NoStyleLink>
              )}
            </li>
            <li className="next">
              {next && (
                <NoStyleLink to={`/blog/${next.slug}`} rel="next">
                  {next.seo_title} →
                </NoStyleLink>
              )}
            </li>
          </ul>
        </Navigation>
      </Container>
    </Layout>
  );
};

export default BlogPost;
