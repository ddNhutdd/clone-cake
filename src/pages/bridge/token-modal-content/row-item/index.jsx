import { useTheme } from 'src/context/dark-theme';
import css from './row-item.module.scss';

function RowItem() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.rowItem} ${darkClass}`}>
			<div className={css.rowItem__img}>
				<img
					src="https://icons-ckg.pages.dev/lz-dark/tokens/cake.svg"
					alt="dk"
				/>
			</div>
			<div className={css.rowItem__row}>
				<div className={css.rowItem__top}>
					<div>opBNB Mainnet</div>
					<div>-</div>
				</div>
				<div className={css.rowItem__bottom}>
					<div>Cake</div>
					<div>-</div>
				</div>
			</div>
		</div>
	)
}

export default RowItem