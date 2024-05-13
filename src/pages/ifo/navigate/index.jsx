import { NavLink } from 'react-router-dom';
import css from './navigate.module.scss';
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import { useTheme } from 'src/context/dark-theme';

function Navigate() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.ifo__navigate} ${darkClass}`}>
			<div className={css.container}>
				<NavLink
					className={`--link ${css.ifo__navigate__link}`}
				>
					Apply to run an IFO!
					<ArrowSquareIcon />
				</NavLink>
			</div>
		</div>
	)
}

export default Navigate