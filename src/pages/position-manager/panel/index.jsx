import { useTheme } from 'src/context/dark-theme';
import Bottom from './bottom';
import css from './panel.module.scss';
import Top from './top';

function Panel() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.panel} ${darkClass}`}>
			<div className={css.container}>
				<Top />
				<Bottom />
			</div>
		</div>
	)
}

export default Panel