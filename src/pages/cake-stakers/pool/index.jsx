import Card, { cardType } from 'src/components/card';
import css from './pool.module.scss';
import Button from 'src/components/button';

function Pool() {
	return (
		<div className={css.pool}>
			<div className={css.container}>
				<Card
					type={cardType.flat}
					className={css.pool__card}
					classNameContent={css.pool__cardContent}
				>
					<div className={css.pool__cardContent__title}>
						Current Reward Pool
					</div>
					<div className={css.pool__cardContent__row}>
						<div>
							Starts
						</div>
						<div>
							On Mar 1, 2024, 07:00
						</div>
					</div>
					<div className={css.pool__cardContent__row}>
						<div>
							Ends
						</div>
						<div>
							Apr 1, 2024, 06:59
						</div>
					</div>
					<div className={css.pool__cardContent__row}>
						<div>
							Total volume generated
						</div>
						<div>
							$37,833,550.868
						</div>
					</div>
					<div className={css.pool__cardContent__row}>
						<div>
							Total reward to distribute
						</div>
						<div>
							35 in CAKE
						</div>
					</div>
					<div className={css.pool__cardContent__row}>
						<div>
							Number of eligible pairs
						</div>
						<div>
							97
							<Button
								className={`${css[`pool--button`]} ${css.pool__inlineButton}`}
							>
								View Pairs
							</Button>
						</div>
					</div>
					<div className={css.pool__cardContent__action}>
						<Button className={`${css[`pool--button`]}`}>
							View Pairs
						</Button>
					</div>
					<img
						src="https://pancakeswap.finance/images/trading-reward/pool-2.png"
						alt="dk"
						className={css.pool__face}
					/>
				</Card>
				<div className={css.pool__backgroundImge}>
					<img
						className={css.pool__chain}
						src="https://pancakeswap.finance/images/trading-reward/pool-1.png"
						alt="dk"
					/>
				</div>
			</div>
		</div >
	)
}

export default Pool