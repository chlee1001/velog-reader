import React from 'react';
import ListTemplate from '../components/listing/ListTemplate';
import PostList from '../components/listing/PostList';

const ListPage = () => {
  return (
    <ListTemplate>
      <PostList />
    </ListTemplate>
  );
};

export default ListPage;
