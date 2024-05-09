import React from 'react';
import PropTypes from 'prop-types';
import css from './pill-square.module.scss';

function PillSquare(props) {
	const { children, className, style } = props;
	return <div style={style} className={`${css.pillSquare} ${className}`}>{children}</div>;
}

PillSquare.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default PillSquare;
