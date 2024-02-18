import React, { useState } from 'react'
import StyledPopUp from '../styled/PopUp.styled'

const withPopup = (Component, opacity, bgColor) => {
	return props => {
		const [isOpen, setIsOpen] = useState(true)

		if (isOpen) {
			return (
				<section>
					<StyledPopUp opacity={opacity} background={bgColor}>
						<Component {...props} />
						<button
							onClick={() => {
								setIsOpen(false)
							}}>
							X
						</button>
					</StyledPopUp>
				</section>
			)
		}
		return (
			<section>
				<Component {...props} />
			</section>
		)
	}
}

export default withPopup
