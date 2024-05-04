import React from 'react';
import PropTypes from 'prop-types';
import css from './switch.module.scss';
import { useTheme } from 'src/context/dark-theme';

function Switch(props) {
	const { isDarkMode } = useTheme();
	const { checked, setChecked } = props;

	const swithClickHandle = () => setChecked((state) => !state);
	const renderClassChecked = () => checked ? css.active : '';
	const renderDarkTheme = () => isDarkMode ? css.dark : ''

	return (
		<div
			onClick={swithClickHandle}
			className={`${css.switch} ${renderClassChecked()} ${renderDarkTheme()}`}
		>
			<div className={css.switch__ball}></div>
		</div>
	);
}

Switch.propTypes = {
	checked: PropTypes.bool,
	setChecked: PropTypes.func,
};

export default Switch;
