import React from 'react';
import styled from 'styled-components';

const PostTemplateWrapper = styled.div`
  padding-top: 2rem;
`;
const PostTemplate = ({ children }) => {
  return <PostTemplateWrapper>{children}</PostTemplateWrapper>;
};

export default PostTemplate;
