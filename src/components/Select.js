import React from 'react'

const Select = ({name, handleInputChange, label, children}) => {
    return (
        <label>
            {label}
            <select
                name={name}
                onChange={(e) => handleInputChange(e.target)}
            >
                {children}
            </select>
        </label>
    )
}

export default Select
