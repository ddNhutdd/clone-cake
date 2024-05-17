import Card from 'src/components/card';
import css from './breakdown.module.scss';
import EthPill from './eth-pill';
import BnbPill from './bnb-pill';
import ZkSyncPill from './zkSync-pill';
import ZkEvmPill from './zkEvm-pill';
import BasePill from './base-pill';
import ArbPill from './arb-pill';
import LineaPill from './linea-pill';

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
				<EthPill />
				<BnbPill />
				<ZkSyncPill />
				<ZkEvmPill />
				<BasePill />
				<ArbPill />
				<LineaPill />
				
				<Card
					className
					classNameContent
				>
					<div className={css.breakdown__header}>
						<div>
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
								<div>

								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div >
	)
}

export default Breakdown