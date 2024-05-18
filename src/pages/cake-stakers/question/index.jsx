import Card from 'src/components/card';
import css from './question.module.scss';
import QuestionItem from './question-item';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'src/context/dark-theme';

function Question() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.question} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.question__title}>
					Still Got Questions?
				</div>
				<Card>
					<div className={css.question__item}>
						<QuestionItem
							title={`Why my traded volume was not tracked?`}
						>
							<ul>
								<li>
									Volume numbers take time to update and are subject to SubGraph delays. Please check back later
								</li>
								<li>
									Please ensure your trade is routed through the trading pairs eligible for trading rewards.Check out
									{" "}
									<NavLink>
										this tutorial
									</NavLink>
									{" "}
									for how to view your trading routes
								</li>
								<li>
									If you are trading on Ethereum, please use the same wallet address eligible for the trading reward program
								</li>
								<li>
									If your trading volume within a pair is too small, you may not be eligible to claim any rewards
								</li>
								<li>
									Using third-party trading aggregators may result in trades being routed through other liquidity providers and not being tracked
								</li>
							</ul>
						</QuestionItem>
					</div>
					<div className={css.question__item}>
						<QuestionItem
							title="Why I traded a lot but only received a very small amount of rewards"
						>
							<ul>
								<li>
									The amount of the trading reward is based on the trading fee paid in those trades.If your trades are routed through pairs with a low fee tier, for example, 0.01%, you are paying a very small fee for your trade. Therefore the number of rewards will become lower accordingly.
								</li>
							</ul>
						</QuestionItem>
					</div>
					<div className={css.question__item}>
						<QuestionItem
							title="My address was previously eligible. Why is it showing not eligible now?"
						>
							<ul>
								<li>
									Each campaign has its own eligibility requirements, like the unlock time of the CAKE staking position.
								</li>
								<li>
									You may need to extend your locked CAKE staking position. Please follow the instructions on the page.
								</li>
							</ul>
						</QuestionItem>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Question;