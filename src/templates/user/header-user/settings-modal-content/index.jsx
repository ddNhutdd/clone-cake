import SwitchTheme from 'src/components/switch/switch-theme';
import css from './settings-modal-content.module.scss';
import { ToolTip } from 'src/components/tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";
import Switch from 'src/components/switch/switch';
import Pill, { pillType } from 'src/components/pill';


function SettingsModalContent() {
	return (
		<div className={css.settingsModalContent}>
			<div className={css.settingsModalContent__title}>GLOBAL</div>
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
					<Switch checked={true} setChecked={() => { }} />
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
									Provided by <span className='--primary-navy-blue --link'>HashDit</span>
								</div>

								<div>
									Learn More
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
					Dark mode
				</div>
				<div className={css.settingsModalContent__right}>
					<SwitchTheme active={true} change={() => { }} />
				</div>
			</div>
			<div className={css.settingsModalContent__row}>
				<div className={css.settingsModalContent__left}>
					Dark mode
				</div>
				<div className={css.settingsModalContent__right}>
					<SwitchTheme active={true} change={() => { }} />
				</div>
			</div>
		</div>
	)
}

export default SettingsModalContent