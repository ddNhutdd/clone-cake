import React from 'react';
import css from './liquidity.module.scss';
import HeaderComponent from 'src/components/header-component';
import { HeaderComponentList1 } from 'src/constants/header-component-list-1';
import FooterComponent from 'src/components/footer-component';
import Card from 'src/components/card';
import Tabs from 'src/components/tabs';

function Liquidity() {
	const listTabs = [{
		id: 1,
		content: 'ALL',
		value: 'all'
	},
	{
		id: 2,
		content: 'V3',
		value: 'v3'
	},
	{
		id: 3,
		content: 'TableSwap',
		value: 'TableSwap'
	},
	{
		id: 4,
		content: 'V2',
		value: 'V2'
	}]
	const listTabsChangeHandle = (item) => {
		console.log(item);
	}
	return (
		<div className={css.liquidity}>
			<HeaderComponent list={HeaderComponentList1} />
			<div className={css.container}>
				<Card >fdsa</Card>
				<Tabs listTabs={listTabs} onChange={listTabsChangeHandle} />
			</div>
			<FooterComponent />
		</div>
	)
}

export default Liquidity;
