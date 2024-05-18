import HeaderComponent from 'src/components/header-component';
import css from './top-trader.module.scss';
import HeaderComponentList7 from 'src/constants/header-component-list-7';
import Panel from './panel';
import Reward from './reward';
import Pool from '../cake-stakers/pool';
import Leaderboard from './leaderboard';
import HowToEarn from '../cake-stakers/how-to-earn';
import Breakdown from '../cake-stakers/breakdown';
import Question from '../cake-stakers/question';

function TopTrader() {
	return (
		<div className={css.topTrader}>
			<HeaderComponent list={HeaderComponentList7} />
			<Panel />
			<Reward />
			<Pool
				imageLeft={<img
					src='https://pancakeswap.finance/images/trading-reward/top-traders-pool-1.png'
					className={css.poolImage}
				/>}
				data={[
					["Starts", "On Jan 25, 2024, 07:00"],
					["Ends", "Mar 1, 2024, 07:00"],
					["To win", "Rank #100 or higher"],
					["Rewarding", "3% of the trading fee"],
					["Total volume generated", "$8,932,019.970"],
					["Number of eligible pairs", "38"]
				]}
			/>
			<Leaderboard />
			<HowToEarn />
			<Breakdown />
			<Question />
		</div>
	)
}

export default TopTrader