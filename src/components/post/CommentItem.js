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
const CommentItem = () => {
  return (
    <CommentItemWrapper>
      <div className="username">velopert</div>
      <div className="date">{fromNow(new Date() - 1000 * 60 * 60 * 3)}</div>
      <div className="comment-content">
        <MarkdownRenderer body="참고: 댓글도 **마크다운**이 됩니다! 댓글은 *어쩌구 저쩌구*" />
      </div>
    </CommentItemWrapper>
  );
};

export default CommentItem;
