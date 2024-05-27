import Tabs from 'src/components/tabs';
import css from './trade.module.scss';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import Switch from 'src/components/switch/switch';

const expiryList = [
	{
		id: 1,
		content: '1h',
		value: '1h'
	},
	{
		id: 2,
		content: '2h',
		value: '2h'
	},
	{
		id: 3,
		content: '6h',
		value: '6h'
	},
	{
		id: 4,
		content: '12h',
		value: '12h'
	},
	{
		id: 5,
		content: '1d',
		value: '1d'
	},
]

function Trade() {
	//tab 
	const [expiryTabSelected, setExpiryTabSelected] = useState(expiryList.at(0));
	const tabChangeHandle = (item) => {
		setExpiryTabSelected(item)
	}
	return (
		<div className={css.trade}>
			<div className={css[`trade--title`]}>
				Expiry
			</div>
			<div>
				<Tabs
					listTabs={expiryList}
					selectedItem={expiryTabSelected}
					onChange={tabChangeHandle}
				/>
			</div>
			<div className={css.trade__row}>
				<div className={css[`trade--title`]}>
					Strikes
				</div>
				<div className={css.trade__rowContent}>
					<span className={css[`trade--title`]}>
						Edit amounts for all
					</span>
					<span className={css.trade__rowSwitch}>
						<Switch />
					</span>
				</div>
			</div>
			<div className={css.trade__row}>
				<button className={css.green}>
					0 Call strikes
					<FaAngleDown />
				</button>
				<button className={css.red}>
					0 Put strikes
					<FaAngleDown />
				</button>
			</div>
			<div className={css.trade__row}>
				<div className={css[`trade--title`]}>
					Balance
				</div>
				<div className={css.trade__rowContentBalance}>
					<span className={css[`trade--highlight`]}>
						0
					</span>
					<span className={`${css[`trade--title`]} ${css.trade__arb}`}>
						ARB
					</span>
					<span className={css[`trade--highlight`]}>
						0
					</span>
					<span className={css[`trade--title`]}>
						USDC
					</span>
				</div>
			</div>
			<div className={css[`trade--title`]}>
				Auto Exercisers
			</div>
			<div className={`${css[`trade--title`]} ${css[`trade--highlight`]}`}>
				Time Based
			</div>
			<div className={css.trade__row}>
				<div className={`${css[`trade--title`]} ${css.trade__rowTime}`}>
					Options are automatically exercised 5 minutes before expiry.
				</div>
				<div className={css.trade__rowTimeSwitch}>
					<Switch />
				</div>
			</div>
		</div>
	)
}

export default Trade