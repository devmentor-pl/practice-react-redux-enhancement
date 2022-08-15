import React, { useState } from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";
import Popup from "../src/components/Popup";

const ComponentWithPopup = withPopup(Welcome())(Popup);

const Task02 = () => {
  const [openPopup, setOpenPopup] = useState(true);

  return (
    <section>
      <h2>Task 02</h2>
      <ComponentWithPopup
        isOpen={openPopup}
        message={Welcome()}
        onClose={() => setOpenPopup(false)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "grey",
          color: "pink",
          textAlign: "center",
          padding: "15px 5px",
        }}
      />
    </section>
  );
};

export default Task02;
