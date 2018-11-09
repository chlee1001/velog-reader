import React from 'react';
import PostTemplate from '../components/post/PostTemplate';
import PostViewer from '../components/post/PostViewer';
import ScrollToTop from '../components/base/ScrollToTop';
import CommentList from '../components/post/CommentList';

const PostPage = () => {
  return (
    <PostTemplate>
      <ScrollToTop />
      <PostViewer />
      <CommentList />
    </PostTemplate>
  );
};

export default PostPage;
