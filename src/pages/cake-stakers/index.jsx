import HeaderComponent from 'src/components/header-component';
import css from './cake-stakers.module.scss';
import HeaderComponentList7 from 'src/constants/header-component-list-7';
import Trading from './trading';
import Reward from './reward';
import Pool from './pool';
import HowToEarn from './how-to-earn';
import Breakdown from './breakdown';
import Question from './question';

function CakeStakers() {
	return (
		<div className={css.cakeStakers}>
			<HeaderComponent list={HeaderComponentList7} />
			<Trading />
			<Reward />
			<Pool
				imageLeft={
					<img
						src='https://pancakeswap.finance/images/trading-reward/pool-1.png'
						className={css.poolLeftImage}
					/>
				}
				imageRight={`https://pancakeswap.finance/images/trading-reward/pool-2.png`}
				data={[
					["Starts", "On Mar 1, 2024, 07:00"],
					["Ends", "Apr 1, 2024, 06:59"],
					["Total volume generated", "$37,833,550.868"],
					["Total reward to distribute", "35in CAKE"],
					["Number of eligible pairs", "97"]
				]}
			/>
			<HowToEarn />
			<Breakdown />
			<Question />
		</div>
	)
}

export default CakeStakers