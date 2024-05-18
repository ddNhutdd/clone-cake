import Pill, { pillType } from 'src/components/pill';
import V3 from '../v3';
import css from './table-list.module.scss';
import EthPill from '../eth-pill';
import { useTheme } from 'src/context/dark-theme';

function tableListRow() {
	const renderList = () => {
		const result = [];
		for (let index = 0; index < 50; index++) {
			result.push(
				<div key={index} className={css.tableListRow__row}>
					<div className={css.tableListRow__cell}>
						<div
							className={css.tableListRow__firstData}
						>
							<div className={css.tableListRow__firstData__img}>
								<img src="https://tokens.pancakeswap.finance/images/eth/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.png" alt="dk" />
								<img src="https://tokens.pancakeswap.finance/images/eth/0xae78736Cd615f374D3085123A210448E74Fc6393.png" alt="dk" />
							</div>
							<div className={css.tableListRow__firstData__text}>
								USDT-USDC LP
							</div>
							<Pill
								type={pillType.outline}
								className={css.tableListRow__firstData__pill}
							>
								0.01%
							</Pill>
							<div>
								<V3 />
							</div>
							<EthPill />
						</div>
					</div>
					<div className={css.tableListRow__cell}>
						0.01%
					</div>
					<div className={css.tableListRow__cell}>
						0.01%
					</div>
					<div className={css.tableListRow__cell}>
						0.01%
					</div>
				</div>
			)
		}
		return result;
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';


	return (
		<div className={`${css.tableListRow} ${darkClass}`}>
			<div className={css.tableListRow__header}>
				<div className={css.tableListRow__row}>
					<div className={css.tableListRow__cell}>
						TRADING PAIR
					</div>
					<div className={css.tableListRow__cell}>
						YOUR VOLUME
					</div>
					<div className={css.tableListRow__cell}>
						YOUR TRADING FEE
					</div>
					<div className={css.tableListRow__cell}>
						REWARD EARNED
					</div>
				</div>
			</div>
			<div className={css.tableListRow__body}>
				{renderList()}
			</div>
		</div>
	)
}

export default tableListRow