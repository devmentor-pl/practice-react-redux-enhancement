import React from 'react';

const withPopup = (message) => {
  return (WrappedComponent) => {
    return class extends React.Component {
      render() {
        const { isOpen } = this.props;
        if (isOpen) {
          return <WrappedComponent {...this.props} />;
        }

        return <div>{message}</div>;
      }
    };
  };
};


export default withPopup;