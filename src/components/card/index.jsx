import React from 'react';
import css from './card.module.scss';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useTheme } from 'src/context/dark-theme';

const Card = forwardRef((props, ref) => {
	const {
		children,
		className,
		classNameContent,
	} = props;

	const { isDarkMode } = useTheme();
	const classTheme = isDarkMode ? css.dark : '';

	return (
		<div ref={ref} className={`${css.card} ${className} ${classTheme}`}>
			<div className={`${css.card__content} ${classNameContent}`}>
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
