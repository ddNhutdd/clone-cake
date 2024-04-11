import React, {useState} from 'react';
import css from './setting-modal-content.module.scss';
import {ToolTip} from 'src/components/tooltip';
import Tabs2 from 'src/components/tabs-2';
import Switch from 'src/components/switch/switch';
import {FaRegQuestionCircle} from 'react-icons/fa';
import Input3 from 'src/components/input-3';
import Modal from 'src/components/modal';
import RouteModalContent from './route-modal-content';

export default function SettingModalContent() {
	// speed tab
	const speedListTabs = [
		{
			id: 1,
			content: <div style={{whiteSpace: 'nowrap'}}>Default</div>,
			value: 'default',
		},
		{
			id: 2,
			content: <div style={{whiteSpace: 'nowrap'}}>Standard (1)</div>,
			value: 'standard',
		},
		{
			id: 3,
			content: <div style={{whiteSpace: 'nowrap'}}>Fast (4)</div>,
			value: 'fast',
		},
		{
			id: 4,
			content: <div style={{whiteSpace: 'nowrap'}}>Instant (5)</div>,
			value: 'instant',
		},
	];
	const [speedSelectedItem, setSpeedSelectedItem] = useState(
		speedListTabs.at(0),
	);
	const speedTabChangeHandle = (item) => setSpeedSelectedItem(item);

	// Slippage tab
	const slipListTabs = [
		{
			id: 1,
			content: <div style={{whiteSpace: 'nowrap'}}>0.1%</div>,
			value: 0.1,
		},
		{
			id: 2,
			content: <div style={{whiteSpace: 'nowrap'}}>0.5%</div>,
			value: 0.5,
		},
		{
			id: 3,
			content: <div style={{whiteSpace: 'nowrap'}}>1.0</div>,
			value: 1,
		},
	];
	const [slipSelectedItem, setSlipSelectedItem] = useState(
		slipListTabs.at(0),
	);
	const slipTabChangeHandle = (item) => setSlipSelectedItem(item);
	const renderClassShowWarning = () =>
		slipSelectedItem.value === slipListTabs.at(0).value ? '' : 'd-0';

	// Flippy  switch
	const [flippyCheck, setFlippyCheck] = useState(false);

	// route switch
	const [routeCheck, setRouteCheck] = useState(false);

	//slip input
	const [slipInput, setSlipInput] = useState();
	const slipInputChangeHandle = (ev) => setSlipInput(ev.target.value);

	// time input
	const [timeInput, setTimeInput] = useState();
	const timeInputChangeHandle = (ev) => setTimeInput(ev.target.value);

	// Routing modal
	const [routingModalShow, setRoutingModalShow] = useState(false);
	const showModal = () => setRoutingModalShow(true);
	const closeModal = () => setRoutingModalShow(false);

	return (
		<>
			<div className={css.settingModalContent}>
				<div className={css.settingModalContent__small}>
					SWAPS & LIQUIDITY
				</div>

				<div className={css.settingModalContent__controls}>
					<div className={css.settingModalContent__title}>
						Default Transaction Speed (GWEI)
						<ToolTip
							className={`inline-flex items-center`}
							content={
								<>
									<p className='mb-4'>
										Adjusts the gas price (transaction fee)
										for your transaction. Higher GWEL =
										higher speed = higher fees.
									</p>
									<p>
										Choose "Default" to use the settings
										from your current blockchain RPC node
									</p>
								</>
							}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div className='my-2'>
						<Tabs2
							selectedItem={speedSelectedItem}
							onChange={speedTabChangeHandle}
							listTabs={speedListTabs}
						/>
					</div>
				</div>
				<div className={css.settingModalContent__controls}>
					<div className={css.settingModalContent__title}>
						Slippage Tolerance
						<ToolTip
							className={`inline-flex items-center`}
							content={`Settings a high slippage tolerance can help transaction succeed, but you may not get such a good price. Use with caution.`}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div className='my-2 flex items-center'>
						<Tabs2
							selectedItem={slipSelectedItem}
							onChange={slipTabChangeHandle}
							listTabs={slipListTabs}
						/>
						<div className={css.settingModalContent__speedInput}>
							<Input3
								value={slipInput}
								onChange={slipInputChangeHandle}
							/>
						</div>
						%
					</div>
					<div
						className={`${renderClassShowWarning()} ${css.settingModalContent__warning}`}
					>
						Your transaction may fail
					</div>
				</div>
				<div
					className={`${css.settingModalContent__controls} ${css.row}`}
				>
					<div className={css.settingModalContent__title}>
						Tx deadline (mins)
						<ToolTip
							className={`inline-flex items-center`}
							content={`Your transaction will revert if it is left confirming for longer than this time.`}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div className={css.settingModalContent__timeInput}>
						<Input3
							value={slipInput}
							onChange={slipInputChangeHandle}
						/>
					</div>
				</div>

				<div
					className={`${css.settingModalContent__controls} ${css.row}`}
				>
					<div className={css.settingModalContent__title}>
						Expert Mode
						<ToolTip
							className={`inline-flex items-center`}
							content={`Bypasses confirmation modals and allows high slippage trades. Use at your own risk.`}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div>
						<Switch />
					</div>
				</div>

				<div
					className={`${css.settingModalContent__controls} ${css.row}`}
				>
					<div className={css.settingModalContent__title}>
						Flippy sounds
						<ToolTip
							className={`inline-flex items-center`}
							content={`Fun sounds to make a truly immersive pancake-flipping trading experience`}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div>
						<Switch
							checked={flippyCheck}
							setChecked={setFlippyCheck}
						/>
					</div>
				</div>

				<div
					className={`${css.settingModalContent__controls} ${css.row}`}
				>
					<div className={css.settingModalContent__title}>
						Fast routing (BETA)
						<ToolTip
							className={`inline-flex items-center`}
							content={`Increase the speed of finding best swapping routes`}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
					<div>
						<Switch
							checked={routeCheck}
							setChecked={setRouteCheck}
						/>
					</div>
				</div>

				<div className={`${css.settingModalContent__footer}`}>
					<span onClick={showModal}>Customize Routing</span>
				</div>
			</div>
			<Modal
				className={{color: 'red'}}
				show={routingModalShow}
				setShow={setRoutingModalShow}
				title={
					<div
						className='flex items-center justify-between'
						style={{flexGrow: 1}}
					>
						<div>Customize Routing</div>
						<div className={css.settingModalContent__routingReset}>
							Reset
						</div>
					</div>
				}
				content={<RouteModalContent />}
			/>
		</>
	);
}
