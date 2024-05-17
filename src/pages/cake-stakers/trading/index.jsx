import Button, { buttonClassesType } from 'src/components/button';
import css from './trading.module.scss';

function Trading() {
	return (
		<div className={css.trading}>
			<div className={css.container}>
				<div className={css.trading__left}>
					<div className={css.trading__title}>
						Trading Reward
					</div>
					<div className={css.trading__subTitle}>
						10% trading rebate to be earned!
					</div>
					<div className={css.trading__text}>
						Earn CAKE while trading your favorite tokens on PancakeSwap.
					</div>
					<div className={css.trading__action}>
						<Button>
							Start Trading
						</Button>
						<Button
							type={buttonClassesType.outline}
						>
							How to Earn
						</Button>
					</div>
				</div>
				<div className={css.trading__right}>
					<img src="/src/assets/imgs/trading-reward-banner-bunny.webp" alt="dk" />
				</div>
				<div className={css.trading__backgroundImage}>
					<img
						src="https://pancakeswap.finance/images/trading-reward/star2.png"
						alt="dk"
						className={css.trading__starTop}
					/>
					<img
						src="https://pancakeswap.finance/images/trading-reward/star1.png"
						alt="dk"
						className={css.trading__starRight}
					/>
					<img
						src="https://pancakeswap.finance/images/trading-reward/star3.png"
						alt="dk"
						className={css.trading__starBot}
					/>
					<img
						src="https://pancakeswap.finance/images/trading-reward/butter-1.png"
						alt="dk"
						className={css.trading__butterTop}
					/>
					<img
						src="https://pancakeswap.finance/images/trading-reward/butter-2.png"
						alt="dk"
						className={css.trading__butterBot}
					/>
				</div>
			</div>

		</div>
	)
}

export default Trading