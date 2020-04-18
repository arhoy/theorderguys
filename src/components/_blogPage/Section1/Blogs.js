import React from 'react';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';
import { truncateText } from '../../../utils/truncateText';

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const Post = styled(NoStyleLink)`
  margin: 1rem;
  padding: 1rem 2rem;
  max-width: 600px;
  border-radius: 2rem;
  background: ${props => props.theme.colors.white};
  &.row {
    display: flex;
    width: 100%;
  }
  & h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  & p {
    opacity: 0.9;
  }
  & time {
    margin-left: 1rem;
  }
  & span {
    &.category {
      color: ${props => props.theme.colors.red};
      font-weight: bold;
    }
  }
`;

const ImageContainer = styled.div`
  & img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

const Tags = styled.div`
  & span {
    font-size: 1.3rem;
    margin-right: 3px;
  }
`;

export const Blogs = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => (
        <Post to={`/blog/${post.slug}`} key={post.id}>
          <div className="row">
            <span className="category">
              {post.categories[0] && post.categories[0].name}
            </span>
            <time date={post.created}>{post.created}</time>
          </div>
          <div className="row">
            <h4>{post.title}</h4>
          </div>
          <div className="row">
            <p>{truncateText(post.summary, 140)}</p>
          </div>

          {post.featured_image && (
            <ImageContainer>
              <img src={post.featured_image} alt={post.featured_image_alt} />
            </ImageContainer>
          )}
          <Tags>
            {post.tags.map(tag => (
              <span key={tag.name}>{tag.name}</span>
            ))}
          </Tags>
        </Post>
      ))}
    </Container>
  );
};
