import css from './item.module.scss';
import TreeBranchIcon from 'src/assets/icons/tree-branch.icon';
import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';
import pancakeUnknowDarkIcon from 'src/assets/icons/pancake-unknow-dark.icon';
import Card from 'src/components/card';
import { useTheme } from 'src/context/dark-theme';
import PancakeUnknowDarkIcon from 'src/assets/icons/pancake-unknow-dark.icon';

function TopItem(props) {
	const {
		rank,
		address,
		volume,
		total,
		totalCake
	} = props;

	const renderClassRank = (rank) => {
		switch (rank) {
			case 1:
				return css.yellow;

			case 2:
				return css.silver;

			case 3:
				return css.brown;

			default:
				break;
		}
	}
	const renderImage = (rank) => {
		switch (rank) {
			case 1:
				return <img src="/src/assets/imgs/gold.webp" alt="dk" />

			case 2:
				return <img src="/src/assets/imgs/silver.webp" alt="dk" />

			case 3:
				return <img src="/src/assets/imgs/bronze.webp" alt="dk" />

			default:
				break;
		}
	}

	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.topItem} ${darkClass}`}>
			<div className={css.topItem__img}>
				{renderImage(rank)}
			</div>
			<Card
				className={css.topItem__card}
			>
				<div className={`${css.topItem__metal} ${renderClassRank(rank)}`}>
					<TreeBranchIcon />
					{
						isDarkMode ? <PancakeUnknowDarkIcon /> : <PancakeUnknowIcon />
					}
					<TreeBranchIcon />
				</div>
				<div className={css.topItem__address}>
					{address}
				</div>
				<div className={css.topItem__row}>
					<div>
						Total Reward
					</div>
					<div>
						{total}
						<div className={css.topItem__small}>
							{totalCake}
						</div>
					</div>
				</div>
				<div className={css.topItem__row}>
					<div>
						Trading Volume
					</div>
					<div>
						{volume}
					</div>
				</div>
				<div className={`${css.topItem__rank} ${renderClassRank(rank)}`}>
					#{rank}
				</div>
			</Card>
		</div>
	)
}

export default TopItem;