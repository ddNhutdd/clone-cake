import Money from 'src/templates/user/money';
import css from './header.module.scss';
import { IoMdSettings } from 'react-icons/io';
import PerButtonGroup from 'src/components/per-button-group';
import ScaleModal from 'src/components/scale-modal';
import { useState } from 'react';
import GoUpModal from 'src/components/go-up-modal';
import SettingModalContent from './setting-modal-content';
import TokenModalContent from './token-modal-content';
import ArbCircleIcon from 'src/assets/icons/arb-circle.icon';
import WalletIcon from './wallet-icon';
import AddressModalContent from './address-modal-content';

function Header() {

	// setting modal 
	const [settingModalShow, setSettingModalShow] = useState(false);
	const settingModalOpen = () => {
		setSettingModalShow(true);
	}
	const settingModalClose = () => {
		setSettingModalShow(false);
	}

	//token modal 
	const [tokenModalShow, setTokenModalShow] = useState(false);
	const tokenModalOpen = () => {
		setTokenModalShow(true);
	}
	const tokenModalClose = () => {
		setTokenModalShow(false);
	}

	//address modal 
	const [addressModalShow, setAddressModalShow] = useState(false);
	const addressModalOpen = () => {
		setAddressModalShow(true);
	}
	const addressModalClose = () => {
		setAddressModalShow(false);
	}

	return (
		<>
			<div className={css.header}>
				<div className={css.header__left}>
					<div className={css.header__image}>
						<img src="/src/assets/imgs/logo.svg" alt="dk" />
					</div>
				</div>
				<div className={css.header__right}>
					<div className={css.header__right__item}>
						<Money />
					</div>
					<div className={css.header__right__item}>
						<IoMdSettings
							onClick={settingModalOpen}
						/>
					</div>
					<div className={css.header__right__item}>
						<PerButtonGroup
							onClick={tokenModalOpen}
							img={<ArbCircleIcon />}
							text={`Arbitrum`}
						/>
					</div>
					<div className={css.header__right__item}>
						<PerButtonGroup
							onClick={addressModalOpen}
							img={<WalletIcon />}
							text={`0x..6642`}
						/>
					</div>
				</div>
			</div>
			<ScaleModal
				show={settingModalShow}
				close={settingModalClose}
				title={`Settings`}
			>
				<SettingModalContent />
			</ScaleModal>
			<GoUpModal
				show={tokenModalShow}
				close={tokenModalClose}
				title={`Switch Networks`}
			>
				<TokenModalContent />
			</GoUpModal>
			<GoUpModal
				show={addressModalShow}
				close={addressModalClose}
				title={``}
			>
				<AddressModalContent />
			</GoUpModal>
		</>
	)
}

export default Header