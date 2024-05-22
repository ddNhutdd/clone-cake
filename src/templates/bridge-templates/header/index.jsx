import SwitchTheme from 'src/components/switch/switch-theme';
import css from './header.module.scss';
import { NavLink } from 'react-router-dom';
import BridgeHeaderDropdown from 'src/components/bridge-header-dropdown';

const listEVMs = [
	{
		content: 'Axelar'
	},
	{
		content: 'Stargate'
	},
	{
		content: 'Wormhole'
	}
]

const listAptos = [
	{
		content: 'LayerZero'
	},
	{
		content: 'Celer cBridge'
	},
	{
		content: 'Wormhole'
	}
]

function Header() {
	return (
		<div className={css.header}>
			<div className={css.header__left}>
				<div className={css.header__logo}>
					<NavLink>
						<img src="/src/assets/imgs/logo.svg" alt="dk" />
					</NavLink>
					<NavLink>
						<img src="/src/assets/imgs/logo-text-light.svg" alt="dk" />
					</NavLink>
				</div>
				<ul className={css.header__menu}>
					<li>
						<NavLink className={`${css.header__item} ${css.active}`}>
							CAKE
						</NavLink>
					</li>
					<li>
						<BridgeHeaderDropdown
							list={listEVMs}
						>
							<NavLink className={css.header__item}>
								EVMs
							</NavLink>
						</BridgeHeaderDropdown>
					</li>
					<li>
						<BridgeHeaderDropdown
							list={listAptos}
							showIcon={true}
						>
							<NavLink className={css.header__item}>
								Aptos
							</NavLink>
						</BridgeHeaderDropdown>
					</li>
					<li>
						<NavLink className={css.header__item}>
							Swap
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={css.header__right}>
				<SwitchTheme />
			</div>
		</div>
	)
}

export default Header