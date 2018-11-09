import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: #f1f3f5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .header-content {
    width: 768px;
    margin: 0 auto;
    padding: 1rem;
    height: 4rem;
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    letter-spacing: 4px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-content">
        <Link to="/">velog</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
