import CheckBox from 'src/components/check-box';
import InputSwap from 'src/components/input-swap';
import Tabs, { tabColor } from 'src/components/tabs';
import css from './roi-modal-content.module.scss';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import InputRoi, { inputRoiStatus } from 'src/components/input-roi';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useRef, useState } from 'react';
import { FaRegCircleQuestion } from "react-icons/fa6";

const stakList = [
	{
		content: '1D',
		id: '1D',
		value: '1D'
	},
	{
		content: '7D',
		id: '7D',
		value: '7D'
	},
	{
		content: '30D',
		id: '30D',
		value: '30D'
	},
	{
		content: '1Y',
		id: '1Y',
		value: '1Y'
	},
	{
		content: '5Y',
		id: '5Y',
		value: '5Y'
	},
]

const compoundingList = [
	{
		content: '1D',
		id: '1D',
		value: '1D'
	},
	{
		content: '7D',
		id: '7D',
		value: '7D'
	},
	{
		content: '14D',
		id: '14D',
		value: '14D'
	},
	{
		content: '30D',
		id: '30D',
		value: '30D'
	},
]

const flowType = {
	up: 'up',
	down: 'down'
}

function RoiModalContent() {
	// checkbox
	const [disableCompounding, setDisableCompounding] = useState(true);

	// toggle detail 
	const [showDetail, setShowDetail] = useState(false);
	const toggleDetail = () => {
		setShowDetail(state => !state);
	}

	// arrow flow
	const [arrowFlow, setArrowFlow] = useState(flowType.down);
	const arrowRef = useRef(null);
	const animationArrow = () => {
		if (arrowRef && arrowRef.current) {
			addAnimate(arrowRef.current);
		}
	}
	const addAnimate = (element) => {
		if (!element) {
			return;
		}
		!element?.classList?.contains(css.zoomAnimate) &&
			element?.classList?.add(css.zoomAnimate);
		const idTimeout = setTimeout(() => {
			element?.classList?.remove(css.zoomAnimate);
			clearTimeout(idTimeout);
		}, 200);
	}

	// input roi
	const [inputRoiValue, setInputRoiValue] = useState('');
	const inputRoiChangeHandle = (ev) => {
		setInputRoiValue(ev.target.value);
	}
	const inputRoiStatusChangeHandle = (status) => {
		switch (status) {
			case inputRoiStatus.edit:
				setArrowFlow(flowType.up);
				animationArrow();
				break;

			case inputRoiStatus.read:
				setArrowFlow(flowType.down);
				animationArrow();
				break;

			default:
				break;
		}
	}

	// stak tab
	const stakTabChangeHandle = () => {
		animationArrow();
	}

	// compound tab
	const compoundingTabChangeHandle = () => {
		animationArrow();
	}

	// balance item click handle
	const balanceItemClickHandle = (value) => {
		setArrowFlow(flowType.down);
		animationArrow();
	}

	return (
		<div className={css.roiModalContent}>
			<div className={css.roiModalContent__controlGroup}>
				<label htmlFor="">
					USDT-USDC LP STAKED
				</label>
				<InputSwap
					inputUnit={<div style={{ whiteSpace: 'nowrap' }}>AIOZ-WBNB LP</div>}
					outputUnit={`USD`}
				/>
				<div className={css.roiModalContent__listBalance}>
					<div
						onClick={balanceItemClickHandle.bind(null, 100)}
						className={css.roiModalContent__balanceItem}
					>
						$100
					</div>
					<div
						onClick={balanceItemClickHandle.bind(null, 1000)}
						className={css.roiModalContent__balanceItem}
					>
						$1000
					</div>
					<div className={`${css.roiModalContent__balanceItem} ${css.disabled}`}>
						MY BALANCE
					</div>
					<div>
						<FaRegCircleQuestion />
					</div>
				</div>
			</div>
			<div className={css.roiModalContent__controlGroup}>
				<label htmlFor="">
					STAKED FOR
				</label>
				<Tabs
					listTabs={stakList}
					selectedItem={stakList.at(0)}
					onChange={stakTabChangeHandle}
					color={tabColor.skyBlue}
					cssCustom={css[`roiModalContent--font16`]}
				/>
			</div>
			<div className={css.roiModalContent__controlGroup}>
				<label htmlFor="">
					COMPOUNDING EVERY
				</label>
				<div className='flex items-center gap-1'>
					<div>
						<CheckBox
							checked={disableCompounding}
							setCheck={setDisableCompounding}
						/>
					</div>
					<Tabs
						listTabs={compoundingList}
						selectedItem={compoundingList.at(0)}
						onChange={compoundingTabChangeHandle}
						color={tabColor.skyBlue}
						cssCustom={css[`roiModalContent--font16`]}
						disabled={!disableCompounding}
					/>
				</div>
			</div>
			<div className={css.roiModalContent__arrow}>
				{
					arrowFlow === flowType.down ?
						<span ref={arrowRef}>
							<FaArrowDown />
						</span> :
						<span ref={arrowRef}>
							<FaArrowUp />
						</span>
				}
			</div>
			<div className={css.roiModalContent__action}>
				<InputRoi
					inputOnChange={inputRoiChangeHandle}
					inputValue={inputRoiValue}
					statusOnChange={inputRoiStatusChangeHandle}
				/>
			</div>
			<div
				onClick={toggleDetail}
				className={css.roiModalContent__toggleButton}
			>
				{
					showDetail ? (
						<>
							Hide
							<FaAngleUp />
						</>
					) : (
						<>
							Details
							<FaAngleDown />
						</>
					)
				}
			</div>
			{
				showDetail && (
					<div className={css.roiModalContent__details}>
						<div className={css.roiModalContent__row}>
							<div>
								APR
							</div>
							<div>
								2.22%
							</div>
						</div>
						<ul>
							<li>
								Calculated based on current rates.
							</li>
							<li>
								All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.
							</li>
						</ul>
					</div>
				)
			}
		</div>
	)
}

export default RoiModalContent