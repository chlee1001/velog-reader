import React from 'react';
import styled from 'styled-components';

const ListTemplateWrapper = styled.div`
  padding-top: 2rem;
`;

const ListTemplate = ({ children }) => {
  return <ListTemplateWrapper>{children}</ListTemplateWrapper>;
};

export default ListTemplate;
