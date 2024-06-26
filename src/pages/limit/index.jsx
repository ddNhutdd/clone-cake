import HeaderComponent from '../../components/header-component';
import FooterComponent from '../../components/footer-component';
import swapCss from '../swap/swap.module.scss';
import twapCss from '../twap/twap.module.scss';
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
import percentTab from './percent-tab';
import Tabs2 from 'src/components/tabs-2';
import { ToolTip } from 'src/components/tooltip';
import Pill, { pillType } from 'src/components/pill';
import { GrPowerReset } from "react-icons/gr";
import Switch from 'src/components/switch/switch';
import Input3 from 'src/components/input-3';
import { GoQuestion } from "react-icons/go";
import NavigateTab from '../swap/navigate-tab';
import leftTab from '../twap/left-tabs';
import ChartDrawer from '../swap/chart-drawer';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';

function Limit() {
	const { isDarkMode } = useTheme();
	const dispatch = useDispatch();
	const showChart = useSelector(getShowChart);
	const screen = useMediaQuery();








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










	return (
		<>
			<HeaderComponent list={HeaderComponentList1} />
			<div className={`${swapCss.swap} ${renderDarkTheme()}`}>
				<div className={swapCss.swap__container}>
					<div className={`${swapCss.swap__content} ${swapCss.full}`}>
						<div className={swapCss.swap__left}>
							{
								showChart &&
								screen !== widthDevice.width_576 &&
								screen !== widthDevice.width_768 &&
								widthDevice.width_992 &&
								<div className='mb-3'>
									<Chart />
								</div>
							}
							<div>
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
												customItem={swapCss.swap__customTab}
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

export default Limit;