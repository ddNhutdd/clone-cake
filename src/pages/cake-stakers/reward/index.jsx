import Card, { cardType } from 'src/components/card';
import css from './reward.module.scss';
import Button from 'src/components/button';

function Reward() {
	return (
		<div className={css.reward}>
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
		</div >
	)
}

export default Reward