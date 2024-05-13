import { useTheme } from 'src/context/dark-theme';
import css from './token.module.scss';
import PancakeUnknow from 'icons/pancake-unknow.icon';
import PancakeUnknowDarkIcon from 'icons/pancake-unknow-dark.icon';

function Token() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.token} ${darkClass}`}>
			<div className={css.token__header}>
				<div className={css.token__header__item}>
					<div className={css.token__title}>
						Token Vesting
					</div>
					<div className={css.token__small}>
						You have no tokens available for claiming
					</div>
				</div>
				<div className={css.token__header__item}>
					<img src={`https://pancakeswap.finance/images/ifos/vesting/not-tokens.svg`} alt="pancake" />
				</div>
			</div>
			<div className={css.token__body}>
				<div className={css.token__body__image}>
					{
						darkClass ? <PancakeUnknowDarkIcon /> : <PancakeUnknow />
					}

				</div>
				<div className={css.token__body__main}>
					<div className={css.token__body__title}>
						You have no tokens available for claiming
					</div>
					<div className={css.token__body__small}>
						Participate in our next IFO. and remember to lock your CAKE to increase your allocation!
					</div>
					<div className={`--link ${css.token__body__navigate}`}>
						How does it work? »
					</div>
				</div>
			</div>
		</div>
	)
}

export default Token