import React, { forwardRef } from 'react';

import { StyledInputWrapper, StyledInput } from './Input.styled';

const Input = forwardRef(({ children, name, onChange, value, placeholder, hoverColor }, ref) => {
    return (
        <StyledInputWrapper>
            <StyledInput
                ref={ref}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                $hoverColor={hoverColor}
            />
            {children}
        </StyledInputWrapper>
    );
});

export default Input;
