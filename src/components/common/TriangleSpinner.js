import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const TriangleSpinnerWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
`;

class TriangleSpinner extends Component {
  state = {
    visible: false
  };
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        visible: true
      });
    }, 500);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    if (!this.state.visible) return null;
    return (
      <TriangleSpinnerWrapper>
        <Loader type="Triangle" color="#4dabf7" height="100" width="100" />
      </TriangleSpinnerWrapper>
    );
  }
}

export default TriangleSpinner;
