import React from "react";
import Welcome from "../components/Welcome";
import withPopup from "../hoc/withPopup";

const ComponentWithPopup = withPopup(
    "Open pop up",
    "yellow",
    "1px solid green"
)(Welcome);
class WelcomeContainer extends React.Component {
    state = { isOpen: false };

    componentDidMount() {
        this.id = setTimeout(() => {
            this.setState({ isOpen: true });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.id);
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <ComponentWithPopup
                isOpen={this.state.isOpen}
                toggleModal={this.toggleModal}
            />
        );
    }
}

export default WelcomeContainer;
