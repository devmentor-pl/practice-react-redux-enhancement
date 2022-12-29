import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';
import { useState } from "react";

const ComponentWithPopup = withPopup("lime")(Welcome);

const Task02 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const overlayStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.7)",
  };
  const closePopup = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <section style={isOpen ? overlayStyles : null}>
      <h2 style={isOpen ? { display: "none" } : { display: "block" }}>
        Task 02
      </h2>
      <ComponentWithPopup handleClick={closePopup} isOpen={isOpen} />
    </section>
  );
};

export default Task02;

