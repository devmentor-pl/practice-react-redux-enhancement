import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from "./../src/hoc/withPopup";

const WelcometWithPopup = withPopup("withPopup")(Welcome);

const Task02 = () => {
  return (
    <section>
      <h2>Task 02</h2>
      <WelcometWithPopup bg="red" />
    </section>
  );
};

export default Task02;

