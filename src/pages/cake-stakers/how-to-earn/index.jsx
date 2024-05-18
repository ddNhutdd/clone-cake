import Card from 'src/components/card';
import css from './how-to-earn.module.scss';
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';
import Item from './item';
import { useTheme } from 'src/context/dark-theme';

const list = [
	{
		number: 1,
		img: '/src/assets/imgs/step1-1.webp',
		title: 'Look for eligible pairs',
		text: 'Use the hot token list on the Swap page to check which pairs are eligible for trading rewards.'
	},
	{
		number: 2,
		img: '/src/assets/imgs/step2-1.webp',
		title: 'Start trading',
		text: 'Start trading any eligible pairs to earn rewards in CAKE. The more you trade, the more rewards you will earn from the current reward pool.'
	},
	{
		number: 3,
		img: '/src/assets/imgs/step3-1.webp',
		title: 'Track your volume and rewards',
		text: 'Come back to this page to check your volume and rewards in real-time.'
	},
	{
		number: 4,
		img: '/src/assets/imgs/step4-1.webp',
		title: 'Claim your rewards',
		text: 'After each period ends, come back to this page and claim your rewards from the previous periods.'
	}
]

function HowToEarn() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const renderList = (list) => {
		return list?.map(item => {
			return (
				<div key={item.number} className={css.howToEarn__item}>
					<Item
						content={item}
					/>
				</div>
			)
		})
	}

	return (
		<div className={`${css.howToEarn} ${darkClass}`}>
			<div className={css.container}>
				<Card
					className={css.howToEarn__card}
					classNameContent={css.howToEarn__cardContent}
				>
					<div className={css.howToEarn__title}>
						How to Earn
					</div>
					<div className={css.howToEarn__list}>
						{renderList(list)}
					</div>
				</Card>
				<NavLink className={css.howToEarn__action}>
					Learn More
					<ArrowSquareIcon />
				</NavLink>
			</div>
		</div>
	)
}

export default HowToEarn