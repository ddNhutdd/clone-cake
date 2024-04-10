import React from 'react';
import PropTypes from 'prop-types';
import css from './switch.module.scss';

function Switch(props) {
	const {
		checked,
		setChecked
	} = props;

	const swithClickHandle = () => setChecked(state => !state);
	const renderClassChecked = () => checked ? css.active : '';

	return (
		<div
			onClick={swithClickHandle}
			className={`${css.switch} ${renderClassChecked()}`}
		>
			<div className={css.switch__ball}></div>
		</div>
	)
}

Switch.propTypes = {
	checked: PropTypes.bool,
	setChecked: PropTypes.func
}

export default Switch
