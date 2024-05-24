import SwitchTheme from 'src/components/switch/switch-theme';
import css from './setting-modal-content.module.scss';

function SettingModalContent() {
	return (
		<div className={css.settingModalContent}>
			<div>
				Dark Mode
			</div>
			<div>
				<SwitchTheme />
			</div>
		</div>
	)
}

export default SettingModalContent;