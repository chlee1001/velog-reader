import React from 'react';
import styled from 'styled-components';
import { fromNow } from '../../lib/common';
import MarkdownRenderer from './MarkdownRenderer';

const CommentItemWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: 1.5;
  .username {
    font-weight: 600;
  }
  .date {
    font-size: 0.875rem;
    color: #868e96;
  }
  .comment-content {
    margin-top: 0.5rem;
  }
  & + & {
    border-top: 1px solid #e9ecef;
  }
`;
const CommentItem = ({ comment }) => {
  const { user, created_at, text } = comment;
  return (
    <CommentItemWrapper>
      <div className="username">{user.username}</div>
      <div className="date">{fromNow(created_at)}</div>
      <div className="comment-content">
        <MarkdownRenderer body={text} />
      </div>
    </CommentItemWrapper>
  );
};

export default CommentItem;
