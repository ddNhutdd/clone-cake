import Card, { cardType } from 'src/components/card';
import css from './first-item.module.scss';
import Header from '../header';
import Footer from '../footer';
import Button from 'src/components/button';
import { useTheme } from 'src/context/dark-theme';

function FirstItem() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<Card
			type={cardType.blueEffect}
			className={`${css.firstItem} ${darkClass}`}
			classNameContent={css.firstItemContent}
		>
			<Header />
			<div className={css.firstItemContent__main}>
				<div className={css.firstItemContent__main__panel}>
					<div className={css.firstItemContent__main__panel__img}>
						<img src="https://pancakeswap.finance/images/cake-staking/token-vecake.png" alt="dk" />
					</div>
					<div className={css.firstItemContent__main__panel__content}>
						Stake & Lock for veCAKE, to enjoy more rewards & benefit!
					</div>
				</div>
				<div className={css.firstItemContent__main__title}>
					Explore veCAKE Benefits:
				</div>
				<Card
					className={css.firstItemContent__main__card}
					classNameContent={css.firstItemContent__main__cardContent}
				>
					<div className={css.firstItemContent__main__row}>
						<div className={css[`firstItem--rowImage`]}>
							<img src="https://pancakeswap.finance/images/cake-staking/benefit-earn-cake.png" alt="dk" />
						</div>
						<div>
							<div className={css[`firstItem--rowTitle`]}>
								Earn CAKE
							</div>
							<div className='flex items-center gap-1'>
								<div className={css[`firstItem--rowContent`]}>
									Total Distributed
								</div>
								<div className={css[`firstItem--rowBold`]}>
									1,247,348.68 CAKE
								</div>
							</div>
						</div>
					</div>
					<div className={css.firstItemContent__main__line} />
					<div className={css.firstItemContent__main__row}>
						<div className={css[`firstItem--rowImage`]}>
							<img src="https://pancakeswap.finance/images/cake-staking/benefit-gauges-voting.png" alt="dk" />
						</div>
						<div>
							<div className={css[`firstItem--rowTitle`]}>
								Gauges Voting
							</div>
							<div className={css[`firstItem--rowContent`]}>
								Number of Gauges to Vote
								{" "}
								<span className={css[`firstItem--rowBold`]}>400</span>
							</div>
						</div>
					</div>
					<div className={css.firstItemContent__main__line} />
					<div className={css.firstItemContent__main__row}>
						<div className={css[`firstItem--rowImage`]}>
							<img src="https://pancakeswap.finance/images/cake-staking/benefit-farm-boost.png" alt="dk" />
						</div>
						<div>
							<div className={css[`firstItem--rowTitle`]}>
								Farm Boost
							</div>
							<div className={css[`firstItem--rowContent`]}>
								Farming Boost Up To
								{" "}
								<span className={css[`firstItem--rowBold`]}>2.5X</span>
							</div>
						</div>
					</div>
					<div className={css.firstItemContent__main__line} />
					<div className={css.firstItemContent__main__row}>
						<div className={css[`firstItem--rowImage`]}>
							<img src="https://pancakeswap.finance/images/cake-staking/benefit-snapshot-voting.png" alt="dk" />
						</div>
						<div className={`${css[`firstItem--rowTitle`]} ${css[`firstItem--borderRight`]}`}>
							Snapshot Voting
						</div>
						<div className={css.firstItemContent__main__horLine} />
						<div className={css[`firstItem--rowImage`]}>
							<img src="https://pancakeswap.finance/images/cake-staking/benefit-ifo.png" alt="dk" />
						</div>
						<div className={css[`firstItem--rowTitle`]}>
							IFO and more
						</div>
					</div>
				</Card>
				<div>
					<Button className={`w-100`}>
						Get veCAKE now!
					</Button>
				</div>
			</div >
			<Footer isFirstItem={true} />
		</Card >
	)
}

export default FirstItem