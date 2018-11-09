import React from 'react';
import styled from 'styled-components';
import MarkdownRenderer from './MarkdownRenderer';
import { fromNow } from '../../lib/common';
import TriangleSpinner from '../common/TriangleSpinner';

const PostViewerWrapper = styled.div`
  h1 {
    margin-bottom: 0;
  }
  .info {
    font-size: 0.75rem;
    color: #868e96;
    .middot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    display: block;
  }
  .renderer-wrapper {
    margin-top: 2rem;
  }
`;

const PostViewer = ({ post }) => {
  if (!post) return <TriangleSpinner />;
  const { title, body, released_at, user, thumbnail } = post;
  return (
    <PostViewerWrapper>
      <h1>{title}.</h1>
      <div className="info">
        <span>{user.username}</span>
        <span className="middot">&middot;</span>
        <span>{fromNow(released_at)}</span>
      </div>
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      <div className="renderer-wrapper">
        <MarkdownRenderer body={body} />
      </div>
    </PostViewerWrapper>
  );
};

export default PostViewer;
