import React from 'react';

import { StyledAlert, StyledX } from "../components/withPopup.styled";

const withPopup = function (message) {
  return function (WrappedComponent) {
    return class extends React.Component {
      state = { isOpen: true };

      handleClick = () => {
        this.setState({ isOpen: false });
      };
      render() {
        if (this.state.isOpen) {
          return (
            <StyledAlert>
              <StyledX onClick={this.handleClick}>x</StyledX>
              <WrappedComponent {...this.props} />
            </StyledAlert>
          );
        }
        return <WrappedComponent {...this.props} />;
      }
    };
  };
};

export default withPopup;