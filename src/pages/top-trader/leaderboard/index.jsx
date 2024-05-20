import { Paging } from 'src/components/paging';
import css from './leaderboard.module.scss';
import TopItem from './top-item';
import MyRank from './my-rank';
import ListTop from './list-top';
import { useTheme } from 'src/context/dark-theme';

function Leaderboard() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.leaderBoard} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.leaderBoard__header}>
					Leaderboard
				</div>
				<div className={css.leaderBoard__time}>
					Round #4 | Jan 25, 2024, 07:00 - Mar 1, 2024, 07:00
				</div>
				<div className={css.leaderBoard__paging}>
					<Paging
						currentPage={1}
						totalItems={40}
						onChange={() => { }}
					/>
				</div>
				<div className={css.leaderBoard__threeCup}>
					<img src="/src/assets/imgs/three-cup.png" alt="dk" />
				</div>
				<div className={css.leaderBoard__tops}>
					<div className={css.leaderBoard__tops__item}>
						<TopItem
							rank={1}
							address={`0xf6...2928`}
							volume={`$249,138,116.54`}
							total={`$1,270.97`}
							totalCake={`~471.83 CAKE`}
						/>
					</div>
					<div className={css.leaderBoard__tops__item}>
						<TopItem
							rank={2}
							address={`0xd3...1a42`}
							volume={`$222,947,260.70`}
							total={`$1,137.40`}
							totalCake={`~422.25 CAKE`}
						/>
					</div>
					<div className={css.leaderBoard__tops__item}>
						<TopItem
							rank={3}
							address={`0xae...ae13`}
							volume={`$191,508,157.26`}
							total={`$925.16`}
							totalCake={`~343.58 CAKE`}
						/>
					</div>
				</div>
				<MyRank />
				<ListTop />
			</div>
		</div>
	)
}

export default Leaderboard