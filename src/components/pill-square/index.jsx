import React from 'react';
import PropTypes from 'prop-types';
import css from './pill-square.module.scss';

function PillSquare(props) {
	const {children, className} = props;
	return <div className={`${css.pillSquare} ${className}`}>{children}</div>;
}

PillSquare.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default PillSquare;
