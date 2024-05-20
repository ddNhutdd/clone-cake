import { useTheme } from 'src/context/dark-theme';
import css from './row.module.scss';
import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';
import PancakeUnknowDarkIcon from 'src/assets/icons/pancake-unknow-dark.icon';

function Row() {
	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.row} ${darkClass}`}>
			<div className={css.row__cell}>
				<div className={css.row__cell__myRank}>
					<div className={css.row__cell__myRank__rank}>--</div>
					<div className={css.row__cell__myRank__icon}>
						{
							isDarkMode ? <PancakeUnknowDarkIcon /> : <PancakeUnknowIcon />
						}
					</div>
					<div className={css.row__cell__myRank__address}>
						0x6a...7b01
					</div>
				</div>
			</div>
			<div className={css.row__cell}>
				$0.00
			</div>
			<div className={css.row__cell}>
				<div>
					$0.00
				</div>
				<div className={css.row__small}>
					~0.00 CAKE
				</div>
			</div>
		</div>
	)
}

export default Row;