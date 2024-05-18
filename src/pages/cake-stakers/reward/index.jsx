import Card, { cardType } from 'src/components/card';
import css from './reward.module.scss';
import Button from 'src/components/button';
import { useTheme } from 'src/context/dark-theme';

function Reward() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.reward} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.reward__title}>
					Your Trading Reward
				</div>
				<div>
					<Card
						className={css.reward__card}
						classNameContent={css.reward__cardContent}
						type={cardType.flat}
					>
						<div className={css.reward__cardContent__top}>
							You have no active Pancake Profile.
						</div>
						<div className={css.reward__cardContent__bot}>
							Create a Pancake Profile to start earning from trades
						</div>
						<div className={css.reward__cardContent__img}>
							<img src="/src/assets/imgs/create-profile.webp" alt="dk" />
						</div>
						<div className={css.reward__action}>
							<Button>
								Activate Profile
							</Button>
						</div>
					</Card>
				</div>
			</div>
			<div className={css.reward__backgroundImage}>
				<div className={css.reward__backgroundImage__left}>
					<img src="https://pancakeswap.finance/images/trading-reward/left-bunny.png" alt="dk" />
				</div>
				<div className={css.reward__backgroundImage__topButter}>
					<img src="https://pancakeswap.finance/images/trading-reward/butter.png" alt="dk" />
				</div>
				<div className={css.reward__backgroundImage__topCoin}>
					<img src="https://pancakeswap.finance/images/trading-reward/coin.png" alt="dk" />
				</div>
				<div className={css.reward__backgroundImage__rightFace}>
					<img src="https://pancakeswap.finance/images/trading-reward/right-bunny.png" alt="dk" />
				</div>
				<div className={css.reward__backgroundImage__botHeart}>
					<img src="https://pancakeswap.finance/images/trading-reward/love-butter.png" alt="dk" />
				</div>
			</div>
		</div >
	)
}

export default Reward