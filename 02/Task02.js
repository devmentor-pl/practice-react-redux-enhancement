import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';
import { useState } from "react";

const ComponentWithPopup = withPopup("withPopup")(Welcome);

const Task02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <section>
      <h2>Task 02</h2>
      <ComponentWithPopup handleClick={togglePopup} />
    </section>
  );
};

export default Task02;

