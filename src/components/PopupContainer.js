import React from "react";

class PopupContainer extends React.Component {

  render() {
    const { children, clickBtn } = this.props
    return (
      <div
        style={{
          padding: '1rem',
          border: '2px solid black',
          backgroundColor: 'green',
          borderRadius: '5px'
        }}
      >
        {children}
        <button
          style={{
            border: '1px solid black',
            padding: '2px',
            margin: '2px',
            cursor: 'pointer'
          }}
          onClick={clickBtn}
        >
          X
        </button>
      </div>
    )
  }
}

export default PopupContainer