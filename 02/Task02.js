import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';
import PopupContainer from '../src/components/PopupContainer';

const ComponentWithPopup = withPopup(Welcome)(PopupContainer);

class Task02 extends React.Component {
    state = {
        isWindowClosed: false
    }

    closePopup = (e) => {
        this.setState({ isWindowClosed: true })
    }

    render() {
        return (
            <section>
                <h2>Task 02</h2>
                <ComponentWithPopup
                    isWindowClosed={this.state.isWindowClosed}
                    clickBtn={this.closePopup}
                />
            </section>
        )
    }
}


export default Task02;

