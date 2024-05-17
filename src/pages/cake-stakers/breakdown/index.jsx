import Card from 'src/components/card';
import css from './breakdown.module.scss';
import Pill, { pillType } from 'src/components/pill';
import V3 from './v3';
import EthPill from './eth-pill';

function Breakdown() {
	return (
		<div className={css.breakdown}>
			<div className={css.container}>
				<div className={css.breakdown__title}>
					Rewards Breakdown
				</div>
				<div className={css.breakdown__subTitle}>
					Round #1 | Mar 1, 2024, 07:00 - Apr 1, 2024, 06:59
				</div>
				<Card
					className={css.breakdown__card}
					classNameContent={css.breakdown__cardContent}
				>
					<div className={css.breakdown__header}>
						<div className={css.breakdown__row}>
							<div className={css.breakdown__cell}>
								TRADING PAIR
							</div>
							<div className={css.breakdown__cell}>
								YOUR VOLUME
							</div>
							<div className={css.breakdown__cell}>
								YOUR TRADING FEE
							</div>
							<div className={css.breakdown__cell}>
								REWARD EARNED
							</div>
						</div>
					</div>
					<div className={css.breakdown__body}>
						<div className={css.breakdown__row}>
							<div className={css.breakdown__cell}>
								<div
									className={css.breakdown__firstData}
								>
									<div className={css.breakdown__firstData__img}>
										<img src="https://tokens.pancakeswap.finance/images/eth/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.png" alt="dk" />
										<img src="https://tokens.pancakeswap.finance/images/eth/0xae78736Cd615f374D3085123A210448E74Fc6393.png" alt="dk" />
									</div>
									<div className={css.breakdown__firstData__text}>
										USDT-USDC LP
									</div>
									<Pill
										type={pillType.outline}
										className={css.breakdown__firstData__pill}
									>
										0.01%
									</Pill>
									<div>
										<V3 />
									</div>
									<EthPill />
								</div>
							</div>
							<div className={css.breakdown__cell}>
								0.01%
							</div>
							<div className={css.breakdown__cell}>
								0.01%
							</div>
							<div className={css.breakdown__cell}>
								0.01%
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div >
	)
}

export default Breakdown