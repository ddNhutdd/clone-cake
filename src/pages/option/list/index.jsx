import Card, { cardType } from 'src/components/card';
import css from './list.module.scss';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useState } from 'react';
import Paging2 from 'src/components/paging-2';

const tabType = {
	calls: 'calls',
	puts: 'puts'
}

function List() {
	// tab
	const [tabSelected, setTabSelected] = useState(tabType.calls);
	const tabClickHandle = (tabItem) => {
		setTabSelected(tabItem);
	}
	const renderTabActive = (tabItem) => {
		return tabSelected === tabItem ? css.active : '';
	}

	return (
		<Card
			className={css.list}
			classNameContent={css.list__content}
			type={cardType.flat}
		>
			<div className={css.list__tab}>
				<div
					className={`${css.list__tabItem} ${renderTabActive(tabType.calls)}`}
					onClick={tabClickHandle.bind(null, tabType.calls)}
				>
					Calls
				</div>
				<div
					className={`${css.list__tabItem} ${renderTabActive(tabType.puts)}`}
					onClick={tabClickHandle.bind(null, tabType.puts)}
				>
					Puts
				</div>
			</div>
			<div className={css.list__table}>
				<div className={css.list__header}>
					<div className={css.list__row}>
						<div className={css.list__cell}>
							Strike
						</div>
						<div className={css.list__cell}>
							Liquidity
						</div>
						<div className={css.list__cell}>
							Options Available
						</div>
						<div className={css.list__cell}>
							Utilization
						</div>
						<div className={css.list__cell}>
							Fees APR
						</div>
						<div className={css.list__cell}>

						</div>
					</div>
				</div>
				<div className={css.list__body}>
					<div className={css.list__row}>
						<div className={css.list__cell}>
							$
							{" "}
							<span className={css[`list--highlight`]}>
								1.5134
							</span>
						</div>
						<div className={css.list__cell}>
							<div>
								$
								{" "}
								<span className={css[`list--highlight`]}>
									0.0000
								</span>
							</div>
							<div>
								0.0000 ARB
							</div>
						</div>
						<div className={css.list__cell}>
							<div>
								<span className={css[`list--highlight`]}>
									{`<0.00001`}
								</span>
							</div>
							<div>
								$ 0
							</div>
						</div>
						<div className={css.list__cell}>
							<span className={css[`list--highlight`]}>
								100.000
							</span>
							{" "}
							%
						</div>
						<div className={css.list__cell}>
							<span className={css[`list--highlight`]}>
								0
							</span>
							{" "}
							%
						</div>
						<div className={css.list__cell}>
							<div className={css.circle}>
								<LuPlus />
							</div>
						</div>
					</div>
					<div className={css.list__row}>
						<div className={css.list__cell}>
							$
							{" "}
							<span className={css[`list--highlight`]}>
								1.5134
							</span>
						</div>
						<div className={css.list__cell}>
							<div>
								$
								{" "}
								<span className={css[`list--highlight`]}>
									0.0000
								</span>
							</div>
							<div>
								0.0000 ARB
							</div>
						</div>
						<div className={css.list__cell}>
							<div>
								<span className={css[`list--highlight`]}>
									{`<0.00001`}
								</span>
							</div>
							<div>
								$ 0
							</div>
						</div>
						<div className={css.list__cell}>
							<span className={css[`list--highlight`]}>
								100.000
							</span>
							{" "}
							%
						</div>
						<div className={css.list__cell}>
							<span className={css[`list--highlight`]}>
								0
							</span>
							{" "}
							%
						</div>
						<div className={css.list__cell}>
							<div className={`${css.circle} ${css.active}`}>
								<LuMinus />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={css.list__paging}>
				<Paging2 />
			</div>
		</Card>
	)
}

export default List