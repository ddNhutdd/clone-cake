import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from 'src/components/tabs';
import { url } from 'src/constants';

function NavigateTab() {
	const location = useLocation();
	const navigate = useNavigate();
	const tabList = [
		{
			id: 1,
			content: 'MARKET',
			value: 'market',
			url: url.swap
		},
		{
			id: 2,
			content: 'TWAP',
			value: 'twap',
			url: url.twap
		},
		{
			id: 3,
			content: 'LIMIT',
			value: 'limit',
			url: url.limit
		}
	]

	const select = tabList?.find(item => {
		return item.url === location.pathname
	})

	const [tabSelected, setTabSelected] = useState(select);
	const tabChangeHandle = (tab) => {
		navigate(tab.url)
	}
	return (
		<Tabs
			listTabs={tabList}
			selectedItem={tabSelected}
			onChange={tabChangeHandle}
		/>
	)
}

export default NavigateTab