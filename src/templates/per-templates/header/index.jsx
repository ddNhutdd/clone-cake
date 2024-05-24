import Money from 'src/templates/user/money';
import css from './header.module.scss';
import { IoMdSettings } from 'react-icons/io';
import PerButtonGroup from 'src/components/per-button-group';
import ScaleModal from 'src/components/scale-modal';
import { useState } from 'react';

function Header() {

	// setting modal 
	const [settingModalShow, setSettingModalShow] = useState(false);
	const settingModalOpen = () => {
		setSettingModalShow(true);
	}
	const settingModalClose = () => {
		setSettingModalShow(false);
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
						<IoMdSettings onClick={settingModalOpen} />
					</div>
					<div className={css.header__right__item}>
						<PerButtonGroup />
					</div>
					<div className={css.header__right__item}>
						<PerButtonGroup />
					</div>
				</div>
			</div>
			<ScaleModal
				show={settingModalShow}
				close={settingModalClose}
			/>
		</>
	)
}

export default Header