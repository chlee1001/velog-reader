import React from 'react';
import PostTemplate from '../components/post/PostTemplate';
import ScrollToTop from '../components/base/ScrollToTop';
import PostContainer from '../containers/post/PostContainer';

const PostPage = ({ match }) => {
  return (
    <PostTemplate>
      <ScrollToTop />
      <PostContainer params={match.params} />
    </PostTemplate>
  );
};

export default PostPage;
