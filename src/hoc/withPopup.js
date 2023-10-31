import React from 'react';

const withPopup = (Welcome) => (PopupContainer) => {
    return class Popup extends React.Component {
        render() {
            const { clickBtn, isWindowClosed } = this.props

            return (
                <section>
                    {
                        isWindowClosed
                            ?
                            <Welcome />
                            :
                            <PopupContainer
                                clickBtn={clickBtn}
                            >
                                <Welcome />
                            </PopupContainer>
                    }
                </section>
            )
        }
    }
}


export default withPopup;