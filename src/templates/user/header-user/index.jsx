import { useEffect, useState, useRef } from 'react';
import css from './header-user.module.scss';
import { IoIosClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';
import Logo1 from '/src/assets/imgs/logo.svg';
import DropdownHeader, {
	dropdownHeaderAlignEnum,
} from 'components/dropdown-header';
import DropdownHeader2 from 'components/dropdown-header-2';
import Button, { buttonClassesType } from 'components/button';
import Money from 'src/templates/user/money';
import { useTheme } from 'src/context/dark-theme';
import logoTextLight from 'src/assets/imgs/logo-text-light.svg';
import { useDispatch } from 'react-redux';
import {
	setPaddingTopPage,
	setPaddingValue,
} from 'src/redux/slices/paddingTopPage';
import Modal from 'components/modal';
import { useWeb3Modal, useDisconnect } from '@web3modal/ethers/react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { truncatedWalletAddress } from 'src/utils';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { VscDebugDisconnect } from 'react-icons/vsc';
import ModalWalletContent from './modal-wallet-content';
import Web3 from 'web3';
import { languageList } from 'src/translate/i18n';
import { useLocation } from 'react-router-dom';
import { url } from 'src/constants';
import { useNavigate } from 'react-router-dom';
import SettingsModalContent from './settings-modal-content';
import ChainSelector from './header-chain';

function Header() {
	const { isDarkMode } = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const { disconnect: disConnectWallet } = useDisconnect();
	const { open: openConnectWalletWeb3 } = useWeb3Modal();
	const { address, chainId, isConnected } = useWeb3ModalAccount();

	// show chain Selector
	const [showChain, setShowChain] = useState(false);

	// phần modal settings
	const [settingsModalShow, setSettingsModalShow] = useState(false);
	const settingsModalOpen = () => {
		setSettingsModalShow(true);
	}
	const settingsModalClose = () => {
		setSettingsModalShow(false);
	}

	const earnList = [
		{
			id: 1,
			content: 'Farms',
		},
		{
			id: 2,
			content: 'Cake Staking',
			url: url.cakeStaking,
			onClick: () => { redirectPage(url.cakeStaking) }
		},
		{
			id: 3,
			content: 'Pool',
			url: url.pools,
			onClick: () => { redirectPage(url.pools) }
		},
		{
			id: 4,
			content: 'Position Manager',
		},
		{
			id: 5,
			content: 'Liquid Staking',
		},
		{
			id: 6,
			content: 'Simple Staking',
			url: url.staking,
			onClick: () => { redirectPage(url.staking) }
		},
	];

	const gameMenuList = [
		{
			id: 1,
			content: 'Game Marketplace',
			icon: true,
		},
		{
			id: 2,
			content: 'Prediction (BETA)',
		},
		{
			id: 3,
			content: 'Lottery',
		},
		{
			id: 4,
			content: 'Bottery (BETA)',
		},
	];

	const nftMenuList = [
		{
			id: 1,
			content: 'Overide',
		},
		{
			id: 2,
			content: 'Colection',
		},
		{
			id: 3,
			content: 'Activity',
		},
	];

	const threeDotMenuList = [
		{
			id: 1,
			content: 'Info',
			url: url.info,
			subUrl: [url.info_stable_swap, url.info_v3],
			onClick: () => { redirectPage(url.info) }
		},
		{
			id: 2,
			content: 'IFO',
			url: url.ifo,
			onClick: () => { redirectPage(url.ifo) }
		},
		{
			id: 3,
			content: 'Affiliate Program',
			url: url.affiliates,
			onClick: () => { redirectPage(url.affiliates) }
		},
		{
			id: 4,
			content: 'Voting',
			borderBottom: true,
		},
		{
			id: 5,
			content: 'LeaderBoard',
			borderBottom: true,
		},
		{
			id: 6,
			content: 'Blogs',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 7,
			content: 'Docs',
			icon: <FaArrowRightFromBracket />,
		},
	];

	const tradeMenu = [
		{
			id: 1,
			content: 'Swap',
			url: url.swap,
			subUrl: [url.limit, url.twap],
			onClick: () => { redirectPage(url.swap) }
		},
		{
			id: 2,
			content: 'Liquidity',
			url: url.liquidity,
			onClick: () => { redirectPage(url.liquidity) }
		},
		{
			id: 3,
			content: 'Pequetual',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 4,
			content: 'Bride',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 5,
			content: 'Limit (V2)',
		},
		{
			id: 6,
			content: 'Buy Crypto',
			url: url.buyCrypto,
			onClick: () => redirectPage(url.buyCrypto)
		},
		{
			id: 7,
			content: 'Trading Reward',
			subUrl: [url.topTraders],
			url: url.tradingReward,
			onClick: () => redirectPage(url.tradingReward)
		},
	];

	const listWallerConnected = [
		{
			id: 1,
			content: 'Wallet',
			borderBottom: true,
			onClick: (ev) => {
				showModalWallet(ev);
			},
		},
		{
			id: 2,
			content: 'Disconnect',
			onClick: () => {
				disConnectWallet();
			},
			icon: <VscDebugDisconnect style={{ fontSize: 23 }} />,
		},
	];

	const [isShowMenu, setIsShowMenu] = useState(true);
	const [isShowHeader1, setIsShowHeader1] = useState(true);
	const [isShowModalWallet, setIsShowModalWallet] = useState(false);
	const [walletAddress, setWalletAddress] = useState();
	const [balance, setBalance] = useState();
	const [, setUserChainId] = useState();

	const header = useRef(null);

	const renderActiveMenu = (list) => {
		const findItem = list.find(item => {
			// kiểm tra với url
			if (location.pathname === item.url) return true;

			// kiểm tra với subUrl
			return item?.subUrl?.find(sub => sub === location.pathname)
		})
		return Boolean(findItem);
	}
	const closeAllHeaderMenu = () => {
		const allMenuContainer = document.querySelectorAll('div[data-header-menu-container]');
		allMenuContainer.forEach(item => {
			item.classList.add('d-0');
		});
		setTimeout(() => {
			allMenuContainer.forEach(item => {
				item.classList.remove('d-0');
			});
		}, 200);
	}
	const redirectPage = (page) => {
		navigate(page);
		closeAllHeaderMenu();
	}
	const onScrollHandle = () => {
		let lastScrollTop = 0;
		return function () {
			let currentScroll = document.documentElement.scrollTop;
			if (currentScroll > lastScrollTop && currentScroll > 40) {
				setIsShowMenu(false);
				dispatch(setPaddingTopPage(0));
			} else {
				setIsShowMenu(true);
				dispatch(setPaddingTopPage());
			}

			lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
		};
	};
	const renderShowMenu = function () {
		return isShowMenu ? {} : { top: '-170px' };
	};
	const closeHeader1Handle = () => {
		dispatch(setPaddingValue(57));
		setIsShowHeader1(false);
	};
	const renderClassShowHeader1 = () => {
		return isShowHeader1 ? '' : 'd-0';
	};
	const openConnectWallet = () => {
		if (walletAddress) {
			return;
		}
		openConnectWalletWeb3({ view: 'Networks' });
	};
	const renderTextButtonConnect = () => {
		return walletAddress ?
			truncatedWalletAddress(walletAddress)
			: <>
				Connect
				<span className={`${css.header2__buttonText}`}>Wallet</span>
			</>;
	};
	const showModalWallet = (ev) => {
		ev.stopPropagation();
		setIsShowModalWallet(true);
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};
	const renderLogoByTheme = () => {
		return isDarkMode ?
			<img
				className={`${css['header2__icon__image1']}`}
				src={logoTextLight}
				alt='React Logo'
			/>
			: <img
				className={`${css['header2__icon__image1']}`}
				src={Logo1}
				alt='React Logo'
			/>;
	};
	const getBalance = async (address) => {
		const web3 = new Web3('https://cloudflare-eth.com');
		const weiBalance = await web3.eth.getBalance(address);
		const balanceInEth = web3.utils.fromWei(weiBalance, 'ether');
		setBalance(balanceInEth);
	};
	const disConnectWalletHandle = () => {
		disConnectWallet();
		setIsShowModalWallet(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScrollHandle());

		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const newHeight = entry.contentRect.height;
				dispatch(setPaddingValue(newHeight));
			}
		});
		observer.observe(header.current);

		return () => {
			window.removeEventListener('scroll', onScrollHandle());
			observer.disconnect();
		};
	}, []);
	useEffect(() => {
		if (isConnected) {
			setWalletAddress(address);
			setUserChainId(chainId);
			getBalance(address);
		} else {
			setWalletAddress(null);
			setUserChainId(null);
		}
	}, [isConnected]);
	useEffect(() => {
		const conditionHideChain = location.pathname === url.info ||
			location.pathname === url.info_stable_swap ||
			location.pathname === url.info_v3

		if (conditionHideChain) {
			setShowChain(false);
		}
		else {
			setShowChain(true);
		}
	}, [location])

	return (
		<div
			ref={header}
			style={renderShowMenu()}
			className={`${css['header']}`}
		>
			<div
				className={`${css['header1']}  ${renderClassShowHeader1()} flex w-100`}
			>
				<div
					className={`${css['header1__container']} grow-1 flex items-center justify-center`}
				>
					<div
						className={`${css['header1__content']} flex items-center justify-center w-md-100 pl-md-2`}
					>
						<div
							className={`${css['header1__imageContainer']} d-md-0`}
						>
							<img
								src={'/src/assets/imgs/header-warning.webp'}
								alt={'warning'}
							/>
						</div>
						<div className={`${css['header1__box']}`}>
							<span>PHISHING WARNING:</span>
							<span>please make sure you&lsquo;re visiting</span>
							<span> https://pancakeswap.finance</span>
							<span>- check the URL carefully.</span>
						</div>
					</div>
				</div>
				<div
					onClick={closeHeader1Handle}
					className={`${css['header1__close']} flex items-center justify-center hover-p`}
				>
					<IoIosClose />
				</div>
			</div>
			<div
				className={`${css['header2']
					} ${renderDarkTheme()} border-b-1 px-3 flex items-center justify-between`}
			>
				<div className={`${css['header2__left']} flex items-center`}>
					<div
						className={`${css['header2__icon']} flex align-center justify-between`}
					>
						<NavLink
							className={`flex align-center justify-between`}
							to={url.home}
						>
							{renderLogoByTheme()}
							<img
								className={css.header2__icon__image2}
								src={'src/assets/imgs/logo2.svg'}
								alt='logo'
							/>
						</NavLink>
					</div>
					<div
						className={`${css['header2__menu']} flex align-center ml-3`}
					>
						<DropdownHeader
							header={'Trade'}
							list={tradeMenu}
							active={renderActiveMenu(tradeMenu)}
						/>
						<DropdownHeader
							header={`Earn`}
							list={earnList}
							active={renderActiveMenu(earnList)}
						/>
						<DropdownHeader
							header={`Game`}
							list={gameMenuList}
							active={renderActiveMenu(gameMenuList)}
						/>
						<DropdownHeader
							header={`NFT`}
							list={nftMenuList}
							active={renderActiveMenu(nftMenuList)}
						/>
						<DropdownHeader
							header={<HiOutlineDotsHorizontal />}
							list={threeDotMenuList}
						/>
					</div>
				</div>
				<div
					className={`${css['header2__right']} flex items-center justify-center`}
				>
					<div
						className={`${css['header2__money']} flex items-center justify-center px-3 gap-1`}
					>
						<Money />
					</div>
					<div className='px-3'>
						<DropdownHeader2
							positionMenu={{
								top: '26px',
								right: '-103px',
								paddingTop: '18px',
							}}
							header={<MdLanguage />}
							list={languageList}
						/>
					</div>
					<div className='flex align-center items-center px-3 px-sm-1'>
						<IoSettingsSharp onClick={settingsModalOpen} style={{ fontSize: '25px', cursor: 'pointer' }} />
					</div>
					<div className='flex align-center items-center px-3 px-sm-1'>
						<IoIosNotifications style={{ fontSize: '25px' }} />
					</div>
					{
						showChain && <div
							className={`${css['header2__chain']} px-3 px-sm-1 relative`}
						>
							<ChainSelector />
						</div>
					}
					<div className='px-3 px-sm-1'>
						<DropdownHeader
							header={
								<Button
									onClick={openConnectWallet}
									isDark={isDarkMode}
									type={buttonClassesType.primaryThin}
								>
									{renderTextButtonConnect()}
								</Button>
							}
							list={listWallerConnected}
							align={dropdownHeaderAlignEnum.right}
							disabled={!walletAddress}
							headerHoverEffect={false}
						/>
					</div>
				</div>
			</div>
			<Modal
				show={isShowModalWallet}
				setShow={setIsShowModalWallet}
				title={`Your Wallet`}
				content={
					<ModalWalletContent
						disConnectHandle={disConnectWalletHandle}
						address={address}
						balance={Number(balance)}
					/>
				}
			/>
			<Modal
				show={settingsModalShow}
				setShow={setSettingsModalShow}
				title={'Settings'}
				content={<SettingsModalContent />}
			/>
		</div>
	);
}

export default Header;
