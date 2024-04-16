import { useState } from "react";
import Tabs3 from "src/components/tabs-3";

function Profile() {


	const tabList = [
		{
			header: 'Open Order',
			value: 'order'
		},
		{
			header: 'Expired',
			value: 'expired'
		},
		{
			header: 'History',
			value: 'history'
		}
	]
	const [selectedTab, setSelectedTab] = useState(tabList[0].value);
	const tabChangeHandle = (value) => {
		setSelectedTab(value);
	}

	return (
		<div style={{ padding: 200 }}>
			<Tabs3
				tabs={tabList}
				selectedTabValue={selectedTab}
				onChange={tabChangeHandle}
			>
				<div data-item={'order'}>Open Order Content</div>
				<div data-item={'expired'}>Expired Content</div>
				<div data-item={'history'}>Order History Content</div>
			</Tabs3>
		</div>
	);
}

export default Profile;
