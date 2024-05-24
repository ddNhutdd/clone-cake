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
			<div>
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
				<div>
					Strikes
				</div>
				<div>
					<span>
						Edit amounts for all
					</span>
					<span>
						<Switch />
					</span>
				</div>
			</div>
			<div className={css.trade__row}>
				<button>
					0 Call strikes
					<FaAngleDown />
				</button>
				<button>
					0 Put strikes
					<FaAngleDown />
				</button>
			</div>
			<div className={css.trade__row}>
				<div>
					Balance
				</div>
				<div>
					<span>
						0
					</span>
					<span>
						ARB
					</span>
					<span>
						0
					</span>
					<span>
						USDC
					</span>
				</div>
			</div>
			<div>
				Auto Exercisers
			</div>
			<div>
				Time Based
			</div>
			<div className={css.trade__row}>
				<div>
					Options are automatically exercised 5 minutes before expiry.
				</div>
				<div>
					<Switch />
				</div>
			</div>
		</div>
	)
}

export default Trade