import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';

const CommentListWrapper = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ced4da;
  padding-top: 2rem;
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
const CommentList = ({ comments }) => {
  if (!comments) return null;
  return (
    <CommentListWrapper>
      <h3>댓글</h3>
      {comments.map(comment => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </CommentListWrapper>
  );
};

export default CommentList;
