import React from 'react';
import PropTypes from 'prop-types';
import css from './input-3.module.scss';

function Input3(props) {
	const {
		value,
		className,
		onChange,
		placeholder,
		style
	} = props;

	return (
		<input
			type='text'
			className={`${css.input3} ${className}`}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			style={style}
		/>
	);
}

Input3.propTypes = {
	value: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object
};

export default Input3;
