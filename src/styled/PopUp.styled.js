import styled from 'styled-components'

const StyledPopUp = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 600px;
	height: 200px;
	background-color: ${props => props.background};
	opacity: ${props => props.opacity};
	border: 1px solid grey;
	border-radius: 10px;

	h1 {
		font-size: 35px;
	}

	button {
		position: absolute;
		top: 10px;
		cursor: pointer;
		right: 10px;
		width: 20px;
		height: 20px;
		display: flex;
		align-content: center;
		justify-content: center;
		border-radius: 50%;
	}
`

export default StyledPopUp
