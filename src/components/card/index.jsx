import React from 'react';
import css from './card.module.scss';
import PropTypes from 'prop-types'

function Card(props) {
	const {
		children
	} = props;
	return (
		<div className={css.card}>
			<div className={css.card__content}>
				{children}
			</div>
		</div>
	)
}

Card.propTypes = {
	children: PropTypes.node
}

export default Card;