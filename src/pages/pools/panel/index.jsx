import Card, { cardType } from 'src/components/card';
import css from './panel.module.scss';
import Button, { buttonClassesType } from 'src/components/button';
import { useTheme } from 'src/context/dark-theme';

function Panel() {
	// phần dark theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.panel} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.panel__left}>
					<div className={css.panel__header}>
						Syrup Pools
					</div>
					<div className={css.panel__headerSub}>
						<div>
							Just stake some tokens to earn.
						</div>
						<div>
							High APR, low risk.
						</div>
					</div>
				</div>
				<div className={css.panel__right}>
					<div className={css.panel__right__image}>
						<img
							src="https://pancakeswap.finance/images/pool/pool-vecake-card-icon.png"
							alt="dk"
						/>
					</div>
					<Card type={cardType.flat} className={css.panel__right__content}>
						<div className={css.panel__right__cardHeader}>
							<div className={css.panel__right__title}>
								CAKE Staking
							</div>
							<div className={css.panel__right__value}>
								Up to 27.02% APR
							</div>
						</div>
						<div className={css.panel__right__line}></div>
						<div className={css.panel__right__cardBody}>
							<p className={css.panel__right__text}>
								Stake CAKE to get veCAKE, earn up to 27.02% APR from veCAKE pool and revenue sharing.
							</p>
							<p className={css.panel__right__text}>
								Unlock other benefits like voting incentives, yield boosting, IFO, and so much more...
							</p>
							<Button
								type={buttonClassesType.primaryPuple}
								style={{ width: '100%' }}
							>
								Go to veCAKE staking
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Panel;