import React from 'react';
import css from './card.module.scss';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useTheme } from 'src/context/dark-theme';

export const cardType = {
	default: 'default',
	blueEffect: 'blueEffect',
	flat: 'flat'
}

const Card = forwardRef((props, ref) => {
	const {
		children,
		className,
		classNameContent,
		type = cardType.default
	} = props;

	// phần dark theme
	const { isDarkMode } = useTheme();
	const classTheme = isDarkMode ? css.dark : '';

	// render card type 
	const renderCardType = () => {
		switch (type) {
			case cardType.blueEffect:
				return css.blueEffect;

			case cardType.flat:
				return css.flat;

			default:
				break;
		}
	}

	return (
		<div
			ref={ref}
			className={`
				${css.card} 
				${renderCardType()}
				${className} 
				${classTheme}
		`}>
			<div
				className={`
				${css.card__content}
				${classNameContent}
			`}>
				{children}
			</div>
		</div>
	);
})

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	classNameContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Card;
