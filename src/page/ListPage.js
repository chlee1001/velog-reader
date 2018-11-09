import React from 'react';
import ListTemplate from '../components/listing/ListTemplate';
import PostListContainer from '../containers/list/PostListContainer';

const ListPage = () => {
  return (
    <ListTemplate>
      <PostListContainer />
    </ListTemplate>
  );
};

export default ListPage;
