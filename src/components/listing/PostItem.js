import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fromNow } from '../../lib/common';

const PostItemWrapper = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: inherit;
  img {
    width: 100%;
    margin-bottom: 1rem;
    display: block;
  }
  .info {
    font-size: 0.75rem;
    color: #868e96;
    .middot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  p {
    margin-top: 1.5rem;
    line-height: 1.5;
    color: #495057;
    font-size: 1.125rem;
  }
  & + & {
    margin-top: 2rem;
    border-top: 1px solid #e9ecef;
    padding-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { url_slug, title, body, user, released_at, thumbnail } = post;
  const to = `/@${user.username}/${url_slug}`;
  return (
    <PostItemWrapper to={to}>
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      <h2>{title}</h2>
      <div className="info">
        <span>{user.username}</span>
        <span className="middot">&middot;</span>
        <span>{fromNow(released_at)}</span>
      </div>
      <p>{body}</p>
    </PostItemWrapper>
  );
};

export default PostItem;
