import React, { Component } from 'react';
import PostViewer from '../../components/post/PostViewer';
import CommentList from '../../components/post/CommentList';
import { connect } from 'react-redux';
import * as postActions from '../../store/modules/post';
import { bindActionCreators } from 'redux';

class PostViewerContainer extends Component {
  initialize = async () => {
    const { PostActions, params } = this.props;
    const { username, urlSlug } = params;
    PostActions.initialize();
    try {
      await PostActions.getPost({ username, urlSlug });
      if (!this.props.post) return;
      await PostActions.getComments(this.props.post.id);
    } catch (e) {}
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    const { post, comments } = this.props;
    return (
      <>
        <PostViewer post={post} />
        <CommentList comments={comments} />
      </>
    );
  }
}

export default connect(
  ({ post }) => ({
    post: post.post,
    comments: post.comments
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostViewerContainer);
