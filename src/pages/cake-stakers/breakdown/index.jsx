import Card from 'src/components/card';
import css from './breakdown.module.scss';
import TableListRow from './table-list-row';
import TableListItem from './table-list-item';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import { useTheme } from 'src/context/dark-theme';

function Breakdown() {
	// responsive
	const screen = useMediaQuery();
	const cardContent = screen === widthDevice.width_968 ||
		screen === widthDevice.width_768 ||
		screen === widthDevice.width_576 ?
		<TableListItem /> :
		<TableListRow />

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.breakdown} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.breakdown__title}>
					Rewards Breakdown
				</div>
				<div className={css.breakdown__subTitle}>
					Round #1 | Mar 1, 2024, 07:00 - Apr 1, 2024, 06:59
				</div>
				<Card
					className={css.breakdown__card}
					classNameContent={css.breakdown__cardContent}
				>
					{cardContent}
				</Card>
			</div>
		</div >
	)
}

export default Breakdown