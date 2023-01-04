import React from 'react';
import { StyledAlert, StyledText, StyledX } from "./Welcome.styled";

const clickHandler = () => {
  console.log("kliknięto!");
};

const Welcome = (props) => (
  <StyledAlert>
    <StyledX onClick={props.clickHandler}>x</StyledX>
    <StyledText>Witamy na naszej stronie!</StyledText>
  </StyledAlert>
);

export default Welcome;

