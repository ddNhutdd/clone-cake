import React from 'react';
import PropTypes from 'prop-types';
import css from './pill.module.scss';
import { useTheme } from 'src/context/dark-theme';

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
		className,
		style
	} = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

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
		<div style={style} className={`${css.pill} ${renderType()} ${darkClass} ${className} `}>
			{children}
		</div>
	);
}

Pill.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(Object.values(pillType))
};

export default Pill;
