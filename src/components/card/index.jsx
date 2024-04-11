import React from 'react';
import css from './card.module.scss';
import PropTypes from 'prop-types';

function Card(props) {
	const {children, className, classNameContent} = props;
	return (
		<div className={`${css.card} ${className}`}>
			<div className={`${css.card__content} ${classNameContent}`}>
				{children}
			</div>
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	classNameContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Card;
