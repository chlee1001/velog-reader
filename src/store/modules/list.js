import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../../lib/common';

const GET_TRENDING_POSTS = 'list/GET_TRENDING_POSTS';
export const getTrendingPosts = createAction(
  GET_TRENDING_POSTS,
  api.getTrendingPosts
);

const initialState = {
  posts: null
};

const reducer = handleActions({}, initialState);
export default applyPenders(reducer, [
  {
    type: GET_TRENDING_POSTS,
    onSuccess: (state, action) => {
      return updateObject(state, { posts: action.payload.data });
    }
  }
]);
