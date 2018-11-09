import React from 'react';
import PostItem from './PostItem';
import TriangleSpinner from '../common/TriangleSpinner';

const PostList = ({ posts }) => {
  if (!posts) return <TriangleSpinner />;
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
