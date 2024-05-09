import SwitchTheme from 'src/components/switch/switch-theme';
import css from './settings-modal-content.module.scss';
import { ToolTip } from 'src/components/tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";
import Switch from 'src/components/switch/switch';
import Pill, { pillType } from 'src/components/pill';
import Tabs2 from 'src/components/tabs-2';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';

function SettingsModalContent() {

	// phần theme
	const { isDarkMode } = useTheme();
	const classDark = isDarkMode ? css.dark : '';


	// phần tab
	const [tabList,] = useState([
		{
			id: 1,
			content: (
				<div style={{ whiteSpace: 'nowrap' }}>
					Default
				</div>
			),
			value: 'default'
		},
		{
			id: 2,
			content: (
				<div style={{ whiteSpace: 'nowrap' }}>
					Standard (1)
				</div>
			),
			value: '1'
		},
		{
			id: 3,
			content: (
				<div style={{ whiteSpace: 'nowrap' }}>
					Fast (4)
				</div>
			),
			value: '4'
		},
		{
			id: 4,
			content: (
				<div style={{ whiteSpace: 'nowrap' }}>
					Instant (5)
				</div>
			),
			value: '5'
		}
	]);
	const [selectedTabId, setSelectedTabId] = useState(1);
	const tabChangeHandle = (item) => {
		setSelectedTabId(item.id)
	}


	// switch test
	const [enable, setEnable] = useState();
	const swichChangeHandle = () => {
		setEnable(state => !state);
	}



	return (
		<div className={`${css.settingsModalContent} ${classDark}`}>
			<div className={css.settingsModalContent__title}>
				GLOBAL
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Dark mode
				</div>
				<div className={css.settingsModalContent__right}>
					<SwitchTheme active={true} change={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Subgraph Health Indicator
					<ToolTip
						content={`Turn on subgraph health indicator all
						the time. Default is to show the
						indicator only when the network is
						delayed`}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={enable} setChecked={swichChangeHandle} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Show username
					<ToolTip
						content={`Shows username of wallet instead of 
						bunnies`}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={true} setChecked={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Allow notifications
					<ToolTip
						content={`Enables the web notifications feature. If
						turned off you will be automatically
						unsubscribed and the notification bell
						will not be visible`}
					>
						<FaRegQuestionCircle />
					</ToolTip>
					<Pill
						type={pillType.outlineSky}
						style={{ fontWeight: 'bold' }}
					>
						BETA
					</Pill>
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={true} setChecked={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Show testnet
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={true} setChecked={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Token Risk Scanning
					<ToolTip
						content={(
							<div>
								<p>
									Automatic risk scanning for
									the selected token. This scanning result is
									for reference only, and should NOT be
									taken as investment advice.
								</p>

								<div>
									Provided by
									{" "}
									<span className='--primary-navy-blue --link'>
										HashDit
									</span>
								</div>

								<div>
									<span className='--primary-navy-blue --link'>
										Learn More
									</span>
								</div>
							</div>
						)}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={true} setChecked={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Default Transaction Speed (GWEI)
					<ToolTip
						content={(
							<div>
								<p>
									Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees.
								</p>
								<p>
									Choose “Default” to use the settings from your current blockchain RPC node.
								</p>
							</div>
						)}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.settingsModalContent__right}>
					<Switch checked={true} setChecked={() => { }} />
				</div>
			</div>
			<div>
				<Tabs2
					listTabs={tabList}
					selectedItem={tabList?.find(item => item.id === selectedTabId)}
					onChange={tabChangeHandle}
				/>
			</div>
		</div >
	)
}

export default SettingsModalContent