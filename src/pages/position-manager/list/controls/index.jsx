import { useContext } from 'react';
import { BsGrid3X2GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import Input3 from 'src/components/input-3';
import SelectWithHeaderChange from 'src/components/selec-with-header-change';
import Switch from 'src/components/switch/switch';
import Tabs from 'src/components/tabs';
import { showType } from 'src/constants';
import { useTheme } from 'src/context/dark-theme';
import { DrillContext } from 'src/context/drill';
import css from './controls.module.scss';

// tablist
const typeTabList = [
	{
		id: 1,
		content: 'Live',
		value: 'live'
	},
	{
		id: 2,
		content: 'Finished',
		value: 'finish'
	}
]

// sort list
const sortList = [
	{
		value: 'hot',
		label: 'Hot',
	},
	{
		value: 'apr',
		label: 'APR',
	},
	{
		value: 'earned',
		label: 'Earned',
	},
	{
		value: 'total staked',
		label: 'Total staked',
	},
	{
		value: 'lasted',
		label: 'Lasted',
	}
]

function Controls() {
	const {
		showType: showTypeContext,
		setShowType
	} = useContext(DrillContext);

	const viewItemActive = (view) => {
		return view === showTypeContext ? css.active : ''
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.controls} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.controls__left}>
					<div className={css.controls__view}>
						<div
							onClick={setShowType.bind(null, showType.grid)}
							className={`${css.control__viewItem} ${viewItemActive(showType.grid)}`}
						>
							<BsGrid3X2GapFill />
						</div>
						<div
							onClick={setShowType.bind(null, showType.list)}
							className={`${css.control__viewItem} ${viewItemActive(showType.list)}`}
						>
							<FaList />
						</div>
					</div>
					<div className={css.controls__staking}>
						<div className={css.controls__staking__switch}>
							<Switch
								checked={false}
								setChecked={() => { }}
							/>
						</div>
						<div className={css.controls__staking__text}>
							Stack Only
						</div>
					</div>
					<div className={css.controls__tab}>
						<Tabs
							listTabs={typeTabList}
							selectedItem={typeTabList.at(0)}
							onChange={() => { }}
						/>
					</div>
				</div>
				<div className={css.controls__right}>
					<div className={css.controls__right__controlGrounp}>
						<label htmlFor="">
							SORT BY
						</label>
						<SelectWithHeaderChange
							options={sortList}
							onChange={() => { }}
							selectValue={sortList.at(0).value}
						/>
					</div>
					<div className={css.controls__right__controlGrounp}>
						<label htmlFor="">
							SEARCH
						</label>
						<Input3 placeholder={'Search Managers'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Controls