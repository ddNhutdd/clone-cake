import Card from 'src/components/card';
import css from './chart.module.scss';
import { useTheme } from 'src/context/dark-theme';

function Chart(props) {
	const {
		titleCss
	} = props;




	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';




	return (
		<div className={`${css.chart} ${darkClass}`}>
			<div className={titleCss}>
				PancakeSwap Info & Analytics
			</div>
			<div className={css.chart__chartContainer}>
				<div className={css.chart__item}>
					<Card>
						<div className={css.chart__name}>
							Liquidity
						</div>
						<div className={css.chart__money}>
							$ 1.51B
						</div>
						<div className={css.chart__time}>
							May 9, 2024
						</div>
						<div>
						</div>
					</Card>
				</div>
				<div className={css.chart__item}>
					<Card>
						<div className={css.chart__name}>
							Volume 24H
						</div>
						<div className={css.chart__money}>
							$ 246.75M
						</div>
						<div className={css.chart__time}>
							May 9, 2024
						</div>
					</Card>
				</div>
			</div>
			<div className={css.chart__total}>
				Volume 24H:
				$0.00
				{" "}
				<span className={`--red`}>
					(↓100.00%)
				</span>
				{" "}
				Fees 24H:
				103.27K
				{" "}
				<span className={`--green`}>
					(↑7.38%)
				</span>
				{" "}
				TVL:
				378.10M
				{" "}
				<span className={`--green`}>
					(↑1.08%)
				</span>
			</div>
		</div>
	)
}

export default Chart