import React from 'react';
import css from './switch-theme.module.scss';
import MoonIcon from 'src/assets/icons/moon.icon';
import SunIcon from 'src/assets/icons/sun.icon';
import PropTypes from 'prop-types';
import SunActiveIcon from 'src/assets/icons/sun-active.icon';
import { useTheme } from 'src/context/dark-theme';
import MoonActiveIcon from 'src/assets/icons/moon-active.icon';

function SwitchTheme() {
	const { isDarkMode: active, toggleTheme: change } = useTheme();
	const activeClass = active ? css.dark : '';


	const renderActive = function () {
		return active ? css['active'] : '';
	};
	const switchClickHandle = function () {
		change((s) => !s);
	};
	const renderRingContent = function () {
		return active ? <MoonActiveIcon /> : <SunActiveIcon />

	};

	return (
		<div
			onClick={switchClickHandle}
			className={`${css['switchThemeContainer']} ${activeClass}`}
		>
			<div
				className={`${css['switchThemeContainer__item']} ${css['switchThemeContainer__left']}`}
			>
				{active ? <SunIcon /> : <SunActiveIcon />}
			</div>
			<div
				className={`${css['switchThemeContainer__item']} ${css['switchThemeContainer__right']}`}
			>
				{active ? <MoonIcon /> : <MoonActiveIcon />}
			</div>
			<div
				className={
					css['switchThemeContainer__ringContainer'] +
					` ${renderActive()}`
				}
			>
				<div className={css['switchThemeContainer__ring']}>
					{renderRingContent()}
				</div>
			</div>
		</div>
	);
}

SwitchTheme.defaultProps = {
	active: false,
};
SwitchTheme.propTypes = {
	active: PropTypes.bool,
	change: PropTypes.func,
};

export default SwitchTheme;
