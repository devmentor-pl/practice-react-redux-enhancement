import React from 'react';

const Welcome = (props) => {
    console.log('🚀 ~ Welcome ~ props', props);
    return <h1 {...props}>Witamy na naszej stronie!</h1>;
};

export default Welcome;
