import css from './input-2.module.scss';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input2 = forwardRef((props, ref) => {
	const { value, icon, className } = props;

	return (
		<div className={`${css.input2} ${className}`}>
			<input ref={ref} value={value} type='text' onChange={() => { }} />
			{icon && <div>{icon}</div>}
		</div>
	);
});

Input2.propTypes = {
	value: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Input2;
