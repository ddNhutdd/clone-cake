import Button, { buttonClassesType } from 'src/components/button';
import css from './panel.module.scss';
import { useTheme } from 'src/context/dark-theme';

function Panel() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.panel} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.panel__left}>
					<div className={css.panel__left__header}>
						Trading Reward
					</div>
					<div className={css.panel__left__subHeader}>
						for  Top Traders!
					</div>
					<div className={css.panel__left__title}>
						3% trading fee rebate up for grab!
					</div>
					<div className={css.panel__left__text}>
						Earn CAKE while trading your favorite tokens on PancakeSwap by being the top traders!
					</div>
					<div className={css.panel__action}>
						<Button>
							Start Trading
						</Button>
						<Button
							type={buttonClassesType.outline}
						>
							How to Earn?
						</Button>
					</div>
				</div>
				<div className={css.panel__right}>
					<img className={css.panel__right__mainImage} src="/src/assets/imgs/top-traders-banner.webp" alt="dk" />
					<div className={css.panel__backgroundImageRightContainer}>
						<img src="https://pancakeswap.finance/images/trading-reward/top-traders-6.png" alt="dk" />
						<img src="https://pancakeswap.finance/images/trading-reward/top-traders-4.png" alt="dk" />
						<img src="https://pancakeswap.finance/images/trading-reward/top-traders-3.png" alt="dk" />
						<img src="https://pancakeswap.finance/images/trading-reward/top-traders-2.png" alt="dk" />
						<img src="https://pancakeswap.finance/images/trading-reward/top-traders-5.png" alt="dk" />
					</div>
				</div>
			</div>
			<div className={css.panel__backgroundImageLeftContainer}>
				<img src="https://pancakeswap.finance/images/trading-reward/top-traders-1.png" alt="dk" />
				<img src="https://pancakeswap.finance/images/trading-reward/top-traders-2.png" alt="dk" />
			</div>
		</div>
	)
}

export default Panel;