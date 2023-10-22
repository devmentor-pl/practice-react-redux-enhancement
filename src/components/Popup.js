import React, { useState } from "react";
import styled from "styled-components";

import {colors} from '../helpers/colors'

const Popup = (props) => {
    const [ pickedColor, setPickedColor ] = useState('#ADD8E6')

    const clickHandler = (color) => {
        setPickedColor(color)
    }

    const renderColorOptions = () => {

        return colors.map(({ id, color }) => {
            return (
                <StyledColorDiv
                    key={id} 
                    color={color}
                    pickedcolor={pickedColor}
                    onClick={() => clickHandler(color)}
                />          
            )
        })
    }

    return (
        <StyledBox>
            <StyledOptionsPanel>
                {renderColorOptions()}
            </StyledOptionsPanel>
            <StyledPopup  pickedcolor={pickedColor}>
                {props.children}
                <StyledButton onClick={props.onClose}>+</StyledButton>
            </StyledPopup>
        </StyledBox>
    )
}

export default Popup

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    left: 0;
    background-color: rgba(0,0,0, 0.4)
`

const StyledPopup = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 50%;
    background-color: ${({pickedcolor}) => pickedcolor};
    padding: 20px;
`

const StyledButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: transparent;
    border: none;
    transform: rotate(45deg);
    font-size: 1.8rem;
    cursor: pointer
`

const StyledOptionsPanel = styled.aside`
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
    background-color: transparent;
`

const StyledColorDiv = styled.div`
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;

    ${({color, pickedcolor}) => {
        console.log(pickedcolor)
        if (color === pickedcolor) {
           return {border: '2px solid black'}
        }
    }}
`