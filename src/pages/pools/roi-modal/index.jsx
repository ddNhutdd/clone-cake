import Tabs, { tabColor } from 'src/components/tabs';
import css from './roi-modal.module.scss';
import InputSwap from 'src/components/input-swap';
import Pill, { pillType } from 'src/components/pill';
import { ToolTip, tooltipTrigger } from 'src/components/tooltip';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { FaPen } from "react-icons/fa6";
import Input3 from 'src/components/input-3';
import { FaCheck } from "react-icons/fa6";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';
import Tabs2, { tab2Color } from 'src/components/tabs-2';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';

const mainTabList = [
	{
		id: 1,
		content: 'Flexible',
		value: 'flexible'
	},
	{
		id: 2,
		content: 'Locked',
		value: 'locked'
	}
]

const stakedTabList = [
	{
		id: 1,
		content: '1D',
		value: '1'
	},
	{
		id: 2,
		content: '7D',
		value: '2'
	},
	{
		id: 3,
		content: '30D',
		value: '3'
	},
	{
		id: 4,
		content: '1Y',
		value: '4'
	},
	{
		id: 5,
		content: '5Y',
		value: '5'
	}
]

const durationTabList = [
	{
		id: 1,
		content: '1W',
		value: '1'
	},
	{
		id: 2,
		content: '5W',
		value: '2'
	},
	{
		id: 3,
		content: '10W',
		value: '3'
	},
	{
		id: 4,
		content: '25W',
		value: '4'
	},
	{
		id: 5,
		content: 'ALL',
		value: '5'
	}
]

function RoiModal() {
	// main tab
	const [mainTabValueSelected, setMainTabValueSelected] = useState(mainTabList.at(0).value);
	const mainTabChangeHandle = (tab) => {
		setMainTabValueSelected(tab.value)
	}

	// phần tab thứ hai
	const renderSecondTabContent = (mainTab) => {
		switch (mainTab) {
			case mainTabList.at(0).value:
				return (
					<div className={css.roiModal__controlGroup}>
						<label htmlFor="">
							STAKED FOR
						</label>
						<div className={css.roiModal__controlGroup__tab}>
							<Tabs
								listTabs={stakedTabList}
								selectedItem={stakedTabList.at(0)}
								onChange={() => { }}
								color={tabColor.skyBlue}
							/>
						</div>
					</div>
				)

			case mainTabList.at(1).value:
				return (
					<div className={css.roiModal__controlGroup}>
						<label htmlFor="">
							ADD DURATION
						</label>
						<div className={css.roiModal__controlGroup__tab}>
							<Tabs2
								listTabs={durationTabList}
								selectedItem={durationTabList.at(0)}
								onChange={() => { }}
								color={tab2Color.purple}
							/>
						</div>
					</div>
				)

			default:
				break;
		}
	}

	// phần result
	const [isEdit, setIsEdit] = useState(false);
	const renderEdit = (isEdit) => {
		if (isEdit) {
			return (
				<>
					<div className={css.roiModal__result__main__input}>
						<Input3 />
					</div>
					<div>
						<FaCheck onClick={endEditClickHandle} />
					</div>
				</>
			)
		} else {
			return (
				<>
					<div onClick={editClickHandle} className={css.roiModal__result__main__value}>
						$0.00
					</div>
					<div>
						<FaPen onClick={editClickHandle} />
					</div>
				</>
			)
		}
	}
	const editClickHandle = () => {
		setIsEdit(true);
	}
	const endEditClickHandle = () => {
		setIsEdit(false);
	}

	// phần more detail
	const [moreDetailShow, setMoreDetailShow] = useState(false);
	const moreDetailOpen = () => {
		setMoreDetailShow(true);
	}
	const moreDetailClose = () => {
		setMoreDetailShow(false);
	}

	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.roiModal} ${darkClass}`}>
			<div className={css.roiModal__tab}>
				<Tabs
					listTabs={mainTabList}
					selectedItem={mainTabList.find(item => item.value === mainTabValueSelected)}
					onChange={mainTabChangeHandle}
				/>
			</div>
			<div className={css.roiModal__controlGroup}>
				<label htmlFor="">
					CAKE STAKED
				</label>
				<InputSwap />
				<div className={css.roiModal__controlGroup__list}>
					<div className={css.roiModal__controlGroup__list__item}>
						$100
					</div>
					<div className={css.roiModal__controlGroup__list__item}>
						$1000
					</div>
					<div>
						<Pill
							className={css.roiModal__controlGroup__list__pill}
							type={pillType.outlineSky}
						>
							MY BALANCE
						</Pill>
					</div>
					<ToolTip
						trigger={tooltipTrigger.hover}
						content="“My Balance” here includes both CAKE in your wallet, and CAKE already staked in this pool."
						className="flex items-center"
					>
						<FaRegCircleQuestion />
					</ToolTip>
				</div>
			</div>
			{
				renderSecondTabContent(mainTabValueSelected)
			}
			<div className={css.roiModal__down}>
				{
					isEdit ? <GoArrowUp /> : <GoArrowDown />
				}
			</div>
			<div className={css.roiModal__resultContainer}>
				<div className={css.roiModal__result}>
					<div className={css.roiModal__result__title}>
						ROI AT CURRENT RATES
					</div>
					<div className={css.roiModal__result__main}>
						{
							renderEdit(isEdit)
						}
					</div>
					<div className={css.roiModal__result__result__small}>
						0.00%
					</div>
				</div>
			</div>
			<div className={css.roiModal__Detail}>
				<div className={css.roiModal__more}>
					{
						moreDetailShow ?
							<div onClick={moreDetailClose} className={css.roiModal__more__item}>
								Hide
								<FaChevronUp />
							</div>
							:
							<div onClick={moreDetailOpen} className={css.roiModal__more__item}>
								Details
								<FaChevronDown />
							</div>
					}
				</div>
				{
					moreDetailShow && <div className={css.roiModal__moreContent}>
						<div className={css.roiModal__row}>
							<div>APR</div>
							<div>0.00%</div>
						</div>
						<ul>
							<li>
								Calculated based on current rates.
							</li>
							<li>
								All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.
							</li>
						</ul>
						<div className={css.roiModal__action}>
							<NavLink>
								Get CAKE
								<ArrowSquareIcon />
							</NavLink>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default RoiModal