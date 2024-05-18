import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';
import { FaXTwitter } from "react-icons/fa6";
import Card from 'src/components/card';
import { NavLink } from 'react-router-dom';
import css from './reward.module.scss';
import Button, { buttonClassesType } from 'src/components/button';

function Reward() {
	return (
		<div className={css.reward}>
			<div className={css.container}>
				<div className={css.reward__header}>
					Your Trading Reward
				</div>
				<div className={css.reward__cardContainer}>
					<Card
						className={css.reward__card}
					>
						<div className={css.reward__cardName}>
							Current Period
						</div>
						<div className={css.reward__cardIcon}>
							<PancakeUnknowIcon />
						</div>
						<div className={css.reward__cardComingSoon} >
							Coming Soon
						</div>
						<div className={css.reward__cardText}>
							Currently there is no active trading reward campaign. Check back later or follow our social channels.
						</div>
						<div className={css.reward__cardLink}>
							<NavLink>
								<FaXTwitter />
								+Follow For New Updates
							</NavLink>
						</div>
					</Card>
					<Card
						className={css.reward__card}
					>
						<div className={css.reward__cardName}>
							Previously Ended
						</div>
						<div className={css.reward__unclaimed}>
							YOUR UNCLAIMED TRADING REWARDS
						</div>
						<div className={css.reward__row}>
							<div>
								$0.00
							</div>
							<div>
								<Button type={buttonClassesType.disaled}>
									Claim All
								</Button>
							</div>
						</div>
						<div className={css.reward__estimate}>
							~0.00 CAKE
						</div>
						<div className={css.reward__total}>
							YOUR TOTAL TRADING REWARD
						</div>
						<div className={css.reward__value}>
							$0.00
						</div>
					</Card>
				</div>
			</div>
			<div className={css.reward__backgroundImage}>
				<img className={css.reward__backgroundImage__left} src="https://pancakeswap.finance/images/trading-reward/left-bunny.png" alt="dk" />
				<div className={css.reward__backgroundImage__coin}>
					<img src="https://pancakeswap.finance/images/trading-reward/coin.png" alt="dk" />
				</div>

				<div className={css.reward__backgroundImage__face}>
					<img src="https://pancakeswap.finance/images/trading-reward/right-bunny.png" alt="dk" />
				</div>
				<div className={css.reward__backgroundImage__ship}>
					<img src="https://pancakeswap.finance/images/trading-reward/boat.png" alt="dk" />
				</div>
			</div>
		</div >
	)
}

export default Reward