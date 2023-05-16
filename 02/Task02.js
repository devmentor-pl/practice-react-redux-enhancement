import React, { useState } from "react";

import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";

const ComponentWithPopup = withPopup({
  overlayStyles: { backgroundColor: "rgba(0, 0, 100, .4)" },
  asideStyles: { padding: "2rem 4rem" },
})(Welcome);

const Task02 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <h2>Task 02</h2>
      <ComponentWithPopup isOpen={isOpen} onClose={handleClose} />
    </section>
  );
};

export default Task02;
