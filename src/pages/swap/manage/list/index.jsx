import Input3 from 'src/components/input-3';
import css from './list.module.scss';
import { IoMdSettings } from "react-icons/io";
import Item from './item';
import { useState } from 'react';

function List() {

	const [pancakeExchangeActive, setPancakeExchangeActive] = useState(false);
	const [geckoActive, setGeckoActive] = useState(false);
	const [pancakeBNBActive, setPancakeBNBActive] = useState(false);

	return (
		<div className={css.list}>
			<Input3 />
			<Item
				img={`https://pancakeswap.finance/logo.png`}
				top={`PancakeSwap Extended`}
				bot={(
					<div className='flex items-center gap-1'>
						3418 tokens
						<IoMdSettings />
					</div>
				)}
				checked={pancakeExchangeActive}
				setChecked={setPancakeExchangeActive}
			/>
			<Item
				img={`https://pancakeswap.finance/logo.png`}
				top={`PancakeSwap Extended`}
				bot={(
					<div className='flex items-center gap-1'>
						3418 tokens
						<IoMdSettings />
					</div>
				)}
				checked={geckoActive}
				setChecked={setGeckoActive}
			/>
			<Item
				img={`https://pancakeswap.finance/logo.png`}
				top={`PancakeSwap Extended`}
				bot={(
					<div className='flex items-center gap-1'>
						3418 tokens
						<IoMdSettings />
					</div>
				)}
				checked={pancakeBNBActive}
				setChecked={setPancakeBNBActive}
			/>
		</div>
	)
}

export default List