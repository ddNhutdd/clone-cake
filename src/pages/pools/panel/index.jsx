import Card from 'src/components/card';
import css from './panel.module.scss';
import Button from 'src/components/button';

function Panel() {
	return (
		<div className={css.panel}>
			<div className={css.container}>
				<div className={css.panel__left}>
					<div className={css.panel__header}>
						Syrup Pools
					</div>
					<div className={css.panel__headerSub}>
						Just stake some tokens to earn.
						High APR, low risk.
					</div>
				</div>

				<div className={css.panel__right}>
					<div className={css.panel__right__image}>
						<img
							src="https://pancakeswap.finance/images/pool/pool-vecake-card-icon.png"
							alt="dk"
						/>
					</div>
					<Card className={css.panel__right__content}>
						<div className={css.panel__right__title}>
							CAKE Staking
						</div>
						<div className={css.panel__right__value}>
							Up to 27.02% APR
						</div>
						<div className={css.panel__right__line}></div>
						<p className={css.panel__right__text}>
							Stake CAKE to get veCAKE, earn up to 27.02% APR from veCAKE pool and revenue sharing.
						</p>
						<p className={css.panel__right__text}>
							Unlock other benefits like voting incentives, yield boosting, IFO, and so much more...
						</p>
						<Button>
							Go to veCAKE staking
						</Button>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Panel;