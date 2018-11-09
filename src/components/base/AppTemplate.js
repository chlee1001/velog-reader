import React from 'react';
import styled from 'styled-components';

const AppTemplateWrapper = styled.div`
  .main {
    width: 768px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 4rem;
  }
`;
const AppTemplate = ({ header, children }) => {
  return (
    <AppTemplateWrapper>
      {header}
      <div className="main">{children}</div>
    </AppTemplateWrapper>
  );
};

export default AppTemplate;
