import React from 'react';

const Welcome = (props) => {
    console.log(props);
    return <h1 style={{ ...props.style.style }}>Witamy na naszej stronie!</h1>;
};

export default Welcome;
