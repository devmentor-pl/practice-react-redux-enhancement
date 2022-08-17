import React from "react";

class Popup extends React.Component {
  render() {
    const { message, onClose, style } = this.props;

    return (
      <div style={style}>
        <div>{message}</div>
        <button onClick={onClose}>Zamknij</button>
      </div>
    );
  }
}

export default Popup;
