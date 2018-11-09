import axios from 'axios';

const client = axios.create({
  baseURL: 'https://uvvg89p68d.execute-api.ap-northeast-2.amazonaws.com/dev'
});

export const getTrendingPosts = () => client.get('/posts/trending');

export const getPost = ({ username, urlSlug }) =>
  client.get(`/posts/@${username}/${urlSlug}`);

export const getComments = postId => client.get(`/posts/${postId}/comments`);
