import { useContext, useState } from 'react';
import css from './control.module.scss';
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import Tabs from 'src/components/tabs';
import SelectWithHeaderChange from 'src/components/selec-with-header-change';
import Switch from 'src/components/switch/switch';
import Input3 from 'src/components/input-3';
import { DrillContext } from 'src/context/drill';
import { useTheme } from 'src/context/dark-theme';
import { showType } from 'src/constants';

const sortOptions = [
	{
		value: 'Hot',
		label: 'Hot',
	},
	{
		value: 'APR',
		label: 'APR',
	},
	{
		value: 'Earn',
		label: 'Earn',
	},
	{
		value: 'Total Staked',
		label: 'Total Staked',
	},
	{
		value: 'Lasted',
		label: 'Lasted',
	},
]

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

function Control() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	// tab
	const [selectedTabValue, setSelectedTabValue] = useState('live');
	const tabChangeHandle = (tab) => {
		setSelectedTabId(tab.value);
	}

	// switch
	const [stakingChecked, setStakingChecked] = useState(false);

	// dropdown sort 
	const [sortSelected, setSortSelected] = useState(sortOptions.at(0).value);
	const sortChangeHandle = (value) => { setSortSelected(value) }

	//set show type
	const { showTypeSelected, setShowTypeSelected } = useContext(DrillContext);

	return (
		<div className={`${css.control} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.control__content}>
					<div className={css.control__left}>
						<div className={`${css.control__display} ${showTypeSelected === showType.grid ? css.active : ''}`}>
							<BsGrid3X2GapFill onClick={setShowTypeSelected.bind(null, showType.grid)} />
						</div>
						<div className={`${css.control__display} ${showTypeSelected === showType.list ? css.active : ''}`}>
							<FaList onClick={setShowTypeSelected.bind(null, showType.list)} />
						</div>
						<div className={css.control__tab}>
							<Tabs
								listTabs={listTab}
								selectedItem={listTab?.find(item => item.value === selectedTabValue)}
								onChange={tabChangeHandle}
							/>
						</div>
						<div className={css.control__staking}>
							<div className={css.control__staking__switch}>
								<Switch
									checked={stakingChecked}
									setChecked={setStakingChecked}
								/>
							</div>
							<div>
								Stack Only
							</div>
						</div>
					</div>
					<div className={css.control__right}>
						<div className={css.control__right__controlGroup}>
							<label>
								SORT BY
							</label>
							<SelectWithHeaderChange
								options={sortOptions}
								onChange={sortChangeHandle}
								selectValue={sortSelected}
							/>
						</div>
						<div className={css.control__right__controlGroup}>
							<label>
								Search
							</label>
							<Input3 style={{ height: '40px' }}></Input3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Control