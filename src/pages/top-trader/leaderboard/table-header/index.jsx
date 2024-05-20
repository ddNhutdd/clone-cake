import { useTheme } from 'src/context/dark-theme';
import css from './table-header.module.scss';

function TableHeader() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.tableHeader} ${darkClass}`}>
			<div className={css.tableHeader__row}>
				<div className={css.tableHeader__cell}>
					MY RANK
				</div>
				<div className={css.tableHeader__cell}>
					TRADING VOLUME
				</div>
				<div className={css.tableHeader__cell}>
					TOTAL REWARD
				</div>
			</div>
		</div>
	)
}

export default TableHeader