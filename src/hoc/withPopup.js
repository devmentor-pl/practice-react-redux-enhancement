import React from 'react';

const withPopup = (color, opacity) => (WrappedComponent) => {
    const renderPopup = ({onClick, extraText}) => {
        return (
			<section
				style={{
					background: color,
					opacity: opacity,
					width: '300px',
					padding: '1rem',
					textAlign: 'center',
				}}
			>
				<WrappedComponent />
				<p>{extraText}</p>
				<button onClick={() => onClick()}>ZAMKNIJ X</button>
			</section>
		);
    }

    const renderWrappedComponent = () => {
        return <WrappedComponent>
        </WrappedComponent>
    }
    
    return class extends React.Component {
        render() {
            const {visible} = this.props;
            return visible ? renderPopup(this.props) : renderWrappedComponent();  
        }
    }
};


export default withPopup;