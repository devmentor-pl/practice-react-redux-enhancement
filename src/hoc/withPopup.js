import React from 'react';

const withPopup = function (background, opacity, width) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        const isClose = this.props.isClose;
        const onToggle = this.props.onToggle;
        if (isClose) {
          return <WrappedComponent />;
        }
        return (
          <div
            style={{
              backgroundColor: background,
              opacity: opacity,
              width: width,
            }}
          >
            <WrappedComponent />
            <button onClick={onToggle}>X</button>
          </div>
        );
      }
    };
  };
};


export default withPopup;