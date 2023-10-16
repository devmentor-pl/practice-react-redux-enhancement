import React from 'react';
import styled, { keyframes } from 'styled-components';

const overlayColor = 'rgba(0, 0, 0, 0.9)';
const spinnerSize = '75px';
const spinnerColor = '#69717d';

const absoluteCenter = `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const overlayKeyframes = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: ${overlayColor};
  }
`;

const spinnerFade = keyframes`
  0% {
    background-color: ${spinnerColor};
  }
  100% {
    background-color: transparent;
  }
`;

const SpinnerOverlay = styled.div`
    background: ${overlayColor};
    animation: ${overlayKeyframes} 1s forwards;
    ${absoluteCenter};
`;

const SpinnerContainer = styled.div`
    font-size: ${spinnerSize};
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;

    &.center {
        ${absoluteCenter};
    }
`;

const SpinnerBlade = styled.div`
    position: absolute;
    left: 0.4629em;
    bottom: 0;
    width: 0.074em;
    height: 0.2777em;
    border-radius: 0.5em;
    background-color: transparent;
    transform-origin: center -0.2222em;
    animation: ${spinnerFade} 1s infinite linear;
    transform: rotate(${props => props.rotation}deg);
    animation-delay: ${props => props.delay}s;
`;

const Spinner = () => {
    const blades = Array.from({ length: 12 }, (_, i) => <SpinnerBlade key={i} rotation={i * 30} delay={i * 0.083} />);

    return (
        <div class='overlay'>
            <div class='spinner center'>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
                <div class='spinner-blade'></div>
            </div>
        </div>
    );
};

export default Spinner;
