import Pill, { pillType } from 'src/components/pill';
import css from './table-list-item.module.scss';
import V3 from '../v3';
import EthPill from '../eth-pill';
import { useTheme } from 'src/context/dark-theme';

function TableListItem() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const renderList = () => {
		const array = new Array(50).fill(null);
		return array.map(() => {
			return (
				<div className={css.tableListItem__item}>
					<div className={css.tableListItem__row}>
						<div className={css.tableListItem__mainContainer}>
							<div className={css.tableListItem__img}>
								<img src="https://tokens.pancakeswap.finance/images/eth/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png" alt="dk" />
								<img src="https://tokens.pancakeswap.finance/images/eth/0xdAC17F958D2ee523a2206206994597C13D831ec7.png" alt="dk" />
							</div>
							<div className={css.tableListItem__mainContainer__title}>
								USDT-USDC LP
							</div>
						</div>
						<div className={css.tableListItem__mainRight}>
							<Pill
								type={pillType.outline}
								className={css.tableListItem__pill}
							>
								0.01%
							</Pill>
							<V3 />
							<EthPill />
						</div>
					</div>
					<div className={css.tableListItem__row}>
						<div className={css.tableListItem__row__title}>
							Your Volume
						</div>
						<div className={css.tableListItem__row__light}>
							$0
						</div>
					</div>
					<div className={css.tableListItem__row}>
						<div className={css.tableListItem__row__title}>
							Your Trading Fee
						</div>
						<div className={css.tableListItem__row__light}>
							$0.00
						</div>
					</div>
					<div className={css.tableListItem__row}>
						<div className={css.tableListItem__row__title}>
							Your Trading Fee
						</div>
						<div className={css.tableListItem__row__bold}>
							$0.00
						</div>
					</div>
				</div>
			)
		})
	}

	return (
		<div className={`${css.tableListItem} ${darkClass}`}>
			{renderList()}
		</div>
	)
}

export default TableListItem;