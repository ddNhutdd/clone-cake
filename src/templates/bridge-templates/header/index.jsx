import SwitchTheme from 'src/components/switch/switch-theme';
import css from './header.module.scss';
import { NavLink } from 'react-router-dom';
import BridgeHeaderDropdown from 'src/components/bridge-header-dropdown';
import { url } from 'src/constants';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import { useTheme } from 'src/context/dark-theme';

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
	//responsive
	const screen = useMediaQuery();

	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.header} ${darkClass}`}>
			<div className={css.header__left}>
				<div className={css.header__logo}>
					<>
						<NavLink>
							<img src={`/src/assets/imgs/logo${screen === widthDevice.width_576 ? '2' : ''}.svg`} alt="dk" />
						</NavLink>
						<NavLink>
							<img src={`/src/assets/imgs/logo${screen === widthDevice.width_576 ? '2' : '-text-light'}.svg`} alt="dk" />
						</NavLink>
					</>
				</div>
				<ul className={css.header__menu}>
					<li>
						<NavLink
							className={`${css.header__item} ${css.active}`}
							to={url.bridge}
						>
							CAKE
						</NavLink>
					</li>
					<li>
						<BridgeHeaderDropdown
							list={listEVMs}
						>
							<NavLink
								className={css.header__item}
								to={url.bridge}
							>
								EVMs
							</NavLink>
						</BridgeHeaderDropdown>
					</li>
					<li>
						<BridgeHeaderDropdown
							list={listAptos}
							showIcon={true}
						>
							<NavLink
								className={css.header__item}
								to={url.bridge}
							>
								Aptos
							</NavLink>
						</BridgeHeaderDropdown>
					</li>
					<li>
						<NavLink
							className={css.header__item}
							to={url.bridge}
						>
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