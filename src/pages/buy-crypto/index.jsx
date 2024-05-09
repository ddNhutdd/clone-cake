import HeaderComponent from 'src/components/header-component';
import css from './buy-crypto.module.scss';
import FooterComponent from 'src/components/footer-component';
import { HeaderComponentList3 } from 'src/constants/header-component-list-3';
import Card from 'src/components/card';
import FaqItem from './faq-item';
import { NavLink } from 'react-router-dom';
import { FaRotateRight } from "react-icons/fa6";
import Input from './input';
import Button, { buttonClassesType } from 'src/components/button';
import Estimate from './estimate';
import SmartChain from './smart-chain';
import Provider from './provider';
import { useState } from 'react';
import Drawer from 'src/components/drawer';
import ProviderDrawerContent from './provider-drawer-content';
import ModalContent from './modal-content';
import Modal from 'src/components/modal';
import Pill, { pillType } from 'src/components/pill';
import { IoMdCheckmark } from 'react-icons/io';
import currencyModalList from './currencyModalList';
import { useTheme } from 'src/context/dark-theme';

function BuyCrypto() {
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';





	// Drawer
	const [providerDrawerShow, setProviderDrawerShow] = useState(false);
	const providerDrawerOpen = () => {
		setProviderDrawerShow(() => true);
	}






	// modal currency
	const currencyModalString = `select a currency`;
	const [modalCurrencyShow, setModalCurrencyShow] = useState(false);
	const modalCurrencyOpen = () => {
		setModalCurrencyShow(true);
	}






	// modal token
	const [modalTokenShow, setModalTokenShow] = useState(false);
	const modalTokenOpen = () => {
		setModalTokenShow(true);
	}
	const [switchChecked, setSwitchChecked] = useState(false);
	const tokenList = [
		{
			img: <img src='https://assets.pancakeswap.finance/web/onramp/btc.svg' alt='USD' />,
			top: 'USD',
			bot: 'United States Dollar',
			switch: true,
			switchChecked: switchChecked,
			switchSetCheck: setSwitchChecked
		},
		{
			img: <img src='https://pancakeswap.finance/images/currencies/usd.png' alt='USD' />,
			top: 'USD',
			bot: 'United States Dollar'
		},
		{
			img: <img src='https://pancakeswap.finance/images/currencies/usd.png' alt='USD' />,
			top: 'USD',
			bot: 'United States Dollar'
		}
	]




	

	return (
		<>
			<div className={`${css.buyCrypto} ${darkClass}`}>
				<HeaderComponent list={HeaderComponentList3} />
				<div className={css.container}>
					<Card
						classNameContent={`relative`}
						className={`${css.buyCrypto__card} ${css.top}`}
					>
						<div className={css.buyCrypto__top__header}>
							<div>
								<div className={css.buyCrypto__top__header__title}>
									Buy Crypto
								</div>
								<div className={css.buyCrypto__top__header__small}>
									Buy crypto in just a few clicks
								</div>
							</div>
							<div>
								<div className={css.buyCrypto__circle}>
									<FaRotateRight />
								</div>
							</div>
						</div>
						<div className={css.buyCrypto__top__content}>
							<div className={css.buyCryto__input}>
								<Input
									onShowModal={modalCurrencyOpen}
								/>
							</div>
							<div className={css.buyCryto__input}>
								<Input
									onShowModal={modalTokenOpen}
								/>
							</div>
							<div>
								<Provider
									img={<img src="https://assets.pancakeswap.finance/web/onramp/mercuryo.svg" alt="mercuryo" />}
									name={`Mercuryo`}
									exchange={`1 ETH = $3,115.39`}
									pill={(
										<Pill
											type={pillType.success}
											className={'gap-1'}
										>
											Best Price
											<IoMdCheckmark />
										</Pill>
									)}
									isButton
									onClick={providerDrawerOpen}
								/>
							</div>
							<div className='flex justify-center'>
								<SmartChain />
							</div>
							<div>
								<Estimate />
							</div>
							<div>
								<Button
									className={`w-100`}
									type={buttonClassesType.primary}
								>
									Connect Wallet
								</Button>
							</div>
						</div>
						<small>
							By continuing you agree to our
							{" "}
							<NavLink
								to={`https://pancakeswap.finance/terms-of-service`}
								className={`--link`}
							>
								terms of service
							</NavLink>
						</small>
						<Drawer
							open={providerDrawerShow}
							setOpen={setProviderDrawerShow}
							className={css.buyCrypto__providerDrawerCustom}
							classNameOverlay={css.buyCrypto__providerDrawerOverlayCustom}
						>
							<ProviderDrawerContent />
						</Drawer>
					</Card>
					<Card className={`${css.buyCrypto__card} ${css.bot}`}>
						<div className={css.buyCrypto__bot__header}>
							FAQ
						</div>
						<div className={css.buyCrypto__bot__content}>
							<FaqItem
								title={`Why can't I see my bitcoin purchase`}
								content={`Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.`}
							/>
							<FaqItem
								title={`Why can’t I see quotes from providers?`}
								content={`Some providers might not operate in your region or support the currency/token exchange requested.`}
							/>
							<FaqItem
								title={`What fiat currencies are supported?`}
								content={(
									<div>
										Different providers will support different currencies and payment methods in your region. Please refer to our
										{" "}
										<NavLink className={`--primary-navy-blue --link`}>
											documentation
										</NavLink>
										{" "}
										or
										{" "}
										<NavLink className={`--primary-navy-blue --link`}>
											partners documentation
										</NavLink>
										{" "}
										for more info.
									</div>
								)}
							/>
							<FaqItem
								title={`Where can find more information on the Buy Crypto feature?`}
								content={(
									<div>
										Please refer to our documentation
										{" "}
										<NavLink className={`--primary-navy-blue --link`}>
											here.
										</NavLink>
									</div>
								)}
							/>
						</div>
					</Card>
				</div >
				<FooterComponent />
			</div >
			<Modal
				show={modalCurrencyShow}
				setShow={setModalCurrencyShow}
				title={currencyModalString}
				content={<ModalContent
					smallText={currencyModalString}
					list={currencyModalList}
				/>}
			/>
			<Modal
				show={modalTokenShow}
				setShow={setModalTokenShow}
				title={`Select a Token to Purchase`}
				customCssModal={`relative`}
				content={<ModalContent
					smallText={`All tokens`}
					list={tokenList}
					allowNetwork={true}
				/>}

			/>
		</>
	)
}

export default BuyCrypto