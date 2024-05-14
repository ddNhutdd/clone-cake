import { useState } from 'react';
import css from './control.module.scss';
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import Tabs from 'src/components/tabs';
import SelectWithHeaderChange from 'src/components/selec-with-header-change';
import Switch from 'src/components/switch/switch';
import Input from 'src/components/input';

function Control() {
	// tab
	const listTab = [
		{
			id: 1,
			content: 'Live',
			value: 'live'
		},
		{
			id: 2,
			content: 'Finished',
			value: 'finished'
		}
	]
	const [selectedTabValue, setSelectedTabValue] = useState('live');
	const tabChangeHandle = (tab) => {
		setSelectedTabId(tab.value);
	}

	// switch
	const [stakingChecked, setStakingChecked] = useState(false);

	return (
		<div className={css.control}>
			<div className={css.control__left}>
				<div className={css.control__grid}>
					<BsGrid3X2GapFill />
				</div>
				<div className={css.control__list}>
					<FaList />
				</div>
				<div className={css.control__tab}>
					<Tabs
						listTabs={listTab}
						selectedItem={listTab?.find(item => item.value === selectedTabValue)}
						onChange={tabChangeHandle}
					/>
				</div>
				<div className={css.control__staking}>
					<Switch
						checked={stakingChecked}
						setChecked={setStakingChecked}
					/>
				</div>
			</div>
			<div className={css.control__right}>
				<div className={css.control__right__controlGroup}>
					<lable>
						SORT BY
					</lable>
					<SelectWithHeaderChange />
				</div>
				<div className={css.control__right__controlGroup}>
					<lable>
						Search
					</lable>
					<Input></Input>
				</div>
			</div>
		</div>
	)
}

export default Control