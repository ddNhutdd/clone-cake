import HeaderComponent from '../../components/header-component';
import FooterComponent from '../../components/footer-component';
import css from './swap.module.scss';
import { GiCash } from 'react-icons/gi';
import { FaChartBar } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { GrRotateRight } from 'react-icons/gr';
import SwapSelect from './swap-select';
import Input from 'src/components/input';
import { FaRegCopy } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import Button from 'src/components/button';
import { VscArrowSwap } from 'react-icons/vsc';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { useTheme } from 'src/context/dark-theme';
import { HeaderComponentList1 } from 'src/constants/header-component-list-1.jsx';
import Modal from 'src/components/modal';
import { useEffect, useState } from 'react';
import useStep from 'src/hooks/use-step';
import Choose from './choose';
import Manage from './manage';
import Tabs from 'src/components/tabs';
import { ToolTip, tooltipPosition } from 'src/components/tooltip';
import { url } from 'src/constants';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShowChart, toggleSlice } from 'src/redux/slices/swap.slices';
import Chart from './chart';
import { useNavigate } from 'react-router-dom';

function Swap() {
	const { isDarkMode } = useTheme();
	const dispatch = useDispatch();
	const showChart = useSelector(getShowChart);
	const navigate = useNavigate();

	// tab 
	const tabList = [
		{
			id: 1,
			content: 'MARKET',
			value: 'market'
		},
		{
			id: 2,
			content: 'TWAP',
			value: 'twap'
		},
		{
			id: 3,
			content: 'LIMIT',
			value: 'limit'
		}
	]
	const [tabSelected, setTabSelected] = useState(tabList.at(0));
	const tabChangeHandle = (tab) => {
		setTabSelected(tab);
	}
	//toggle show Chart
	const toggleChart = () => {
		dispatch(toggleSlice());
	}

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
		return isDarkMode ? css.dark : '';
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
		if (tabSelected.value === tabList?.at(1)?.value) {
			navigate(url.twap);
		}
	}, [tabSelected])

	return (
		<>
			<HeaderComponent list={HeaderComponentList1} />
			<div className={`${css.swap} ${renderDarkTheme()}`}>
				<div className={css.swap__container}>
					<div className={`${css.swap__content} ${css.full}`}>
						{
							showChart && <div className={css.swap__left}>
								<Chart />
							</div>
						}

						<div className={css.swap__right}>
							<div className={css.swap__tabs}>
								<Tabs
									listTabs={tabList}
									selectedItem={tabSelected}
									onChange={tabChangeHandle}
								/>
							</div>
							<div className={css.swap__card}>
								<div className={css.swap__cardTop}>
									<div className={css.swap__header}>Swap</div>
									<div className={css.swap__text}>
										Trade tokens in an instant
									</div>
									<div className={css.swap__list}>
										<div className={css.swap__listItem}>
											<ToolTip
												position={tooltipPosition.bottom}
												content="Buy crypto with fiat "
											>
												<NavLink
													to={url.buyCrypto}
												>
													<GiCash />
												</NavLink>
											</ToolTip>

										</div>
										<div className={css.swap__listItem}>
											<span onClick={toggleChart}>
												<FaChartBar />
											</span>
										</div>
										<div className={css.swap__listItem}>
											<FaFire />
										</div>
										<div className={css.swap__listItem}>
											<IoSettingsSharp />
										</div>
										<div className={css.swap__listItem}>
											<VscHistory />
										</div>
										<div className={css.swap__listItem}>
											<GrRotateRight />
										</div>
									</div>
								</div>
								<div className={css.swap__cardBot}>
									<div className={css.swap__select}>
										<SwapSelect
											image={
												<img src='src/assets/imgs/bnbicon.png' />
											}
											text={`BNB`}
											onClick={selectTokenTopOpen}
										/>
									</div>
									<div className={css.swap__input}>
										<Input />
									</div>
									<div className={css.swap__button}>
										<button>
											<span>
												<FaArrowDown />
											</span>
											<span>
												<HiOutlineArrowsUpDown />
											</span>
										</button>
									</div>
									<div className={`${css.swap__select}`}>
										<SwapSelect
											onClick={selectTokenBotOpen}
											image={
												<img src='src/assets/imgs/bnbicon.png' />
											}
											text={`BNB`}
										/>
										<span>
											<FaRegCopy />
										</span>
									</div>
									<div className={css.swap__input}>
										<Input />
									</div>
									<div className={css.swap__info}>
										<div className={css.swap__infoItem}>
											<div className={css.swap__left}>
												Price
											</div>
											<div className={css.swap__right}>
												1 CAKE2367166670{' '}
												<span>
													<VscArrowSwap />
												</span>{' '}
												BNB{' '}
												<span>
													<FaArrowsRotate />
												</span>
											</div>
										</div>
										<div className={css.swap__infoItem}>
											<div className={css.swap__left}>
												Slippage Tolerance <IoPencil />
											</div>
											<div
												className={`${css.swap__right} ${css['swap__right--bold']}`}
											>
												0.5%
											</div>
										</div>
									</div>
									<div className={css.swap__action}>
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
				</div>
				<FooterComponent />
			</div>
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

export default Swap;
