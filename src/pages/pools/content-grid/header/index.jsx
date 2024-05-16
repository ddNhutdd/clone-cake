import { useTheme } from 'src/context/dark-theme';
import css from './header.module.scss';

function Header() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.header} ${darkClass}`}>
			<div className={css.header__left}>
				<div className={css.header__title}>
					Stake CAKE
				</div>
				<div className={css.header__small}>
					This product has been upgraded
				</div>
			</div>
			<div className={css.header__right}>
				<div className={css.header__right__large}>
					<img src="https://pancakeswap.finance/images/cakeGrey.png" alt="dk" />
				</div>
				<div className={css.header__right__small}>
					<img src="https://pancakeswap.finance/images/autorenew-disabled.png" alt="dk" />
				</div>
			</div>
		</div>
	)
}

export default Header