import HeaderComponent from '../../components/header-component';
import FooterComponent from '../../components/footer-component';
import swapCss from '../swap/swap.module.scss';
import twapCss from './twap.module.scss';
import { FaChartBar } from 'react-icons/fa';
import SwapSelect from '../swap/swap-select';
import Input from 'src/components/input';
import Button, { buttonClassesType } from 'src/components/button';
import { FaArrowDown } from 'react-icons/fa';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { useTheme } from 'src/context/dark-theme';
import { HeaderComponentList1 } from 'src/constants/header-component-list-1.jsx';
import Modal from 'src/components/modal';
import { useEffect, useState } from 'react';
import useStep from 'src/hooks/use-step';
import Choose from '../swap/choose';
import Manage from '../swap/manage';
import { useDispatch, useSelector } from 'react-redux';
import { getShowChart, toggleSlice } from 'src/redux/slices/swap.slices';
import Chart from '../swap/chart';
import Tabs3 from 'src/components/tabs-3';
import leftTab from './left-tabs';
import percentTab from './percent-tab';
import Tabs2 from 'src/components/tabs-2';
import { ToolTip } from 'src/components/tooltip';
import Pill, { pillType } from 'src/components/pill';
import { GrPowerReset } from "react-icons/gr";
import Switch from 'src/components/switch/switch';
import Input3 from 'src/components/input-3';
import UniformRow from './uniform-row';
import { GoQuestion } from "react-icons/go";
import NavigateTab from '../swap/navigate-tab';
import ChartDrawer from '../swap/chart-drawer';

function Twap() {
	const { isDarkMode } = useTheme();
	const dispatch = useDispatch();
	const showChart = useSelector(getShowChart);

	// phần uniform row
	const [options, setOptions] = useState([
		{
			value: `minutes`,
			content: 'Minutes'
		},
		{
			value: `hours`,
			content: 'Hours'
		},
		{
			value: `days`,
			content: 'Days'
		}
	]);
	const [seletedItem, setSeletedItem] = useState(options?.at(0));
	const dropdownChangeHandle = (item) => {
		setSeletedItem(item)
	}

	const [inputValue, setInputValue] = useState('');
	const inputChangeHandle = (ev) => {
		setInputValue(ev.target.value)
	}



	//toggle show Chart
	const toggleChart = () => {
		dispatch(toggleSlice());
	}

	// tab bên trái
	const [leftTabSelected, setLeftTabSelected] = useState(leftTab.at(0));
	const leftTabChangeHandle = (tab) => setLeftTabSelected(tab);

	// select token modal top
	const [selectTokenTopShow, setSelectTokenTopShow] = useState(false);
	const selectTokenTopOpen = () => {
		setSelectTokenTopShow(() => true)
	}
	const selectTokenTopClose = () => {
		setSelectTokenTopShow(() => false)
	}
	const stepsTop = [
		<Choose closeModal={selectTokenTopClose} />,
		<Manage closeModal={selectTokenTopClose} />
	]
	const [generateContentTop, setStepTop,] = useStep(0, stepsTop);

	// select token cho modal bot
	const [selectTokenBotShow, setSelectTokenBotShow] = useState(false);
	const selectTokenBotOpen = () => {
		setSelectTokenBotShow(true);
	}
	const selectTokenBotClose = () => {
		setSelectTokenBotShow(false);
	}
	const stepsBot = [
		<Choose closeModal={selectTokenBotClose} />,
		<Manage closeModal={selectTokenBotClose} />
	]
	const [generateContentBot, setStepBot,] = useStep(0, stepsBot);

	// theme
	const renderDarkTheme = () => {
		return isDarkMode ? swapCss.dark : '';
	};

	// useEffect
	useEffect(() => {
		if (selectTokenTopShow === false) {
			setStepTop(0);
		}
	}, [selectTokenTopShow])
	useEffect(() => {
		if (selectTokenBotShow === false) {
			setStepBot(0);
		}
	}, [selectTokenBotShow])
	useEffect(() => {
		console.log(leftTabSelected)
	}, [leftTabSelected])

	return (
		<>
			<HeaderComponent list={HeaderComponentList1} />
			<div className={`${swapCss.swap} ${renderDarkTheme()}`}>
				<div className={swapCss.swap__container}>
					<div className={`${swapCss.swap__content} ${swapCss.full}`}>
						<div className={swapCss.swap__left}>
							{
								showChart && <div className='mb-3'>
									<Chart />
								</div>
							}
							<div style={{ width: '100%' }}>
								<Tabs3
									tabs={leftTab}
									selectedTab={leftTabSelected}
									onChange={leftTabChangeHandle}
									headerClass={twapCss.leftTab}
								>
									<div data-item={leftTab.at(0).value}>
										You currently don't have open orders
									</div>
									<div data-item={leftTab.at(1).value}>
										You currently don't have canceled orders
									</div>
									<div data-item={leftTab.at(2).value}>
										You currently don't have completed orders
									</div>
									<div data-item={leftTab.at(3).value}>
										You currently don't have expired orders
									</div>
								</Tabs3>
							</div>
						</div>
						<div className={swapCss.swap__right}>
							<div className={swapCss.swap__tabs}>
								<NavigateTab />
							</div>
							<div className={swapCss.swap__card}>
								<div className={swapCss.swap__cardTop}>
									<div className={`${swapCss.swap__header} flex items-center justify-between`}>
										Swap
										<span style={{ cursor: 'pointer' }} className='flex items-center' onClick={toggleChart}>
											<FaChartBar />
										</span>
									</div>

								</div>
								<div className={swapCss.swap__cardBot}>
									<div className={swapCss.swap__select}>
										<SwapSelect
											image={
												<img src='src/assets/imgs/bnbicon.png' />
											}
											text={`BNB`}
											onClick={selectTokenTopOpen}
										/>
										<div className={swapCss.swap__balance}>
											Balance: 0
										</div>
									</div>
									<div className={`${swapCss.swap__input} ${swapCss.custom}`}>
										<Input
											styleContainer={{ height: '111px' }}
										/>
										<div className={swapCss.swap__input__tab}>
											<Tabs2
												listTabs={percentTab}
												selectedItem={{}}
												onChange={() => { }}
												typeButton={buttonClassesType.primaryThinOutline}
											/>
										</div>
									</div>
									<div className={swapCss.swap__button}>
										<button>
											<span>
												<FaArrowDown />
											</span>
											<span>
												<HiOutlineArrowsUpDown />
											</span>
										</button>
									</div>
									<div className={`${swapCss.swap__select}`}>
										<SwapSelect
											onClick={selectTokenBotOpen}
											image={
												<img src='src/assets/imgs/bnbicon.png' />
											}
											text={`BNB`}
										/>
										<div className={swapCss.swap__balance}>
											Balance: 0
										</div>
									</div>
									<div className={swapCss.swap__input}>
										<Input />
									</div>
									<div className={swapCss.swap__twap__limit}>
										<div className={swapCss.swap__twap__limit__left}>
											<div>
												Limit price
											</div>
											<div>
												<ToolTip
													content={(
														<div>
															<div>
																This sets the lowest price for trades in
															</div>
															<div>
																your order. Trades will ONLY be
															</div>
															<div>
																executed when this limit price is lower
															</div>
															<div>
																than or equal to the available market
															</div>
															<div>
																price. Some trades may not be  executed
															</div>
															<div>
																if the limit price is higher than the
															</div>
															<div>
																available market price and your order
															</div>
															<div>
																may only be partially filled.
															</div>
														</div>
													)}
													className={'flex items-center'}
												>
													<GoQuestion />
												</ToolTip>
											</div>
											<div>
												<Pill
													type={pillType.outlineSky}
												>
													<GrPowerReset />
													<span className='ml-3'>
														reset
													</span>
												</Pill>
											</div>
										</div>
										<div className={swapCss.swap__twap__limit__right}>
											<Switch />
										</div>
									</div>
									<div className='my-2'>
										<Input3 style={{ height: 40, boxShadow: 'none', textAlign: 'right' }} />
									</div>
									<div className='my-2'>
										<UniformRow
											text={`Trade interval`}
											popupContent={`The estimated time that will elapse between each trade in your order. Note that as this time includes an allowance of two minutes for bidder auction and block settlement, which cannot be predicted exactly, actual time may vary.`}
											options={options}
											selectedOption={seletedItem}
											dropdownOnChange={dropdownChangeHandle}
											inputValue={inputValue}
											inputOnChange={inputChangeHandle}
										/>
									</div>
									<div className='my-2'>
										<UniformRow
											text={`Max duration`}
											popupContent={`The maximum time during which the total amount of individual trades making up your full order can be executed. Note that depending on your parameters, your order may be filled earlier than this time, partially filled or not filled at all.`}
											options={options}
											selectedOption={seletedItem}
											dropdownOnChange={dropdownChangeHandle}
											inputValue={inputValue}
											inputOnChange={inputChangeHandle}
										/>
									</div>
									<div className={swapCss.swap__action}>
										<Button
											isDark={isDarkMode}
											style={{ width: '100%' }}
										>
											Connect Wallet
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div >
				<FooterComponent />
				<ChartDrawer />
			</div >
			<Modal
				show={selectTokenTopShow}
				setShow={setSelectTokenTopShow}
				showHeader={false}
				content={generateContentTop()}
			/>
			<Modal
				show={selectTokenBotShow}
				setShow={setSelectTokenBotShow}
				showHeader={false}
				content={generateContentBot()}
			/>
		</>
	);
}

export default Twap;