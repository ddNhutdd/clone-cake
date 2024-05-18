import { useTheme } from 'src/context/dark-theme';
import css from './v3.module.scss';

function V3() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.v3} ${darkClass}`}>
			V3
		</div>
	)
}

export default V3