import React from "react";

const Welcome = (props) => (
  <div>
    <h2 style={{ backgroundColor: props.bg, color: props.color }}>
      Witamy na naszej stronie!
    </h2>
  </div>
);

export default Welcome;
