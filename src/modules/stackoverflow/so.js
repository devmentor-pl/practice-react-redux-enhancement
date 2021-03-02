import React, { useState } from 'react';
import StyledInput from '../../components/styled/Input.styled';

const StackOverflow = () => {
    const [soQuery, setSoQuery] = useState('');

    return (
        <div
            style={{
                width: '300px',
                backgroundColor: 'mistyrose',
                padding: '5px',
            }}
        >
            <StyledInput
                placeholder='stackoverflow'
                value={soQuery}
                onChange={(e) => log('ejze')}
            />
            <StyledInput />
        </div>
    );
};

export default StackOverflow;
