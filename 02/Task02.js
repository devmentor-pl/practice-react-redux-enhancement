import React from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";

const ComponentWithPopup = withPopup("Hello!")(Welcome);

const Task02 = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const closeWindow = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <section>
      <h2>Task 02</h2>
      <ComponentWithPopup isOpen={isOpen} closeWindow={closeWindow} />
    </section>
  );
};

export default Task02;
