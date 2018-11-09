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
  return (
    <PostItemWrapper to="/@username/url-slug-sample">
      <img
        src="https://images.velog.io/post-images/velopert/7d68fae0-ddf8-11e8-b996-41fb520cde45/react-protal.png"
        alt="thumbnail"
      />
      <h2>제목입니다</h2>
      <div className="info">
        <span>velopert</span>
        <span className="middot">&middot;</span>
        <span>{fromNow(new Date() - 1000 * 60 * 60 * 3)}</span>
      </div>
      <p>
        내용내용입니다. 내용은 엄청 길 수도 있고 짧을 수도 있습니다.
        내용내용입니다. 내용은 엄청 길 수도 있고 짧을 수도 있습니다.
        내용내용입니다. 내용은 엄청 길 수도 있고 짧을 수도 있습니다.
        내용내용입니다. 내용은 엄청 길 수도 있고 짧을 수도 있습니다.
      </p>
    </PostItemWrapper>
  );
};

export default PostItem;
