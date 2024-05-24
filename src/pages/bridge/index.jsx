import Warning from 'src/components/warning';
import css from './bridge.module.scss';
import { IoWarning } from "react-icons/io5";
import Card, { cardType } from 'src/components/card';
import Input from './input';
import Button from 'src/components/button';
import ArrowUpDownIcon from 'src/assets/icons/arrow-up-down.icon';
import OutputMoney from './output-money';
import BridgeModal from 'src/components/bridge-modal';
import { useState } from 'react';
import DestinationModalContent from './destination-modal-content';
import ToleranceModalContent from './tolerance-modal-content';
import TokenModalContent from './token-modal-content';
import NetworkModalContent from './network-modal-content';
import { useTheme } from 'src/context/dark-theme';
import { NavLink } from 'react-router-dom';
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';

function Bridge() {

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	// modal destination
	const [destinationModalStatus, setDestinationModalStatus] = useState(false);
	const destinationModalClose = () => {
		setDestinationModalStatus(false);
	}
	const destinationModalOpen = () => {
		setDestinationModalStatus(true);
	}

	// modal tolerance
	const [toleranceModalShow, setToleranceModalShow] = useState(false);
	const toleranceModalClose = () => {
		setToleranceModalShow(false);
	}
	const toleranceModalOpen = () => {
		setToleranceModalShow(true);
	}

	// modal Token
	const [tokenModalShow, setTokenModalShow] = useState(false);
	const tokenModalClose = () => {
		setTokenModalShow(false);
	}
	const tokenModalOpen = () => {
		setTokenModalShow(true);
	}

	// network modal
	const [networkModalShow, setNetworkModalShow] = useState(false);
	const networkModalClose = () => {
		setNetworkModalShow(false);
	}
	const networkModalOpen = () => {
		setNetworkModalShow(true);
	}

	return (
		<>
			<div className={`${css.bridge} ${darkClass}`}>
				<div className={css.container}>
					<div className={css.bridge__content}>
						<Warning
							icon={<IoWarning />}
						>
							<div className={css.bridge__warning}>
								Outbound transfers from Polygon zkEVM are subject to a 7 days delay for block confirmations.
							</div>
						</Warning>
						<Card
							type={cardType.flat}
							className={css.bridge__card}
							classNameContent={css.bridge__cardContent}
						>
							<div className={css.bridge__connect}>
								Connect
							</div>
							<div className={css.bridge__input}>
								<Input
									tokenModalOpen={tokenModalOpen}
									networkModalOpen={networkModalOpen}
								/>
							</div>
							<div className={css.bridge__arrow}>
								<ArrowUpDownIcon />
							</div>
							<div className={css.bridge__connect}>
								Connect
							</div>
							<div className={css.bridge__input}>
								<OutputMoney
									tokenModalOpen={tokenModalOpen}
									networkModalOpen={networkModalOpen}
								/>
							</div>
							<div className={css.bridge__rowContainer}>
								<div className={css.bridge__row}>
									<div>
										Gas on destination
									</div>
									<div
										onClick={destinationModalOpen}
										className={css[`bridge--blue`]}
									>
										0.24 ETH
									</div>
								</div>
								<div className={css.bridge__row}>
									<div>
										You will receive
									</div>
									<div>
										__
									</div>
								</div>
								<div className={css.bridge__row}>
									<div>
										Fee
									</div>
									<div>
										1097.20 USD
									</div>
								</div>
								<div className={css.bridge__row}>
									<div>
										Slippage tolerance
									</div>
									<div
										className={css[`bridge--blue`]}
										onClick={toleranceModalOpen}
									>
										0.50%
									</div>
								</div>
							</div>
							<div>
								<Button className={'w-100'}>
									Connect
								</Button>
							</div>
						</Card>
						<div className={css.bridge__link}>
							<NavLink>
								How to bridge?
								<ArrowSquareIcon />
							</NavLink>
						</div>
						<div className={css.bridge__link}>
							<NavLink>
								Need Help?
								<ArrowSquareIcon />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
			<BridgeModal
				closeModal={destinationModalClose}
				show={destinationModalStatus}
				header={`Get ready for your destination`}
			>
				<DestinationModalContent />
			</BridgeModal>
			<BridgeModal
				closeModal={toleranceModalClose}
				show={toleranceModalShow}
				header={`Slippage tolerance`}
			>
				<ToleranceModalContent />
			</BridgeModal>
			<BridgeModal
				closeModal={tokenModalClose}
				show={tokenModalShow}
				header={`Token`}
			>
				<TokenModalContent />
			</BridgeModal>
			<BridgeModal
				closeModal={networkModalClose}
				show={networkModalShow}
				header={`Network`}
			>
				<NetworkModalContent />
			</BridgeModal>
		</>
	)
}

export default Bridge;