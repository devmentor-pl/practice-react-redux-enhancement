import React from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";

const ComponentWithPopup = withPopup("#924E7D", "0,4", "400px")(Welcome);

class Task02 extends React.Component {
  state = {
    isClose: false,
  };

  toggle = () => {
    this.setState({ isClose: true });
  };

  render() {
    return (
      <>
        <h2>Task 02</h2>
        <ComponentWithPopup
          isClose={this.state.isClose}
          onToggle={this.toggle}
        />
      </>
    );
  }
}

export default Task02;
