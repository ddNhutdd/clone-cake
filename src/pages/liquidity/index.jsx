import React, { useState } from 'react';
import css from './liquidity.module.scss';
import HeaderComponent from 'src/components/header-component';
import { HeaderComponentList1 } from 'src/constants/header-component-list-1';
import FooterComponent from 'src/components/footer-component';
import Card from 'src/components/card';
import Tabs from 'src/components/tabs';
import CheckBox from 'src/components/check-box';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import Button, { buttonClassesType } from 'src/components/button';
import { FiPlus } from 'react-icons/fi';
import V2Content from './v2-content';
import Modal from 'src/components/modal';
import SettingModalContent from './setting-modal-content';
import { useNavigate } from 'react-router-dom';
import { url } from 'src/constants';
import listTabs from './list-tab';
import { useTheme } from 'src/context/dark-theme';

function Liquidity() {
	const navigate = useNavigate();







	// phần theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';





	// tabs
	const [tabSelectedItem, setTabSelectedItem] = useState(listTabs?.at(0));
	const listTabsChangeHandle = (item) => setTabSelectedItem(item);





	// transaction modal
	const [showTransactionModal, setShowTransactionModal] = useState(false);
	const openTransactionModal = () => setShowTransactionModal(true);
	const closeTransactionModal = () => setShowTransactionModal(false);





	// checkbox
	const [hideCheckBoxChecked, setHideCheckBoxChecked] = useState(false);





	// setting modal
	const [showSettingModal, setShowSettingModal] = useState();
	const openSettingModal = () => setShowSettingModal(true);
	const closeSettingModal = () => setShowSettingModal(false);









	// redirect
	const redirectPage = (page) => {
		navigate(page)
	}






	return (
		<div className={`${css.liquidity} ${darkClass}`}>
			<HeaderComponent list={HeaderComponentList1} />
			<div className={css.container}>
				<Card>
					<div className={css.liquidity__cardHeader}>
						<div className={css.liquidity__headerLeft}>
							Your Liquidity
						</div>
						<div className={css.liquidity__headerRight}>
							<FaClockRotateLeft onClick={openTransactionModal} />
							<IoMdSettings onClick={openSettingModal} />
						</div>
					</div>
					<div className={css.liquidity__text}>
						List of your liquidity positions
					</div>
					<div className={css.liquidity__line}></div>
					<div className={css.liquidity__option}>
						<div className={css.liquidity__optionLeft}>
							<CheckBox
								id={`hideCheckBox`}
								checked={hideCheckBoxChecked}
								setCheck={setHideCheckBoxChecked}
							>
								Hide closed positions
							</CheckBox>
						</div>
						<div className={css.liquidity__optionRight}>
							<Tabs
								listTabs={listTabs}
								onChange={listTabsChangeHandle}
								selectedItem={tabSelectedItem}
							/>
						</div>
					</div>
					<div className={css.liquidity__content}>
						{tabSelectedItem?.value === listTabs.at(-1).value && (
							<V2Content />
						)}
					</div>
					<Button
						onClick={redirectPage.bind(null, url.liquidityAdd)}
						className={css.liquidity__addButton}
					>
						<FiPlus />
						Add Liquidity
					</Button>
				</Card>
			</div>
			<FooterComponent />
			<Modal
				show={showTransactionModal}
				setShow={setShowTransactionModal}
				title={`Recent Transactions`}
				content={
					<Button
						className={`w-100`}
						type={buttonClassesType.primary}
					>
						Connect Wallet
					</Button>
				}
			/>
			<Modal
				show={showSettingModal}
				setShow={setShowSettingModal}
				title={`Settings`}
				content={<SettingModalContent />}
			/>
		</div>
	);
}

export default Liquidity;
