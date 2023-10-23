import React, { forwardRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

import { StyledInputWrapper, StyledInput, StyledInputError, StyledIconWrapper } from './Input.styled';

const Input = forwardRef(({ children, name, onChange, value, placeholder, hoverColor, error }, ref) => {
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
            <StyledIconWrapper value={value}>
                <UilSearch />
            </StyledIconWrapper>
            {/* <StyledInputError>{error}</StyledInputError> */}
        </StyledInputWrapper>
    );
});

export default Input;
