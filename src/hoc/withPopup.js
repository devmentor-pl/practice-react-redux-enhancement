import React from 'react';

const withPopup = function (message) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
};

export default withPopup;