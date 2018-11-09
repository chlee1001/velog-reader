import React from 'react';
import { Route } from 'react-router-dom';
import AppTemplate from './components/base/AppTemplate';
import Header from './components/base/Header';
import ListPage from './page/ListPage';
import PostPage from './page/PostPage';

const App = () => {
  return (
    <AppTemplate header={<Header />}>
      <Route exact path="/" component={ListPage} />
      <Route path="/@:username/:urlSlug" component={PostPage} />
    </AppTemplate>
  );
};

export default App;
