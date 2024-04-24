import React from 'react';
import PropTypes from 'prop-types';
import css from './pill.module.scss';

export const pillType = {
	outline: 'outline',
	success: 'success',
	fail: 'fail',
	outlineSky: 'outlineSky'
}

function Pill(props) {
	const {
		children,
		type,
		className
	} = props;

	const renderType = () => {
		switch (type) {
			case pillType.outline:
				return css.outline;
			case pillType.success:
				return css.success;
			case pillType.fail:
				return css.fail;
			case pillType.outlineSky:
				return css.outlineSky;
			default:
				break;
		}
	}

	return (
		<div className={`${css.pill} ${renderType()} ${className}`}>
			{children}
		</div>
	);
}

Pill.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(Object.values(pillType))
};

export default Pill;
