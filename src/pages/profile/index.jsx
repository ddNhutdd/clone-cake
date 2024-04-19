import { useState } from "react";
import { Paging } from "src/components/paging";
import Table from "src/components/table";
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

	const [page, setPage] = useState(1);
	const [totalItems, setTotalItems] = useState(50);
	const pageChangeHandle = (newPage) => {
		console.log(newPage)
		setPage(newPage);
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

			<div className="mt-3">
				<Table
					listCol={[
						{
							key: 'test',
							header: 'Test'
						},
						{
							key: 'test2',
							header: 'Test 2'
						}
					]}

					listRecord={[
						{
							id: 1,
							test: 'abc',
							test2: 'zyz'
						},
						{
							id: 2,
							test: 'abc2',
							test2: 'zyz2'
						}
					]}

				/>
			</div>
		</div>
	);
}

export default Profile;
