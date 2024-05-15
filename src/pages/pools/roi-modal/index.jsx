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
	return (
		<div className={css.roiModal}>
			<div className={css.roiModal__tab}>
				<Tabs
					listTabs={mainTabList}
					selectedItem={mainTabList.at(0)}
					onChange={() => { }}
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
						trigger={tooltipTrigger.runtime}
						content="“My Balance” here includes both CAKE in your wallet, and CAKE already staked in this pool."
						show={false}
						className="flex items-center"
					>
						<FaRegCircleQuestion />
					</ToolTip>
				</div>
			</div>
			<div className={css.roiModal__controlGroup}>
				<label htmlFor="">
					STAKED FOR
				</label>
				<Tabs
					listTabs={stakedTabList}
					selectedItem={stakedTabList.at(0)}
					onChange={() => { }}
					color={tabColor.skyBlue}
				/>
			</div>
			<div className={css.roiModal__controlGroup}>
				<label htmlFor="">
					ADD DURATION
				</label>
				<Tabs2
					listTabs={durationTabList}
					selectedItem={durationTabList.at(0)}
					onChange={() => { }}
					color={tab2Color.purple}
				/>
			</div>
			<div className={css.roiModal__down}>
				<GoArrowDown />
				<GoArrowUp />
			</div>
			<div className={css.roiModal__result}>
				<div className={css.roiModal__result__title}>
					ROI AT CURRENT RATES
				</div>
				<div className={css.roiModal__result__main}>
					<div>
						$0.00
					</div>
					<div>
						<Input3 />
					</div>
					<div>
						<FaPen />
					</div>
					<div>
						<FaCheck />
					</div>
				</div>
				<div>
					0.00%
				</div>
			</div>
			<div className={css.roiModal__more}>
				Hide
				<FaChevronUp />
				Details
				<FaChevronDown />
			</div>
			<div className={css.roiModal__moreContent}>
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
		</div>
	)
}

export default RoiModal